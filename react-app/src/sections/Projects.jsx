import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [githubRepos, setGithubRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const sectionRef = useRef(null)

  // Las tarjetas locales se renderizan antes de consultar GitHub.
  useEffect(() => {
    let active = true
    let observer

    async function loadRepos() {
      setLoading(true)
      try {
        const { getGithubRepos } = await import('../services/githubApi')
        if (!active) return
        const repos = await getGithubRepos()
        if (active) setGithubRepos(repos)
      } catch {
        // Las tarjetas locales siguen disponibles si el módulo no carga.
      } finally {
        if (active) setLoading(false)
      }
    }

    if (typeof IntersectionObserver === 'function') {
      observer = new IntersectionObserver((entries) => {
        if (!active || !entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        loadRepos()
      }, { rootMargin: '400px 0px' })
      observer.observe(sectionRef.current)
    } else {
      loadRepos()
    }

    return () => {
      active = false
      observer?.disconnect()
    }
  }, [])

  // Combinar proyectos locales con datos de GitHub
  const enrichedProjects = projects.map((project) => {
    const repoName = project.github?.split('/').pop()

    const githubData = githubRepos.find(
      (repo) => repo.name === repoName
    )

    return {
      ...project,
      language: githubData?.language ?? null,
      stars: githubData?.stars ?? null,
    }
  })

  // Crear categorías sin duplicados
  const categories = [
    { value: 'Todos', labelKey: 'projects.filters.all' },
    ...new Map(
      projects.map((project) => [
        project.category,
        { value: project.category, labelKey: project.categoryKey },
      ])
    ).values(),
  ]

  // Filtrar los proyectos
  const filteredProjects =
    activeFilter === 'Todos'
      ? enrichedProjects
      : enrichedProjects.filter(
          (project) => project.category === activeFilter
        )

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      tabIndex={-1}
      aria-labelledby="projects-title"
      className="gio-section-layout"
    >
      <div className="gio-section-container">

        {/* Encabezado */}
        <m.div
          className="gio-reading-panel gio-section-heading"
          initial={reduceMotion ? false : { opacity: 0.94, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
        >
          <span className="gio-section-eyebrow text-gio-violet">
            {t('projects.eyebrow')}
          </span>

          <h2 id="projects-title" className="gio-section-title text-gio-ink">
            {t('projects.title')}
          </h2>

          <p className="gio-section-intro">
            {t('projects.subtitle')}
          </p>
        </m.div>

        {/* Filtros */}
        <div
          className="gio-section-start flex flex-wrap gap-3"
          role="group"
          aria-label={t('projects.filters.label')}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveFilter(category.value)}
              aria-pressed={activeFilter === category.value}
              className={`min-h-11 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeFilter === category.value
                  ? 'bg-gio-action text-gio-on-action'
                  : 'border border-gio-line bg-gio-raised text-gio-muted hover:border-gio-violet hover:text-gio-violet'
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </div>

        {/* Estado de carga */}
        <p role="status" className="sr-only">
          {loading ? t('projects.loading') : ''}
        </p>

        {/* Tarjetas de proyectos */}
        <div className="gio-project-grid gio-balanced-grid gio-grid mt-5 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Estado vacío */}
        {filteredProjects.length === 0 && (
          <p className="gio-reading-label mt-10 text-gio-muted">
            {t('projects.empty')}
          </p>
        )}

      </div>
    </section>
  )
}

export default Projects
