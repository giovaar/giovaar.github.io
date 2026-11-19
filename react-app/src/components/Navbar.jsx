
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import {
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

export default function Navbar({ experienceControl }) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [compact, setCompact] = useState(false);
  const reduceMotion = useReducedMotion();
  const navBar = useRef(null);
  const menuButton = useRef(null);

  useEffect(() => {
    const nav = navBar.current;
    const root = document.documentElement;
    const measure = () => root.style.setProperty("--gio-nav-height", `${nav.offsetTop + nav.offsetHeight}px`);
    const observer = typeof ResizeObserver === "function" ? new ResizeObserver(measure) : null;
    measure();
    observer?.observe(nav);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
      root.style.removeProperty("--gio-nav-height");
    };
  }, []);

  useEffect(() => {
    let frame;
    let directionStart = Math.max(0, window.scrollY);
    const desktop = window.matchMedia("(min-width: 80rem)");
    const sections = navigation.map(({ href }) => document.getElementById(href.slice(1)));

    function updateNavigation() {
      frame = undefined;
      const scrollY = Math.max(0, window.scrollY);
      const position = (navBar.current?.getBoundingClientRect().bottom ?? 0) + window.innerHeight * 0.23;
      let current = navigation[0].href;

      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= position) {
          current = `#${section.id}`;
        }
      }

      const atEnd = scrollY > 0 &&
        scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActiveSection(atEnd ? navigation.at(-1).href : current);

      const travel = scrollY - directionStart;
      if (!desktop.matches || scrollY <= 24 || Math.abs(travel) >= 10) {
        setCompact(desktop.matches && scrollY > 24 && travel > 0);
        directionStart = scrollY;
      }
    }

    function scheduleUpdate() {
      if (frame === undefined) frame = window.requestAnimationFrame(updateNavigation);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

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
    <header onKeyDown={handleKeyDown} data-compact={compact && !reduceMotion} className="gio-navbar sticky top-0 z-50">
      <nav
        ref={navBar}
        aria-label={t("nav.label")}
        className={`gio-navbar-inner mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 min-[360px]:gap-3 min-[360px]:px-4 sm:px-6 lg:px-8 ${experienceControl ? "max-[400px]:gap-1 max-[400px]:px-2" : ""}`}
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3 rounded-lg"
          aria-label={t("nav.brandHome")}
        >
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            width={44}
            height={44}
            alt=""
            className="size-11 shrink-0 rounded-xl ring-1 ring-gio-line transition-colors group-hover:ring-gio-violet"
          />

          <span className={`hidden text-xl font-bold tracking-[0.12em] text-gio-ink ${experienceControl ? "min-[448px]:inline" : "min-[400px]:inline"}`}>
            GIO<span className="text-gio-gold">.</span>
          </span>
        </a>

        {/* Navegación escritorio */}
        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.key}
              href={item.href}
              aria-current={activeSection === item.href ? "location" : undefined}
              className="gio-nav-link relative rounded-lg px-2.5 py-2 text-sm font-medium text-gio-muted hover:bg-gio-raised hover:text-gio-ink"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>

        {/* Acciones */}
        <div className={`flex items-center gap-2 ${experienceControl ? "max-[400px]:gap-1 max-[400px]:[&_[lang]]:min-w-7 max-[400px]:[&_[lang]]:px-1" : ""}`}>
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
          {experienceControl}

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
            className="gio-mobile-menu overflow-y-auto overscroll-contain border-t border-gio-line bg-gio-surface"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navigation.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={followSection}
                  aria-current={activeSection === item.href ? "location" : undefined}
                  className="gio-nav-link relative rounded-lg px-4 py-3 text-sm font-medium text-gio-ink hover:bg-gio-raised"
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
