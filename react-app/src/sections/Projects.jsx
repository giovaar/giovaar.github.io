
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import { getGithubRepos } from '../services/githubApi'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [githubRepos, setGithubRepos] = useState([])
  const [loading, setLoading] = useState(true)

  // Consultar los repositorios públicos de GitHub
  useEffect(() => {
    let active = true

    async function loadRepos() {
      const repos = await getGithubRepos()

      if (active) {
        setGithubRepos(repos)
        setLoading(false)
      }
    }

    loadRepos()

    return () => {
      active = false
    }
  }, [])

  // Combinar proyectos locales con datos de GitHub
  const enrichedProjects = projects.map((project) => {
    const repoName = project.github.split('/').pop()

    const githubData = githubRepos.find(
      (repo) => repo.name === repoName
    )

    return {
      ...project,
      language: githubData?.language ?? null,
      stars: githubData?.stars ?? null,
      updatedAt: githubData?.updatedAt ?? null,
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
      id="proyectos"
      className="scroll-mt-24 bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {t('projects.eyebrow')}
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {t('projects.title')}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filtros */}
        <div
          className="mt-10 flex flex-wrap gap-3"
          role="group"
          aria-label={t('projects.filters.label')}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveFilter(category.value)}
              aria-pressed={activeFilter === category.value}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeFilter === category.value
                  ? 'bg-indigo-600 text-white'
                  : 'border border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400'
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </div>

        {/* Estado de carga */}
        {loading && (
          <p
            role="status"
            className="mt-6 text-sm text-slate-500 dark:text-slate-400"
          >
            {t('projects.loading')}
          </p>
        )}

        {/* Tarjetas de proyectos */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Estado vacío */}
        {filteredProjects.length === 0 && (
          <p className="mt-10 text-slate-500 dark:text-slate-400">
            {t('projects.empty')}
          </p>
        )}

      </div>
    </section>
  )
}

export default Projects
