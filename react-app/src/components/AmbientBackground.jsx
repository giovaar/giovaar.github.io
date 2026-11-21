import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import * as m from 'motion/react-m'
import './AmbientBackground.css'

const FloatingTechBackground = lazy(() => import('./FloatingTechBackground'))

const SCENES = ['lagoon', 'sunset', 'canopy', 'tide', 'horizon']
const SCENE_DURATION = 14000
const MOTION_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

function getSceneIndex(index, step) {
  return (index + step + SCENES.length) % SCENES.length
}

export default function AmbientBackground({ paused }) {
  const [index, setIndex] = useState(0)
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

  const scene = SCENES[index]

  return (
    <>
      <div className="gio-ambient" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
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
    </>
  )
}
