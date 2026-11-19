
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Compass,
  Download,
  ExternalLink,
  FileText,
  Map,
  Sparkles,
  Terminal,
} from "lucide-react";

const skills = ["React", "JavaScript", "Python", "SQL"];

const base = import.meta.env.BASE_URL;

const cvSpanish = `${base}documents/CV_Giovanny_Arpaia.pdf`;
const cvEnglish = `${base}documents/CV_Giovanny_Arpaia_English.pdf`;

export default function Hero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.65,
      delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[90vh] scroll-mt-20 items-center overflow-hidden gio-hero"
    >
      {/* Contenido principal */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-28">

        {/* Presentación */}
        <div className="space-y-7 text-center lg:text-left">
          <motion.div
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-gio-line bg-gio-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-gio-gold uppercase"
          >
            <Compass size={15} />
            {t("hero.welcome")}
          </motion.div>

          <motion.div {...fadeUp(0.12)}>
            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gio-turquoise uppercase">
              {t("hero.role")}
            </p>

            <h1
              id="hero-title"
              className="text-4xl leading-[1.15] font-bold sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Giovanny
              <span className="mt-2 block text-gio-gold">
                Arpaia
              </span>
            </h1>
          </motion.div>

          <motion.p
            {...fadeUp(0.2)}
            className="mx-auto max-w-xl text-base leading-relaxed text-gio-muted sm:text-lg lg:mx-0"
          >
            {t("hero.description")}
          </motion.p>

          <motion.p
            {...fadeUp(0.25)}
            className="mx-auto max-w-xl text-sm leading-relaxed text-gio-muted sm:text-base lg:mx-0"
          >
            {t("hero.secondary")}
          </motion.p>

          {/* Tecnologías */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-gio-line bg-gio-raised px-3 py-1.5 text-xs font-medium text-gio-turquoise transition-colors hover:border-gio-line"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Botones principales */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#proyectos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-transparent bg-gio-action px-6 py-3 font-semibold text-gio-on-action hover:bg-gio-action-hover"
            >
              <Map size={19} />
              {t("hero.projectsButton")}
              <ArrowRight
                size={17}
              />
            </a>

            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gio-line bg-gio-raised px-6 py-3 font-semibold text-gio-ink hover:border-gio-line hover:bg-gio-raised"
            >
              <Sparkles size={18} className="text-gio-gold" />
              {t("hero.contactButton")}
            </a>
          </motion.div>

          {/* CV y GitHub */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 pt-1 text-sm lg:justify-start"
          >
            <a
              href={cvSpanish}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gio-muted hover:text-gio-gold"
            >
              <Download size={16} />
              {t("hero.cvSpanish")}
            </a>

            <a
              href={cvEnglish}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gio-muted hover:text-gio-gold"
            >
              <FileText size={16} />
              {t("hero.cvEnglish")}
            </a>

            <a
              href="https://github.com/giovaar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("common.github")} (${t("common.openNewTab")})`}
              className="inline-flex items-center gap-2 text-gio-muted hover:text-gio-gold"
            >
              <ExternalLink size={16} />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Panel del aventurero */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-[2rem] gio-card p-5 sm:p-7">

            <div className="relative flex min-h-72 sm:aspect-[4/4.3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gio-line gio-hero-art px-3 py-6 text-center">
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="relative mb-5 flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-full border border-gio-line bg-gio-surface"
              >

                <Code2
                  size={67}
                  strokeWidth={1.1}
                  className="text-gio-gold"
                />
              </motion.div>

              <span className="text-xs font-semibold tracking-[0.2em] text-gio-turquoise uppercase">
                {t("hero.character")}
              </span>

              <h2 className="mt-3 text-2xl font-bold text-gio-ink">
                GIO
              </h2>

              <p className="mt-2 max-w-52 text-sm leading-relaxed text-gio-muted">
                {t("hero.characterDescription")}
              </p>

              <div className="mt-6 flex items-center gap-2 rounded-full border border-gio-line bg-gio-surface px-4 py-2 text-xs text-gio-gold">
                <Terminal size={14} />
                {t("hero.chapter")}
              </div>
            </div>
          </div>

          {/* Etiqueta decorativa */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 w-max max-w-full rounded-full text-center border border-gio-line bg-gio-surface px-5 py-2.5 text-xs font-medium text-gio-gold shadow-xl">
            <Compass size={15} />
            {t("hero.journey")}
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre-mi"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-gio-muted hover:text-gio-gold lg:flex"
        aria-label={t("hero.scroll")}
      >
        {t("hero.scroll")}
        <ArrowDown size={17} />
      </motion.a>
    </section>
  );
}
