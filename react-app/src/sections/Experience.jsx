
import { motion, useReducedMotion } from 'motion/react'
import {
  Award,
  ExternalLink,
  Download,
  FileText,
  GraduationCap,
  BriefcaseBusiness,
  Languages,
} from 'lucide-react'

// Rutas a los archivos dentro de public/
const documentsBase = `${import.meta.env.BASE_URL}documents/`

const cvFiles = [
  {
    label: 'CV Español',
    filename: 'CV_Giovanny_Arpaia.pdf',
    language: 'Español',
  },
  {
    label: 'CV English',
    filename: 'CV_Giovanny_Arpaia_English.pdf',
    language: 'English',
  },
]

const experiences = [
  {
    id: 1,
    title: 'Tutor de Cálculo I',
    organization: 'Universidad Tecnológica de Panamá',
    period: 'Marzo 2026 - Actualidad',
    description:
      'Apoyo académico a estudiantes universitarios en conceptos matemáticos, resolución de ejercicios y preparación para evaluaciones. Desarrollo de habilidades de comunicación y enseñanza.',
  },
]

const education = [
  {
    id: 1,
    title: 'Ingeniería de Sistemas y Computación',
    institution: 'Universidad Tecnológica de Panamá',
    period: 'En curso',
    description:
      'Formación en programación, estructuras de datos, bases de datos, ingeniería de software y tecnologías computacionales.',
  },
  {
    id: 2,
    title: 'Bachiller en Ciencias',
    institution: 'Colegio Alejandro Humboldt, Venezuela',
    period: '2020',
    description: 'Educación secundaria con orientación científica.',
  },
]

// Los nombres de archivo deben coincidir con los PDF reales
const certifications = [
  {
    id: 1,
    title: 'Data Science Essentials with Python',
    institution: 'Cisco Networking Academy y UTP',
    year: '2026',
    file:
      'Data_Science_Essentials_with_Python_certificate_giovanny-arpaia-utp-ac-pa_70e192e5-2443-4f10-8d53-d4b596bf0598.pdf',
  },
  {
    id: 2,
    title: 'Python Essentials 1',
    institution: 'Cisco Networking Academy y UTP',
    year: '2026',
    file:
      'Python_Essentials_1_certificate_giovanny-arpaia-utp-ac-pa_225e5f12-e113-458d-aea6-7d65437761ec.pdf',
  },
  {
    id: 3,
    title: 'Python Essentials 2',
    institution: 'Cisco Networking Academy y UTP',
    year: '2026',
    file:
      'Python_Essentials_2_certificate_giovanny-arpaia-utp-ac-pa_45d48f39-eef2-4e68-b810-8822d05c810e.pdf',
  },
  {
    id: 4,
    title: 'Curso Práctico de C++',
    institution: 'Platzi',
    year: '2025',
    file: 'diploma-c-plus-plus-practico.pdf',
  },
  {
    id: 5,
    title: 'Inglés A2',
    institution: 'Certificación de idioma',
    year: '',
    file: 'Certificado_A2.pdf',
  },
  {
    id: 6,
    title: 'Computación Básica',
    institution: 'Diploma de formación',
    year: '',
    file: 'diploma-computacion-basica.pdf',
  },
]

const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'A2 · En desarrollo' },
]

function Experience() {
  const reduceMotion = useReducedMotion()

  // Efecto de aparición al desplazarse
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.5, ease: 'easeOut' },
      }

  return (
    <section
      id="experiencia"
      className="scroll-mt-24 bg-slate-50 px-6 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <motion.div {...reveal} className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Mi trayectoria
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Educación y experiencia
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Mi formación, experiencia académica y preparación
            profesional mientras continúo desarrollándome
            en el mundo de la tecnología.
          </p>
        </motion.div>

        {/* Experiencia laboral y académica */}
        <motion.div {...reveal} className="mt-14">
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <BriefcaseBusiness
              size={25}
              className="text-indigo-600 dark:text-indigo-400"
              aria-hidden="true"
            />
            Experiencia
          </h3>

          <div className="grid gap-6">
            {experiences.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {item.period}
                </span>

                <h4 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="mt-2 font-medium text-slate-700 dark:text-slate-200">
                  {item.organization}
                </p>

                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>

        {/* Educación */}
        <motion.div {...reveal} className="mt-14">
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <GraduationCap
              size={25}
              className="text-indigo-600 dark:text-indigo-400"
              aria-hidden="true"
            />
            Educación
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900"
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
        </motion.div>

        {/* Certificaciones */}
        <motion.div {...reveal} className="mt-14">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <Award
                size={25}
                className="text-indigo-600 dark:text-indigo-400"
                aria-hidden="true"
              />
              Certificaciones
            </h3>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              {certifications.length} certificados
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((certificate) => {
              const certificateUrl =
                `${documentsBase}certificates/${certificate.file}`

              return (
                <article
                  key={certificate.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <Award size={23} aria-hidden="true" />
                    </div>

                    {certificate.year && (
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {certificate.year}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {certificate.title}
                  </h4>

                  <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">
                    {certificate.institution}
                  </p>

                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Ver certificado
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </article>
              )
            })}
          </div>
        </motion.div>

        {/* Idiomas */}
        <motion.div {...reveal} className="mt-14">
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <Languages
              size={25}
              className="text-indigo-600 dark:text-indigo-400"
              aria-hidden="true"
            />
            Idiomas
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
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
        </motion.div>

        {/* Currículums */}
        <motion.div
          {...reveal}
          className="mt-14 rounded-2xl border border-indigo-200 bg-indigo-50 p-8 md:p-10 dark:border-indigo-500/30 dark:bg-indigo-500/10"
        >
          <div className="flex items-center gap-3">
            <FileText
              size={27}
              className="text-indigo-600 dark:text-indigo-400"
              aria-hidden="true"
            />

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Mis currículums
            </h3>
          </div>

          <p className="mt-4 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
            Consulta o descarga mi currículum en español o inglés
            para conocer más sobre mi formación, experiencia
            y habilidades.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {cvFiles.map((cv) => {
              const cvUrl = `${documentsBase}${cv.filename}`

              return (
                <div
                  key={cv.filename}
                  className="rounded-xl border border-indigo-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
                >
                  <p className="font-bold text-slate-900 dark:text-white">
                    {cv.label}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Idioma: {cv.language}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Ver CV
                    </a>

                    <a
                      href={cvUrl}
                      download={cv.filename}
                      className="inline-flex items-center gap-2 rounded-lg border border-indigo-300 px-4 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 dark:border-slate-600 dark:text-indigo-300 dark:hover:bg-slate-800"
                    >
                      <Download size={16} aria-hidden="true" />
                      Descargar
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience
