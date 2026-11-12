
const interests = [
  {
    number: '01',
    title: 'Desarrollo de software',
    description:
      'Me interesa construir aplicaciones funcionales, organizadas y fáciles de mantener.',
  },
  {
    number: '02',
    title: 'Bases de datos',
    description:
      'Disfruto trabajar con SQL, organizar información y aprender a diseñar bases de datos.',
  },
  {
    number: '03',
    title: 'Análisis de datos',
    description:
      'Estoy desarrollando habilidades para analizar información y crear visualizaciones útiles.',
  },
  {
    number: '04',
    title: 'Desarrollo web',
    description:
      'Estoy aprendiendo herramientas modernas como React para crear experiencias web.',
  },
]

function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl">

        {/* Presentación */}
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Sobre mí
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Tecnología, aprendizaje y proyectos con propósito.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Soy Giovanny Arpaia, estudiante de Ingeniería de
            Sistemas y Computacional en la Universidad
            Tecnológica de Panamá.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Me gusta comprender cómo funcionan las tecnologías,
            resolver problemas y convertir ideas en soluciones
            digitales. Complemento lo que aprendo en la
            universidad con proyectos personales y académicos.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Mi objetivo es seguir desarrollándome profesionalmente
            en ingeniería de software y análisis de datos,
            construyendo proyectos que demuestren mis conocimientos.
          </p>
        </div>

        {/* Tarjetas de intereses */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {interests.map((interest) => (
            <article
              key={interest.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500 dark:hover:shadow-indigo-950/20"
            >
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {interest.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {interest.title}
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                {interest.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
