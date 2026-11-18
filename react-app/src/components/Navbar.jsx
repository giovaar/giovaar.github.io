
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#C9AA70]/25 bg-[#101B25]/95 shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav
        aria-label={t("common.language") === "Idioma" ? "Navegación principal" : "Main navigation"}
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3 rounded-lg"
          aria-label="GIO Portfolio - Home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9AA70]/55 bg-[#203C35] transition-all duration-300 group-hover:rotate-12 group-hover:border-[#C9AA70] group-hover:shadow-[0_0_18px_rgba(201,170,112,0.25)]">
            <Compass
              size={23}
              strokeWidth={1.6}
              className="text-[#C9AA70]"
            />
          </span>

          <span className="font-['Cinzel'] text-xl font-bold tracking-[0.12em] text-[#EDE5D4]">
            GIO<span className="text-[#C9AA70]">.</span>
          </span>
        </a>

        {/* Navegación escritorio */}
        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="group relative rounded-md px-2.5 py-2 text-sm font-medium text-[#D0D9D3] transition-colors hover:text-[#E8C88D]"
            >
              {t(`nav.${item.key}`)}

              <span className="absolute bottom-0 left-2.5 right-2.5 h-px origin-center scale-x-0 bg-[#C9AA70] transition-transform duration-300 group-hover:scale-x-100" />
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
            className="hidden items-center gap-2 rounded-lg border border-[#C9AA70]/50 bg-[#C9AA70]/10 px-3 py-2 text-sm font-semibold text-[#E8C88D] transition-all hover:border-[#C9AA70] hover:bg-[#C9AA70]/20 lg:inline-flex"
            aria-label={`${t("common.github")} (${t("common.openNewTab")})`}
          >
            <GitBranch size={16} />
            GitHub
            <ExternalLink size={13} />
          </a>

          {/* Modo claro / oscuro */}
          <div className="rounded-lg border border-[#C9AA70]/25 bg-[#203C35]/70">
            <ThemeToggle />
          </div>

          {/* Menú móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="gio-mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#C9AA70]/40 text-[#EDE5D4] transition-colors hover:bg-[#203C35] xl:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="gio-mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="overflow-hidden border-t border-[#C9AA70]/20 bg-[#101B25] xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navigation.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg border border-transparent px-4 py-3 text-sm font-medium text-[#EDE5D4] hover:border-[#C9AA70]/25 hover:bg-[#203C35]"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}

              <div className="my-2 h-px bg-[#C9AA70]/20" />

              <a
                href="https://github.com/giovaar"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#C9AA70]/50 bg-[#203C35] px-4 py-3 text-sm font-semibold text-[#E8C88D]"
              >
                <GitBranch size={17} />
                GitHub
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
