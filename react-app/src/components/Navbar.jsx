
import { useState } from 'react'
import { Menu, X, GitBranch } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95">
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          GIO<span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botones del Navbar */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Enlace a GitHub */}
          <a
            href="https://github.com/giovaar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 sm:inline-flex"
          >
            <GitBranch size={18} aria-hidden="true" />
            <span>GitHub</span>
          </a>

          {/* Botón de menú móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú para celulares */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-4 max-w-6xl border-t border-slate-200 pt-4 sm:hidden dark:border-slate-800">
            <a
              href="https://github.com/giovaar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              <GitBranch size={18} aria-hidden="true" />
              Ver mi GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
