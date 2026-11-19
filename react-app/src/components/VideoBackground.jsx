import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import './AmbientBackground.css'

const motionQuery = '(prefers-reduced-motion: reduce)'

export default function VideoBackground({ src, controlsHost }) {
  const { t } = useTranslation()
  const videoRef = useRef(null)
  const requested = useRef(false)
  const manual = useRef(false)
  const attempt = useRef(0)
  const [ready, setReady] = useState(false)
  const [status, setStatus] = useState('paused')

  const suspend = useCallback(() => {
    attempt.current += 1
    const video = videoRef.current
    video.pause()
  }, [])

  const fail = useCallback(() => {
    requested.current = false
    suspend()
    setReady(false)
    setStatus('unavailable')
  }, [suspend])

  const play = useCallback(() => {
    const video = videoRef.current
    if (document.hidden) return

    const currentAttempt = ++attempt.current
    video.muted = true
    if (!video.hasAttribute('src')) {
      video.src = src
    } else if (video.error) {
      video.load()
    }
    setStatus('loading')
    video.play().catch((error) => {
      if (currentAttempt !== attempt.current) return
      if (error.name === 'NotAllowedError') {
        requested.current = false
        setReady(false)
        setStatus('paused')
      } else {
        fail()
      }
    })
  }, [fail, src])

  useEffect(() => {
    const video = videoRef.current
    const media = window.matchMedia(motionQuery)
    const connection = navigator.connection
    manual.current = false
    requested.current = !media.matches && !connection?.saveData

    function onVisibilityChange() {
      if (document.hidden) suspend()
      else if (requested.current) play()
    }

    function onPlaybackPolicyChange() {
      if (!media.matches && (manual.current || !connection?.saveData)) return
      requested.current = false
      suspend()
      setReady(false)
      setStatus((current) => current === 'unavailable' ? current : 'paused')
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    media.addEventListener('change', onPlaybackPolicyChange)
    connection?.addEventListener?.('change', onPlaybackPolicyChange)
    const start = window.requestAnimationFrame(() => {
      if (requested.current) play()
    })

    return () => {
      window.cancelAnimationFrame(start)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      media.removeEventListener('change', onPlaybackPolicyChange)
      connection?.removeEventListener?.('change', onPlaybackPolicyChange)
      attempt.current += 1
      video.pause()
      if (video.hasAttribute('src')) {
        video.removeAttribute('src')
        video.load()
      }
    }
  }, [play, suspend])

  function togglePlayback() {
    if (requested.current && (status === 'playing' || status === 'loading')) {
      requested.current = false
      suspend()
      setStatus('paused')
    } else {
      manual.current = true
      requested.current = true
      play()
    }
  }

  const running = status === 'playing' || status === 'loading'
  const action = t(running ? 'experiencePicker.pause' : 'experiencePicker.play')

  return (
    <>
      <div className="gio-ambient gio-video-ambient" aria-hidden="true">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          className="gio-video-surface"
          data-ready={ready}
          onPlaying={() => {
            if (requested.current && !document.hidden) {
              setReady(true)
              setStatus('playing')
            } else {
              suspend()
            }
          }}
          onError={fail}
        />
      </div>
      {controlsHost && createPortal(
        <div className="gio-ambient-controls" role="group" aria-label={t('ambient.label')}>
          <div className="gio-ambient-actions">
            <button type="button" onClick={togglePlayback} aria-label={action} title={action}>
              {running ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
            </button>
          </div>
          <span className="gio-ambient-name" role="status">
            {status === 'unavailable' && t('experiencePicker.unavailable')}
          </span>
        </div>,
        controlsHost,
      )}
    </>
  )
}
