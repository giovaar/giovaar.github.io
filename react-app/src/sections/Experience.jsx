
const education = [
  {
    id: 1,
    title: 'Ingeniería de Sistemas y Computación',
    institution: 'Universidad Tecnológica de Panamá',
    period: 'En curso',
    description:
      'Formación universitaria en programación, estructuras de datos, bases de datos, ingeniería de software y tecnologías computacionales.',
  },
  {
    id: 2,
    title: 'Bachiller en Ciencias',
    institution: 'Colegio Alejandro Humboldt, Venezuela',
    period: '2020',
    description:
      'Educación secundaria con orientación científica.',
  },
]

const experiences = [
  {
    id: 1,
    title: 'Tutor de Cálculo I',
    organization: 'Universidad Tecnológica de Panamá',
    period: 'Marzo 2026 - Actualidad',
    description:
      'Apoyo académico a estudiantes universitarios en conceptos matemáticos, resolución de ejercicios y preparación para evaluaciones. Desarrollo de habilidades de comunicación, enseñanza y adaptación de explicaciones.',
  },
]

const certifications = [
  {
    id: 1,
    title: 'Data Science Essentials with Python',
    institution: 'Cisco Networking Academy y UTP',
    year: '2026',
  },
  {
    id: 2,
    title: 'Python Essentials 1',
    institution: 'Cisco Networking Academy y UTP',
    year: '2026',
  },
  {
    id: 3,
    title: 'Python Essentials 2',
    institution: 'Cisco Networking Academy y UTP',
    year: '2026',
  },
  {
    id: 4,
    title: 'Curso Práctico de C++',
    institution: 'Platzi',
    year: '2025',
  },
]

const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'A2 · En desarrollo' },
]

const cvUrl = `${import.meta.env.BASE_URL}documents/CV_Giovanny_Arpaia.pdf`

function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-24 bg-slate-50 px-6 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Mi trayectoria
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Educación y experiencia
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Mi formación, experiencia académica y
            preparación profesional mientras continúo
            desarrollándome en el mundo de la tecnología.
          </p>
        </div>

        {/* Experiencia */}
        <div className="mt-14">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Experiencia
          </h3>

          <div className="grid gap-6">
            {experiences.map((experience) => (
              <article
                key={experience.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
              >
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {experience.period}
                </span>

                <h4 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  {experience.title}
                </h4>

                <p className="mt-2 font-medium text-slate-700 dark:text-slate-200">
                  {experience.organization}
                </p>

                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  {experience.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Educación */}
        <div className="mt-14">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Educación
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
              >
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {item.period}
                </span>

                <h4 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="mt-2 font-medium text-slate-700 dark:text-slate-200">
                  {item.institution}
                </p>

                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mt-14">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Certificaciones
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certificate) => (
              <article
                key={certificate.id}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500"
              >
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {certificate.year}
                </span>

                <h4 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                  {certificate.title}
                </h4>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {certificate.institution}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Idiomas */}
        <div className="mt-14">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Idiomas
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <span className="font-semibold text-slate-900 dark:text-white">
                  {language.name}
                </span>

                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Currículum */}
        <div className="mt-14 rounded-2xl border border-indigo-200 bg-indigo-50 p-8 transition-colors duration-300 md:p-10 dark:border-indigo-500/30 dark:bg-indigo-500/10">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            ¿Quieres conocer más sobre mi perfil?
          </h3>

          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
            Puedes consultar mi currículum para conocer
            más sobre mi formación, experiencia y habilidades.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Ver mi CV
            </a>

            <a
              href={cvUrl}
              download="CV_Giovanny_Arpaia.pdf"
              className="rounded-xl border border-indigo-300 bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-slate-600 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700"
            >
              Descargar CV
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
