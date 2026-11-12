
import { useState } from 'react'
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
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
          GIO<span className="text-indigo-600">.</span>
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

        {/* Botones de la derecha */}
        <div className="flex items-center gap-3">

          {/* Cambiar tema */}
          <ThemeToggle />

          {/* GitHub */}
          <a
            href="https://github.com/giovaar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 sm:inline-flex"
          >
            GitHub
          </a>

          {/* Menú móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="rounded-lg border border-slate-200 p-2 text-slate-800 hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              {menuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </nav>

      {/* Menú desplegable móvil */}
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
        </div>
      )}
    </header>
  )
}

export default Navbar
