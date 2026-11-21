import { useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { useTranslation } from 'react-i18next'
import { BriefcaseBusiness, FileText, GitBranch, Mail } from 'lucide-react'

const contactLinks = [
  {
    nameKey: 'contact.links.email.name',
    descriptionKey: 'contact.links.email.description',
    value: 'giovaarpaia13@gmail.com',
    href: 'mailto:giovaarpaia13@gmail.com',
    external: false,
    actionKey: 'contact.links.email.action',
    icon: Mail,
  },
  {
    nameKey: 'contact.links.github.name',
    descriptionKey: 'contact.links.github.description',
    value: 'github.com/giovaar',
    href: 'https://github.com/giovaar',
    external: true,
    actionKey: 'contact.links.externalAction',
    icon: GitBranch,
  },
  {
    nameKey: 'contact.links.linkedin.name',
    descriptionKey: 'contact.links.linkedin.description',
    valueKey: 'contact.links.linkedin.value',
    href: 'https://www.linkedin.com/in/giovanny-arpaia-075273328/',
    external: true,
    actionKey: 'contact.links.externalAction',
    icon: BriefcaseBusiness,
  },
]

function Contact() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="contacto"
      tabIndex={-1}
      aria-labelledby="contact-title"
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
          <span className="gio-section-eyebrow text-gio-coral">
            {t('contact.eyebrow')}
          </span>

          <h2 id="contact-title" className="gio-section-title text-gio-ink">
            {t('contact.title')}
          </h2>

          <p className="gio-section-intro">
            {t('contact.subtitle')}
          </p>

          <a href="#curriculums" className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm font-semibold text-gio-violet hover:underline">
            <FileText size={17} aria-hidden="true" className="shrink-0" />
            {t('contact.cvAction')}
          </a>
        </m.div>

        {/* Tarjetas de contacto */}
        <div className="gio-section-start gio-balanced-grid gio-grid lg:grid-cols-3">
          {contactLinks.map((contact, index) => (
            <m.a
              key={contact.nameKey}
              initial={reduceMotion ? false : { opacity: 0.9, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : index * 0.045 }}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="flex min-w-0 flex-col gio-card gio-card-interactive gio-card-padding rounded-2xl"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-gio-coral">
                <contact.icon size={19} aria-hidden="true" className="shrink-0" />
                {t(contact.nameKey)}
              </span>

              <h3 className="mt-4 text-xl font-bold text-gio-ink">
                {t(contact.descriptionKey)}
              </h3>

              <p className="mt-3 [overflow-wrap:anywhere] text-sm text-gio-muted">
                {contact.valueKey ? t(contact.valueKey) : contact.value}
              </p>

              <div className="mt-auto pt-4">
                <span className={contact.external
                  ? 'font-semibold text-gio-violet'
                  : 'inline-flex min-h-11 items-center rounded-lg bg-gio-action px-4 font-semibold text-gio-on-action'}
                >
                  {t(contact.actionKey)}
                </span>
                {contact.external && <span className="sr-only"> ({t('common.openNewTab')})</span>}
              </div>
            </m.a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact
