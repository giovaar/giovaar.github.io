
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AmbientBackground from './components/AmbientBackground'
import ExperienceSelector from './components/ExperienceSelector'
import VideoBackground from './components/VideoBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

const experienceKey = 'gio-visual-experience'
function approvedVideoUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : undefined
  } catch {
    return undefined
  }
}

const videoSources = import.meta.env.DEV
  ? {
      adventure: `${import.meta.env.BASE_URL}videos/aventuraChill.mp4`,
      after: `${import.meta.env.BASE_URL}videos/afterMiami.mp4`,
    }
  : {
      adventure: approvedVideoUrl(import.meta.env.VITE_ADVENTURE_VIDEO_URL),
      after: approvedVideoUrl(import.meta.env.VITE_AFTER_VIDEO_URL),
    }
const availableVideos = Object.keys(videoSources).filter((id) => videoSources[id])

function readExperience() {
  try {
    const saved = localStorage.getItem(experienceKey)
    if (availableVideos.includes(saved)) return saved
  } catch {
    // La experiencia original funciona sin almacenamiento.
  }

  return 'original'
}

function App() {
  const { t } = useTranslation()
  const [paused, setPaused] = useState(false)
  const [experience, setExperience] = useState(readExperience)
  const videoSource = videoSources[experience]

  function selectExperience(next) {
    setExperience(next)
    try {
      localStorage.setItem(experienceKey, next)
    } catch {
      // La experiencia seleccionada sigue activa durante esta visita.
    }
  }

  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-gio-surface focus:px-4 focus:py-2 focus:text-gio-ink"
      >
        {t('nav.skipToContent')}
      </a>
      <Navbar experienceControl={(
        <ExperienceSelector
          selected={experience}
          onSelect={selectExperience}
          availableVideos={availableVideos}
          paused={paused}
          onTogglePlayback={() => setPaused((current) => !current)}
        />
      )} />

      <main id="contenido-principal" tabIndex={-1} className="isolate" data-video-ambient={videoSource ? '' : undefined}>
        {videoSource ? (
          <VideoBackground
            key={experience}
            paused={paused}
            src={videoSource}
          />
        ) : <AmbientBackground paused={paused} />}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
