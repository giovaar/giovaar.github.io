
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import {
  Compass,
  Menu,
  X,
  GitBranch,
  ExternalLink,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const navigation = [
  { key: "home", href: "#inicio" },
  { key: "about", href: "#sobre-mi" },
  { key: "skills", href: "#habilidades" },
  { key: "projects", href: "#proyectos" },
  { key: "experience", href: "#experiencia" },
  { key: "contact", href: "#contacto" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuButton = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  function closeMenuAndRestoreFocus() {
    closeMenu();
    menuButton.current?.focus();
  }

  function handleKeyDown(event) {
    if (menuOpen && event.key === "Escape") {
      event.preventDefault();
      closeMenuAndRestoreFocus();
    }
  }

  function followSection(event) {
    const section = document.getElementById(event.currentTarget.hash.slice(1));
    section?.focus({ preventScroll: true });
    closeMenu();
  }

  return (
    <header onKeyDown={handleKeyDown} className="sticky top-0 z-50 border-b border-gio-line bg-gio-surface/95">
      <nav
        aria-label={t("nav.label")}
        className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 min-[360px]:gap-3 min-[360px]:px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3 rounded-lg"
          aria-label={t("nav.brandHome")}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gio-line bg-gio-raised transition-colors duration-300 group-hover:border-gio-line">
            <Compass
              size={23}
              strokeWidth={1.6}
              className="text-gio-gold"
            />
          </span>

          <span className="hidden text-xl font-bold tracking-[0.12em] text-gio-ink min-[400px]:inline">
            GIO<span className="text-gio-gold">.</span>
          </span>
        </a>

        {/* Navegación escritorio */}
        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="group relative rounded-md px-2.5 py-2 text-sm font-medium text-gio-muted transition-colors hover:text-gio-gold"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          {/* Selector ES / EN / IT */}
          <LanguageSwitcher />

          {/* GitHub */}
          <a
            href="https://github.com/giovaar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-gio-line bg-gio-gold/10 px-3 py-2 text-sm font-semibold text-gio-gold transition-colors hover:border-gio-line hover:bg-gio-gold/20 lg:inline-flex"
            aria-label={`${t("common.github")} (${t("common.openNewTab")})`}
          >
            <GitBranch size={16} />
            GitHub
            <ExternalLink size={13} />
          </a>

          {/* Modo claro / oscuro */}
          <div className="rounded-lg border border-gio-line bg-gio-raised">
            <ThemeToggle />
          </div>

          {/* Menú móvil */}
          <button
            ref={menuButton}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={t(menuOpen ? "nav.closeMenu" : "nav.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="gio-mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gio-line text-gio-ink transition-colors hover:bg-gio-raised xl:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <div id="gio-mobile-menu" hidden={!menuOpen} className="xl:hidden">
        {menuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-gio-line bg-gio-surface"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navigation.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={followSection}
                  className="rounded-lg border border-transparent px-4 py-3 text-sm font-medium text-gio-ink hover:border-gio-line hover:bg-gio-raised"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}

              <div className="my-2 h-px bg-gio-gold/20" />

              <a
                href="https://github.com/giovaar"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenuAndRestoreFocus}
                aria-label={`${t("common.github")} (${t("common.openNewTab")})`}
                className="flex items-center justify-center gap-2 rounded-lg border border-gio-line bg-gio-raised px-4 py-3 text-sm font-semibold text-gio-gold"
              >
                <GitBranch size={17} />
                GitHub
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
