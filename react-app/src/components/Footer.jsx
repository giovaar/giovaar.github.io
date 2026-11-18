
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
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-10 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <a
            href="#inicio"
            className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            GIO<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </a>

          {/* Enlaces */}
          <nav aria-label={t('footer.navigationLabel')}>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Derechos y créditos */}
        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
