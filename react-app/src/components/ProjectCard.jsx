
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
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 hover:border-indigo-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500 dark:hover:shadow-indigo-950/20"
    >
      {/* Icono y categoría */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          <ProjectCategoryIcon category={project.category} />
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          {t(project.categoryKey)}
        </span>
      </div>

      {/* Nombre del proyecto */}
      <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {project.title}
      </h3>

      {/* Descripción */}
      <p className="mt-4 flex-1 leading-relaxed text-slate-600 dark:text-slate-300">
        {t(project.descriptionKey)}
      </p>

      {/* Tecnologías */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Información desde GitHub API */}
      {(project.language ||
        (project.stars !== null &&
          project.stars !== undefined)) && (
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">

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
      <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-100 pt-5 dark:border-slate-700">

        {/* Código en GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            <Play size={17} aria-hidden="true" />
            {t(
              project.category === 'Videojuegos'
                ? 'projects.card.playNow'
                : 'projects.card.viewDemo'
            )}
          </a>
        ) : (
          <span className="text-xs text-slate-400 dark:text-slate-500">
            {t('projects.card.noDemo')}
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard
