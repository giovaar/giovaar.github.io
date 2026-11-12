
const footerLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

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
          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Derechos y créditos */}
        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Giovanny Arpaia.
            Diseñado y desarrollado con React.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
