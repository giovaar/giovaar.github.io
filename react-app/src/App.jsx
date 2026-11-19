
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
const videoFiles = {
  adventure: 'aventuraChill.mp4',
  after: 'afterMiami.mp4',
}

function readExperience() {
  try {
    const saved = localStorage.getItem(experienceKey)
    if (saved === 'adventure' || saved === 'after') return saved
  } catch {
    // La experiencia original funciona sin almacenamiento.
  }

  return 'original'
}

function App() {
  const { t } = useTranslation()
  const [controlsHost, setControlsHost] = useState(null)
  const [experience, setExperience] = useState(() => import.meta.env.DEV ? readExperience() : 'original')
  const videoFile = import.meta.env.DEV ? videoFiles[experience] : undefined

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
          allowVideo={import.meta.env.DEV}
        />
      )} />

      <main id="contenido-principal" tabIndex={-1} className="isolate" data-video-ambient={videoFile ? '' : undefined}>
        <div ref={setControlsHost} className="gio-background-playback" />
        {videoFile ? (
          <VideoBackground
            key={experience}
            controlsHost={controlsHost}
            src={`${import.meta.env.BASE_URL}videos/${videoFile}`}
          />
        ) : <AmbientBackground controlsHost={controlsHost} />}
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
