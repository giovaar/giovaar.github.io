
function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500 dark:hover:shadow-indigo-950/20">

      {/* Icono y categoría */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          {'</>'}
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          {project.category}
        </span>
      </div>

      {/* Nombre del proyecto */}
      <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {project.title}
      </h3>

      {/* Descripción */}
      <p className="mt-4 flex-1 leading-relaxed text-slate-600 dark:text-slate-300">
        {project.description}
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

      {/* Información de GitHub API */}
      {project.language && (
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span>
            Lenguaje: {project.language}
          </span>

          {project.stars !== null && (
            <span>
              ⭐ {project.stars} estrellas
            </span>
          )}
        </div>
      )}

      {/* Enlace al repositorio */}
      <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-700">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Ver repositorio
          <span aria-hidden="true">↗</span>
        </a>
      </div>

    </article>
  )
}

export default ProjectCard
