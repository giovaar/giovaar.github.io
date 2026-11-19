import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Download, ExternalLink, FileText } from 'lucide-react'

const skills = ['React', 'JavaScript', 'Python', 'SQL']
const documents = `${import.meta.env.BASE_URL}documents/`

export default function Hero() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-title"
      className="gio-hero relative isolate mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0.82, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: 'easeOut' }}
        className="gio-hero-copy relative isolate min-w-0"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gio-turquoise">
          {t('hero.welcome')}
        </p>
        <h1 id="hero-title" className="gio-hero-title mt-3 text-gio-ink">
          Giovanny <span className="block text-gio-gold">Arpaia</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg font-semibold leading-snug text-gio-ink sm:text-2xl">
          {t('hero.role')}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gio-muted sm:text-base">
          {t('hero.description')}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <a href="#proyectos" className="gio-hero-action bg-gio-action text-gio-on-action hover:bg-gio-action-hover">
            {t('hero.projectsButton')}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a href="#sobre-mi" className="gio-hero-action border border-gio-line bg-gio-surface text-gio-ink hover:bg-gio-raised">
            {t('hero.storyButton')}
          </a>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gio-muted">
          <a href={`${documents}CV_Giovanny_Arpaia.pdf`} target="_blank" rel="noopener noreferrer" className="gio-hero-link">
            <Download size={16} aria-hidden="true" />
            {t('hero.cvSpanish')}
          </a>
          <a href={`${documents}CV_Giovanny_Arpaia_English.pdf`} target="_blank" rel="noopener noreferrer" className="gio-hero-link">
            <FileText size={16} aria-hidden="true" />
            {t('hero.cvEnglish')}
          </a>
          <a href="https://github.com/giovaar" target="_blank" rel="noopener noreferrer" className="gio-hero-link"
            aria-label={`${t('common.github')} (${t('common.openNewTab')})`}
          >
            <ExternalLink size={16} aria-hidden="true" />
            GitHub
          </a>
          <a href="#contacto" className="gio-hero-link">{t('hero.contactButton')}</a>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill} className="rounded-full border border-gio-line px-3 py-1 text-xs font-medium text-gio-ink">
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="gio-hero-art hidden lg:grid" aria-hidden="true">
        <span>GA</span>
      </div>
    </section>
  )
}
