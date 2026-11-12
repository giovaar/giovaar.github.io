
function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-50 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-24">

        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Estudiante de Ingeniería de Sistemas
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl dark:text-white">
          Hola, soy{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            Giovanny Arpaia.
          </span>
        </h1>

        <h2 className="mt-6 text-xl font-medium text-slate-700 md:text-2xl dark:text-slate-200">
          Desarrollo de software y análisis de datos
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Soy estudiante de Ingeniería de Sistemas y Computacional
          en la Universidad Tecnológica de Panamá.
          Me interesa construir soluciones digitales mediante
          programación, desarrollo web y análisis de datos.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Ver mis proyectos
          </a>

          <a
            href="https://github.com/giovaar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-indigo-400"
          >
            Visitar GitHub
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {['React', 'JavaScript', 'Python', 'SQL'].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
