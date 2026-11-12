
import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  GitBranch,
  Download,
  ChevronDown,
  FileText,
} from 'lucide-react'

// Currículums disponibles
const cvOptions = [
  {
    label: 'CV en español',
    filename: 'CV_Giovanny_Arpaia.pdf',
  },
  {
    label: 'CV in English',
    filename: 'CV_Giovanny_Arpaia_English.pdf',
  },
]

function Hero() {
  const reduceMotion = useReducedMotion()

  const [cvMenuOpen, setCvMenuOpen] = useState(false)
  const cvMenuRef = useRef(null)

  // Cerrar el selector al hacer clic fuera o pulsar Escape
  useEffect(() => {
    function handlePointerDown(event) {
      if (
        cvMenuRef.current &&
        !cvMenuRef.current.contains(event.target)
      ) {
        setCvMenuOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setCvMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Animaciones de entrada
  const animation = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 25 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.6,
            delay,
            ease: 'easeOut',
          },
        }

  return (
    <section
      id="inicio"
      className="relative bg-slate-50 transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Contenedor principal responsive */}
      <div className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-16 sm:py-20 lg:min-h-[85vh] lg:py-24">

        {/* Etiqueta de presentación */}
        <motion.div {...animation(0.1)}>
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700 sm:text-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
            <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
            Estudiante de Ingeniería de Sistemas
          </span>
        </motion.div>

        {/* Nombre */}
        <motion.h1
          {...animation(0.2)}
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-7xl dark:text-white"
        >
          Hola, soy{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            Giovanny Arpaia.
          </span>
        </motion.h1>

        {/* Especialidad */}
        <motion.h2
          {...animation(0.3)}
          className="mt-6 text-lg font-semibold text-slate-700 sm:text-xl md:text-2xl dark:text-slate-200"
        >
          Desarrollo de software y análisis de datos
        </motion.h2>

        {/* Descripción */}
        <motion.p
          {...animation(0.4)}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg dark:text-slate-400"
        >
          Soy estudiante de Ingeniería de Sistemas y Computacional
          en la Universidad Tecnológica de Panamá.
          Me interesa construir soluciones digitales mediante
          programación, desarrollo web y análisis de datos.
        </motion.p>

        {/* Botones principales */}
        <motion.div
          {...animation(0.5)}
          className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-start sm:gap-4"
        >
          {/* Ver proyectos */}
          <a
            href="#proyectos"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 sm:px-6 sm:text-base"
          >
            Ver mis proyectos
            <ArrowRight size={18} aria-hidden="true" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/giovaar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-indigo-400 hover:text-indigo-600 sm:px-6 sm:text-base dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-indigo-400"
          >
            <GitBranch size={18} aria-hidden="true" />
            GitHub
          </a>

          {/* Selector de CV */}
          <div
            ref={cvMenuRef}
            className="relative w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => setCvMenuOpen((open) => !open)}
              aria-expanded={cvMenuOpen}
              aria-controls="hero-cv-options"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 sm:w-auto sm:px-6 sm:text-base dark:border-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-500/20"
            >
              <Download size={18} aria-hidden="true" />
              Descargar CV

              <ChevronDown
                size={17}
                aria-hidden="true"
                className={`transition-transform ${
                  cvMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Opciones de descarga */}
            {cvMenuOpen && (
              <div
                id="hero-cv-options"
                className="absolute left-0 top-full z-30 mt-2 w-full rounded-xl border border-slate-200 bg-white p-2 shadow-xl sm:w-60 dark:border-slate-700 dark:bg-slate-800"
              >
                {cvOptions.map((cv) => (
                  <a
                    key={cv.filename}
                    href={`${import.meta.env.BASE_URL}documents/${cv.filename}`}
                    download={cv.filename}
                    onClick={() => setCvMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-indigo-300"
                  >
                    <FileText size={18} aria-hidden="true" />
                    {cv.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Tecnologías */}
        <motion.div
          {...animation(0.6)}
          className="mt-12 flex flex-wrap gap-2 sm:mt-16 sm:gap-3"
        >
          {['React', 'JavaScript', 'Python', 'SQL'].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 sm:px-4 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
