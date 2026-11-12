
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function getInitialTheme() {
  const savedTheme = localStorage.getItem('gio-theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    )

    localStorage.setItem('gio-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) =>
      current === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === 'dark'
          ? 'Activar modo claro'
          : 'Activar modo oscuro'
      }
      aria-pressed={theme === 'dark'}
      title={
        theme === 'dark'
          ? 'Cambiar a modo claro'
          : 'Cambiar a modo oscuro'
      }
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
    >
      {theme === 'dark' ? (
        <Sun size={21} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon size={21} strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  )
}

export default ThemeToggle
