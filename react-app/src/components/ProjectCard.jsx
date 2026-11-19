
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'

import {
  Code2,
  Gamepad2,
  Database,
  GitBranch,
  ExternalLink,
  Star,
  Play,
  ChevronDown,
} from 'lucide-react'

const storyFields = ['objective', 'solution', 'technologies', 'learning']

function httpUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return null

  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null
  } catch {
    return null
  }
}

function ProjectCategoryIcon({ category }) {
  switch (category) {
    case 'Videojuegos':
      return <Gamepad2 size={24} strokeWidth={1.8} aria-hidden="true" />

    case 'Web':
      return <Code2 size={24} strokeWidth={1.8} aria-hidden="true" />

    case 'Software':
      return <Database size={24} strokeWidth={1.8} aria-hidden="true" />

    default:
      return <Code2 size={24} strokeWidth={1.8} aria-hidden="true" />
  }
}

function ProjectCard({ project, index }) {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const { image, story } = project
  const codeUrl = httpUrl(project.github)
  const demoUrl = httpUrl(project.demo)
  const demoLabel = t(project.category === 'Videojuegos'
    ? 'projects.card.playNow'
    : 'projects.card.viewDemo')
  const showStory = story?.objective && story?.solution
  const showLanguage = project.language && !project.technologies.includes(project.language)
  const showStars = Number.isInteger(project.stars)
  const externalLabel = (action) => `${action} · ${project.title} (${t('common.openNewTab')})`

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0.9, y: 8 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.32,
        delay: reduceMotion ? 0 : Math.min(index, 3) * 0.045,
        ease: 'easeOut',
      }}
      className="gio-project-card gio-card gio-card-padding rounded-2xl transition-colors duration-150 hover:border-gio-violet focus-within:border-gio-violet motion-reduce:transition-none"
    >
      <header>
        {image && (
          <div className="mb-4 overflow-hidden rounded-xl border border-gio-line bg-gio-raised">
            <img              src={image.src}              width={image.width}              height={image.height}              alt={t(image.altKey)}              loading="lazy"              decoding="async"              className="aspect-video h-auto w-full object-contain"            />
          </div>
        )}

        <div className="flex items-center gap-3">
          {!image && (
            <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-gio-line bg-gio-raised text-gio-violet">
              <ProjectCategoryIcon category={project.category} />
            </div>
          )}
          <p className="text-xs font-semibold uppercase tracking-widest text-gio-violet">
            {t(project.categoryKey)}
          </p>
        </div>
        <h3 className="mt-4 text-2xl leading-tight font-bold tracking-tight text-gio-ink">
          {project.title}
        </h3>
      </header>

      <p className="leading-relaxed text-gio-muted">
        {t(project.descriptionKey)}
      </p>

      <ul className="flex flex-wrap content-start gap-2" role="list">
        {project.technologies.map((technology) => (
          <li key={technology} className="rounded-md bg-gio-raised px-2.5 py-1 text-xs font-medium text-gio-ink">
            {technology}
          </li>
        ))}
      </ul>

      <div>
        <footer>
          <div className="flex flex-wrap items-center gap-x-4 border-t border-gio-line pt-2">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={externalLabel(t('projects.card.viewCode'))}
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-gio-violet hover:underline"
              >
                <GitBranch size={16} aria-hidden="true" />
                {t('projects.card.viewCode')}
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            )}
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={externalLabel(demoLabel)}
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-gio-turquoise hover:underline"
              >
                <Play size={16} aria-hidden="true" />
                {demoLabel}
              </a>
            ) : (
              <span className="py-2 text-xs text-gio-muted">{t('projects.card.noDemo')}</span>
            )}
          </div>

          {(showLanguage || showStars) && (
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gio-muted">
              {showLanguage && (
                <span className="inline-flex items-center gap-1.5">
                  <Code2 size={14} aria-hidden="true" />
                  {project.language}
                </span>
              )}
              {showStars && (
                <span className="inline-flex items-center gap-1.5">
                  <Star size={14} aria-hidden="true" />
                  {t('projects.card.stars', { count: project.stars })}
                </span>
              )}
            </div>
          )}
        </footer>

        {showStory && (
          <details className="group mt-3 border-t border-gio-line pt-1">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 rounded-sm text-sm font-semibold text-gio-ink hover:text-gio-violet [&::-webkit-details-marker]:hidden">
              <span>
                {t('projects.card.details')}
                <span className="sr-only"> · {project.title}</span>
              </span>
              <ChevronDown size={16} aria-hidden="true" className="shrink-0 group-open:rotate-180" />
            </summary>
            <dl className="mt-2 space-y-3 text-sm leading-relaxed">
              {storyFields.map((field) => story[field] && (
                <div key={field}>
                  <dt className="font-semibold text-gio-ink">{t(`projects.story.${field}`)}</dt>
                  <dd className="mt-0.5 text-gio-muted">{t(story[field])}</dd>
                </div>
              ))}
            </dl>
          </details>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard
