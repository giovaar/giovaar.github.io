
const skillCategories = [
  {
    title: 'Desarrollo web',
    description: 'Tecnologías para construir interfaces web.',
    skills: [
      { name: 'HTML5', level: 'En práctica' },
      { name: 'CSS3', level: 'En práctica' },
      { name: 'JavaScript', level: 'En práctica' },
      { name: 'React', level: 'Aprendiendo' },
    ],
  },
  {
    title: 'Programación',
    description: 'Lenguajes para desarrollar soluciones.',
    skills: [
      { name: 'C / C++', level: 'En práctica' },
      { name: 'Python', level: 'En práctica' },
      { name: 'Java', level: 'Aprendiendo' },
      { name: 'C#', level: 'Aprendiendo' },
    ],
  },
  {
    title: 'Datos y bases de datos',
    description: 'Herramientas para gestionar y analizar datos.',
    skills: [
      { name: 'SQL', level: 'En práctica' },
      { name: 'Excel', level: 'En práctica' },
      { name: 'Power BI', level: 'Aprendiendo' },
    ],
  },
  {
    title: 'Herramientas',
    description: 'Entornos y herramientas de desarrollo.',
    skills: [
      { name: 'Git', level: 'En práctica' },
      { name: 'GitHub', level: 'En práctica' },
      { name: 'VS Code', level: 'En práctica' },
      { name: 'Visual Studio', level: 'En práctica' },
    ],
  },
]

function Skills() {
  return (
    <section
      id="habilidades"
      className="scroll-mt-24 bg-slate-50 px-6 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl">
        <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Mis habilidades
        </span>

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
          Tecnologías y herramientas
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Estas son algunas de las tecnologías que utilizo
          y continúo aprendiendo durante mi formación.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
                  >
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      {skill.name}
                    </p>

                    <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-400">
                      {skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
