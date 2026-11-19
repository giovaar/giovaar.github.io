
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
} from 'lucide-react'

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

function ProjectCard({ project }) {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 30 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      className="group flex h-full flex-col gio-card gio-card-interactive rounded-2xl p-7 transition-colors duration-300"
    >
      {/* Icono y categoría */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gio-raised text-gio-violet">
          <ProjectCategoryIcon category={project.category} />
        </div>

        <span className="rounded-full bg-gio-raised px-3 py-1 text-xs font-semibold text-gio-muted">
          {t(project.categoryKey)}
        </span>
      </div>

      {/* Nombre del proyecto */}
      <h3 className="text-2xl font-bold tracking-tight text-gio-ink">
        {project.title}
      </h3>

      {/* Descripción */}
      <p className="mt-4 flex-1 leading-relaxed text-gio-muted">
        {t(project.descriptionKey)}
      </p>

      {/* Tecnologías */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-gio-line bg-gio-raised px-3 py-1.5 text-xs font-medium text-gio-violet"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Información desde GitHub API */}
      {(project.language ||
        (project.stars !== null &&
          project.stars !== undefined)) && (
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gio-muted">

          {project.language && (
            <span className="flex items-center gap-1.5">
              <Code2 size={15} aria-hidden="true" />
              {project.language}
            </span>
          )}

          {project.stars !== null &&
            project.stars !== undefined && (
              <span className="flex items-center gap-1.5">
                <Star size={15} aria-hidden="true" />
                {t('projects.card.stars', { count: project.stars })}
              </span>
            )}
        </div>
      )}

      {/* Enlaces del proyecto */}
      <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-gio-line pt-5">

        {/* Código en GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gio-violet hover:underline"
        >
          <GitBranch size={17} aria-hidden="true" />
          {t('projects.card.viewCode')}
          <ExternalLink size={14} aria-hidden="true" />
        </a>

        {/* Demo o juego */}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gio-turquoise hover:underline"
          >
            <Play size={17} aria-hidden="true" />
            {t(
              project.category === 'Videojuegos'
                ? 'projects.card.playNow'
                : 'projects.card.viewDemo'
            )}
          </a>
        ) : (
          <span className="text-xs text-gio-muted">
            {t('projects.card.noDemo')}
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard
