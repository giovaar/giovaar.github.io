import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const contactLinks = [
  {
    nameKey: 'contact.links.email.name',
    descriptionKey: 'contact.links.email.description',
    value: 'giovaarpaia13@gmail.com',
    href: 'mailto:giovaarpaia13@gmail.com',
    external: false,
    actionKey: 'contact.links.email.action',
  },
  {
    nameKey: 'contact.links.github.name',
    descriptionKey: 'contact.links.github.description',
    value: 'github.com/giovaar',
    href: 'https://github.com/giovaar',
    external: true,
    actionKey: 'contact.links.externalAction',
  },
  {
    nameKey: 'contact.links.linkedin.name',
    descriptionKey: 'contact.links.linkedin.description',
    valueKey: 'contact.links.linkedin.value',
    href: 'https://www.linkedin.com/in/giovanny-arpaia-075273328/',
    external: true,
    actionKey: 'contact.links.externalAction',
  },
]

function Contact() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="contacto"
      tabIndex={-1}
      className="gio-section-layout"
    >
      <div className="gio-section-container">

        {/* Encabezado */}
        <motion.div
          className="gio-reading-panel gio-section-heading"
          initial={reduceMotion ? false : { opacity: 0.94, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
        >
          <span className="gio-section-eyebrow text-gio-coral">
            {t('contact.eyebrow')}
          </span>

          <h2 className="gio-section-title text-gio-ink">
            {t('contact.title')}
          </h2>

          <p className="gio-section-intro">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Tarjetas de contacto */}
        <div className="gio-section-start gio-balanced-grid gio-grid lg:grid-cols-3">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.nameKey}
              initial={reduceMotion ? false : { opacity: 0.9, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : index * 0.045 }}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col gio-card gio-card-interactive gio-card-padding rounded-2xl"
            >
              <span className="text-sm font-semibold text-gio-coral">
                {t(contact.nameKey)}
              </span>

              <h3 className="mt-4 text-xl font-bold text-gio-ink">
                {t(contact.descriptionKey)}
              </h3>

              <p className="mt-3 [overflow-wrap:anywhere] text-sm text-gio-muted">
                {contact.valueKey ? t(contact.valueKey) : contact.value}
              </p>

              <span
                className="mt-auto self-start pt-4 font-semibold text-gio-coral"
                aria-hidden="true"
              >
                {t(contact.actionKey)}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact
