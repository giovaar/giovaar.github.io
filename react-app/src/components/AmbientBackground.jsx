import { lazy, Suspense, useEffect, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import './AmbientBackground.css'

const FloatingTechBackground = lazy(() => import('./FloatingTechBackground'))

const SCENES = ['lagoon', 'sunset', 'canopy', 'tide', 'horizon']
const SCENE_DURATION = 14000
const PAUSE_KEY = 'gio-ambient-paused'
const MOTION_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

function readPaused() {
  try {
    return sessionStorage.getItem(PAUSE_KEY) === 'true'
  } catch {
    return false
  }
}

function getSceneIndex(index, step) {
  return (index + step + SCENES.length) % SCENES.length
}

export default function AmbientBackground({ controlsHost }) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(readPaused)
  const [canAnimate, setCanAnimate] = useState(
    () => window.matchMedia(MOTION_QUERY).matches,
  )
  const [pageHidden, setPageHidden] = useState(() => document.hidden)
  const playing = !paused && canAnimate && !pageHidden

  useEffect(() => {
    const media = window.matchMedia(MOTION_QUERY)
    const syncMotion = () => setCanAnimate(media.matches)
    const syncVisibility = () => setPageHidden(document.hidden)

    media.addEventListener('change', syncMotion)
    document.addEventListener('visibilitychange', syncVisibility)
    syncMotion()
    syncVisibility()

    return () => {
      media.removeEventListener('change', syncMotion)
      document.removeEventListener('visibilitychange', syncVisibility)
    }
  }, [])

  useEffect(() => {
    if (!playing) return

    const timer = window.setTimeout(() => {
      setIndex((current) => getSceneIndex(current, 1))
    }, SCENE_DURATION)

    return () => window.clearTimeout(timer)
  }, [index, playing])

  function togglePlayback() {
    const nextPaused = !paused
    setPaused(nextPaused)

    try {
      sessionStorage.setItem(PAUSE_KEY, String(nextPaused))
    } catch {
      // La preferencia se conserva en el estado de React.
    }
  }

  const scene = SCENES[index]
  const playbackLabel = t(paused ? 'ambient.play' : 'ambient.pause')

  return (
    <>
      <div className="gio-ambient" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={scene}
            className="gio-ambient-scene"
            data-scene={scene}
            data-playing={playing}
            initial={canAnimate ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={{ opacity: canAnimate ? 0 : 1 }}
            transition={{ duration: canAnimate ? 0.55 : 0, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <Suspense fallback={null}>
          <FloatingTechBackground playing={playing} />
        </Suspense>
      </div>

      {canAnimate && controlsHost && createPortal(
        <div
          className="gio-ambient-controls"
          role="group"
          aria-label={t('ambient.label')}
        >
          <div className="gio-ambient-actions">
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={playbackLabel}
              title={playbackLabel}
            >
              {paused
                ? <Play size={17} aria-hidden="true" />
                : <Pause size={17} aria-hidden="true" />}
            </button>
          </div>
        </div>,
        controlsHost,
      )}
    </>
  )
}
