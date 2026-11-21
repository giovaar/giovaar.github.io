import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './AmbientBackground.css'

export default function VideoBackground({ src, paused }) {
  const { t } = useTranslation()
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (paused) return

    const video = videoRef.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const connection = navigator.connection
    let attempt = 0

    function releaseSource() {
      attempt += 1
      video.pause()
      if (video.hasAttribute('src')) {
        video.removeAttribute('src')
        video.load()
      }
    }

    function syncPlayback() {
      if (motion.matches || connection?.saveData) {
        releaseSource()
        setReady(false)
        return
      }
      if (document.hidden) {
        attempt += 1
        video.pause()
        return
      }

      const currentAttempt = ++attempt
      setFailed(false)
      video.muted = true
      if (!video.hasAttribute('src')) video.src = src
      video.play().catch((error) => {
        if (currentAttempt !== attempt) return
        setReady(false)
        if (error.name !== 'NotAllowedError' && error.name !== 'AbortError') setFailed(true)
      })
    }

    document.addEventListener('visibilitychange', syncPlayback)
    motion.addEventListener('change', syncPlayback)
    connection?.addEventListener?.('change', syncPlayback)
    const start = window.requestAnimationFrame(syncPlayback)

    return () => {
      window.cancelAnimationFrame(start)
      document.removeEventListener('visibilitychange', syncPlayback)
      motion.removeEventListener('change', syncPlayback)
      connection?.removeEventListener?.('change', syncPlayback)
      releaseSource()
    }
  }, [paused, src])

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
          data-ready={ready && !paused}
          onPlaying={() => setReady(true)}
          onEmptied={() => setReady(false)}
          onError={() => {
            setReady(false)
            setFailed(true)
          }}
        />
      </div>
      <span className="sr-only" role="status">
        {failed && !paused && t('experiencePicker.unavailable')}
      </span>
    </>
  )
}
