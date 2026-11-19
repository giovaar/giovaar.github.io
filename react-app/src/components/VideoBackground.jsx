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
  const attempt = useRef(0)
  const [ready, setReady] = useState(false)
  const [status, setStatus] = useState('paused')

  const suspend = useCallback(() => {
    attempt.current += 1
    const video = videoRef.current
    video.autoplay = false
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
    video.play().catch(() => {
      if (currentAttempt === attempt.current) fail()
    })
  }, [fail, src])

  useEffect(() => {
    const video = videoRef.current
    const media = window.matchMedia(motionQuery)
    requested.current = !media.matches

    function onVisibilityChange() {
      if (document.hidden) suspend()
      else if (requested.current) play()
    }

    function onMotionChange() {
      if (!media.matches) return
      requested.current = false
      suspend()
      setStatus((current) => current === 'unavailable' ? current : 'paused')
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    media.addEventListener('change', onMotionChange)
    const start = window.requestAnimationFrame(() => {
      if (requested.current) play()
    })

    return () => {
      window.cancelAnimationFrame(start)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      media.removeEventListener('change', onMotionChange)
      attempt.current += 1
      video.autoplay = false
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
          autoPlay={!window.matchMedia(motionQuery).matches}
          muted
          loop
          playsInline
          preload="none"
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
