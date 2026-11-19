
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Moon, Sun } from 'lucide-react'

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem('gio-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }
  } catch {
    // La preferencia del sistema sigue disponible sin almacenamiento.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function ThemeToggle() {
  const { t } = useTranslation()
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    )

    try {
      localStorage.setItem('gio-theme', theme)
    } catch {
      // El tema sigue activo durante la sesión.
    }
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
      aria-label={t('common.darkMode')}
      aria-pressed={theme === 'dark'}
      title={t('common.darkMode')}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-gio-line bg-gio-surface text-gio-muted transition-colors duration-300 hover:bg-gio-raised"
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
