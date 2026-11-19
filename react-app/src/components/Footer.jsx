
import { useTranslation } from 'react-i18next'

const footerLinks = [
  { key: 'nav.home', href: '#inicio' },
  { key: 'nav.about', href: '#sobre-mi' },
  { key: 'nav.skills', href: '#habilidades' },
  { key: 'nav.projects', href: '#proyectos' },
  { key: 'nav.experience', href: '#experiencia' },
  { key: 'nav.contact', href: '#contacto' },
]

const currentYear = new Date().getFullYear()

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gio-raised px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <a
            href="#inicio"
            className="text-2xl font-extrabold tracking-tight text-gio-ink"
          >
            GIO<span className="text-gio-violet">.</span>
          </a>

          {/* Enlaces */}
          <nav aria-label={t('footer.navigationLabel')}>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gio-muted transition-colors hover:text-gio-violet"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Derechos y créditos */}
        <div className="mt-8 border-t border-gio-line pt-6">
          <p className="text-center text-sm text-gio-muted">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
