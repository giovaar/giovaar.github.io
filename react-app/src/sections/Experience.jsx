
import { useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { useTranslation } from 'react-i18next'
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
    labelKey: 'experience.cv.spanish',
    filename: 'CV_Giovanny_Arpaia.pdf',
    languageKey: 'experience.languages.spanish',
  },
  {
    labelKey: 'experience.cv.english',
    filename: 'CV_Giovanny_Arpaia_English.pdf',
    languageKey: 'experience.languages.english',
  },
]

const experiences = [
  {
    id: 1,
    titleKey: 'experience.entries.calculusTutor.title',
    organization: 'Universidad Tecnológica de Panamá',
    periodKey: 'experience.entries.calculusTutor.period',
    descriptionKey: 'experience.entries.calculusTutor.description',
  },
]

const education = [
  {
    id: 1,
    titleKey: 'experience.education.systemsEngineering.title',
    institution: 'Universidad Tecnológica de Panamá',
    periodKey: 'experience.education.systemsEngineering.period',
    descriptionKey: 'experience.education.systemsEngineering.description',
  },
  {
    id: 2,
    titleKey: 'experience.education.scienceHighSchool.title',
    institution: 'Colegio Alejandro Humboldt, Venezuela',
    periodKey: 'experience.education.scienceHighSchool.period',
    descriptionKey: 'experience.education.scienceHighSchool.description',
  },
]

// Los nombres de archivo deben coincidir con los PDF reales
const certifications = [
  {
    id: 1,
    title: 'Data Science Essentials with Python',
    institutionKey: 'experience.certifications.ciscoUtp',
    year: '2026',
    file:
      'Data_Science_Essentials_with_Python_certificate_giovanny-arpaia-utp-ac-pa_70e192e5-2443-4f10-8d53-d4b596bf0598.pdf',
  },
  {
    id: 2,
    title: 'Python Essentials 1',
    institutionKey: 'experience.certifications.ciscoUtp',
    year: '2026',
    file:
      'Python_Essentials_1_certificate_giovanny-arpaia-utp-ac-pa_225e5f12-e113-458d-aea6-7d65437761ec.pdf',
  },
  {
    id: 3,
    title: 'Python Essentials 2',
    institutionKey: 'experience.certifications.ciscoUtp',
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
    institutionKey: 'experience.certifications.languageCredential',
    year: '',
    file: 'Certificado_A2.pdf',
  },
  {
    id: 6,
    title: 'Computación Básica',
    institutionKey: 'experience.certifications.basicTraining',
    year: '',
    file: 'diploma-computacion-basica.pdf',
  },
]

const languages = [
  { nameKey: 'experience.languages.spanish', levelKey: 'experience.languages.native' },
  { nameKey: 'experience.languages.english', levelKey: 'experience.languages.englishLevel' },
]

function Experience() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  // Efecto de aparición al desplazarse
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0.94, y: 6 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.5, ease: 'easeOut' },
      }

  return (
    <section
      id="experiencia"
      tabIndex={-1}
      aria-labelledby="experience-title"
      className="gio-section-layout"
    >
      <div className="gio-section-container">

        {/* Encabezado */}
        <m.div {...reveal} className="gio-reading-panel gio-section-heading">
          <span className="gio-section-eyebrow text-gio-gold">
            {t('experience.eyebrow')}
          </span>

          <h2 id="experience-title" className="gio-section-title text-gio-ink">
            {t('experience.title')}
          </h2>

          <p className="gio-section-intro">
            {t('experience.subtitle')}
          </p>
        </m.div>

        {/* Experiencia laboral y académica */}
        <m.div {...reveal} className="gio-section-start">
          <h3 className="gio-reading-label mb-6 flex items-center gap-3 text-2xl font-bold text-gio-ink">
            <BriefcaseBusiness
              size={25}
              className="text-gio-gold"
              aria-hidden="true"
            />
            {t('experience.sections.experience')}
          </h3>

          <ol role="list" className="gio-timeline">
            {experiences.map((item) => (
              <li
                key={item.id}
                className="gio-card gio-card-padding rounded-2xl"
              >
                <span className="text-sm font-semibold text-gio-gold">
                  {t(item.periodKey)}
                </span>

                <h4 className="mt-3 text-xl font-bold text-gio-ink">
                  {t(item.titleKey)}
                </h4>

                <p className="mt-2 font-medium text-gio-muted">
                  {item.organization}
                </p>

                <p className="mt-4 leading-relaxed text-gio-muted">
                  {t(item.descriptionKey)}
                </p>
              </li>
            ))}
          </ol>
        </m.div>

        {/* Educación */}
        <m.div {...reveal} className="gio-section-start">
          <h3 className="gio-reading-label mb-6 flex items-center gap-3 text-2xl font-bold text-gio-ink">
            <GraduationCap
              size={25}
              className="text-gio-gold"
              aria-hidden="true"
            />
            {t('experience.sections.education')}
          </h3>

          <ol role="list" className="gio-timeline">
            {education.map((item) => (
              <li
                key={item.id}
                className="gio-card gio-card-padding rounded-2xl"
              >
                <span className="text-sm font-semibold text-gio-gold">
                  {t(item.periodKey)}
                </span>

                <h4 className="mt-3 text-xl font-bold text-gio-ink">
                  {t(item.titleKey)}
                </h4>

                <p className="mt-2 font-medium text-gio-muted">
                  {item.institution}
                </p>

                <p className="mt-4 leading-relaxed text-gio-muted">
                  {t(item.descriptionKey)}
                </p>
              </li>
            ))}
          </ol>
          <a href="#proyectos" className="gio-reading-label mt-4 inline-flex min-h-11 items-center rounded-sm font-semibold text-gio-violet hover:underline">
            {t('experience.projectsAction')}
          </a>
        </m.div>

        {/* Certificaciones */}
        <m.div {...reveal} className="gio-section-start">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="gio-reading-label flex items-center gap-3 text-2xl font-bold text-gio-ink">
              <Award
                size={25}
                className="text-gio-gold"
                aria-hidden="true"
              />
              {t('experience.sections.certifications')}
            </h3>

            <span className="gio-reading-label text-sm text-gio-muted">
              {t('experience.certificatesCount', { count: certifications.length })}
            </span>
          </div>

          <div className="gio-grid md:grid-cols-2">
            {certifications.map((certificate, index) => {
              const certificateUrl =
                `${documentsBase}certificates/${certificate.file}`

              return (
                <m.article
                  key={certificate.id}
                  initial={reduceMotion ? false : { opacity: 0.9, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : (index % 2) * 0.045 }}
                  className="flex flex-col gio-card gio-card-interactive gio-card-padding rounded-2xl transition-colors"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-xl bg-gio-raised p-3 text-gio-gold">
                      <Award size={23} aria-hidden="true" />
                    </div>

                    {certificate.year && (
                      <span className="text-sm font-medium text-gio-muted">
                        {certificate.year}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-gio-ink">
                    {certificate.title}
                  </h4>

                  <p className="mt-2 flex-1 text-sm text-gio-muted">
                    {certificate.institutionKey
                      ? t(certificate.institutionKey)
                      : certificate.institution}
                  </p>

                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t('experience.viewCertificate')} · ${certificate.title} (${t('common.openNewTab')})`}
                    className="mt-2 inline-flex min-h-11 self-start items-center gap-2 rounded-sm font-semibold text-gio-violet hover:underline"
                  >
                    {t('experience.viewCertificate')}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </m.article>
              )
            })}
          </div>
        </m.div>

        {/* Idiomas */}
        <m.div {...reveal} className="gio-section-start">
          <h3 className="gio-reading-label mb-6 flex items-center gap-3 text-2xl font-bold text-gio-ink">
            <Languages
              size={25}
              className="text-gio-gold"
              aria-hidden="true"
            />
            {t('experience.sections.languages')}
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {languages.map((language) => (
              <div
                key={language.nameKey}
                className="flex flex-wrap items-center justify-between gap-3 gio-card rounded-xl p-6"
              >
                <span className="font-semibold text-gio-ink">
                  {t(language.nameKey)}
                </span>

                <span className="rounded-full bg-gio-raised px-3 py-1 text-sm font-medium text-gio-violet">
                  {t(language.levelKey)}
                </span>
              </div>
            ))}
          </div>
        </m.div>

        {/* Currículums */}
        <m.div
          {...reveal}
          id="curriculums"
          tabIndex={-1}
          className="gio-section-start gio-card rounded-2xl p-5 sm:p-8 md:p-10"
        >
          <div className="flex items-center gap-3">
            <FileText
              size={27}
              className="text-gio-gold"
              aria-hidden="true"
            />

            <h3 className="text-2xl font-bold text-gio-ink">
              {t('experience.cv.title')}
            </h3>
          </div>

          <p className="mt-4 max-w-2xl leading-relaxed text-gio-muted">
            {t('experience.cv.description')}
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {cvFiles.map((cv) => {
              const cvUrl = `${documentsBase}${cv.filename}`

              return (
                <div
                  key={cv.filename}
                  className="gio-card rounded-xl p-5"
                >
                  <p className="font-bold text-gio-ink">
                    {t(cv.labelKey)}
                  </p>

                  <p className="mt-1 text-sm text-gio-muted">
                    {t('experience.cv.language')}: {t(cv.languageKey)}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('experience.cv.view')} · ${t(cv.labelKey)} (${t('common.openNewTab')})`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-gio-action px-4 py-2.5 text-sm font-semibold text-gio-on-action hover:bg-gio-action-hover"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      {t('experience.cv.view')}
                    </a>

                    <a
                      href={cvUrl}
                      download={cv.filename}
                      aria-label={`${t('experience.cv.download')} · ${t(cv.labelKey)}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gio-line px-4 py-2.5 text-sm font-semibold text-gio-violet hover:bg-gio-raised"
                    >
                      <Download size={16} aria-hidden="true" />
                      {t('experience.cv.download')}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </m.div>

      </div>
    </section>
  )
}

export default Experience
