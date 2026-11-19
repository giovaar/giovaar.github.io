
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

  return (
    <section
      id="contacto"
      tabIndex={-1}
      className="gio-section gio-section-alt scroll-mt-24 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-gio-coral">
            {t('contact.eyebrow')}
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gio-ink sm:text-4xl lg:text-5xl">
            {t('contact.title')}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gio-muted">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactLinks.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="group gio-card gio-card-interactive rounded-2xl p-7 transition-colors duration-300"
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
                className="mt-6 inline-block font-semibold text-gio-coral"
                aria-hidden="true"
              >
                {t(contact.actionKey)}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact
