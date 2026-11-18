
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
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
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
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[90vh] scroll-mt-20 items-center overflow-hidden bg-[#101B25] text-[#EDE5D4]"
    >
      {/* Fondo ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_25%,rgba(114,183,172,0.17),transparent_45%),radial-gradient(ellipse_at_10%_80%,rgba(201,170,112,0.11),transparent_45%)]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#C9AA70 1px, transparent 1px), linear-gradient(90deg, #C9AA70 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#72B7AC]/10 blur-[110px]" />

        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#C9AA70]/10 blur-[110px]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">

        {/* Presentación */}
        <div className="space-y-7 text-center lg:text-left">
          <motion.div
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-[#C9AA70]/35 bg-[#C9AA70]/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[#E8C88D] uppercase"
          >
            <Compass size={15} />
            {t("hero.welcome")}
          </motion.div>

          <motion.div {...fadeUp(0.12)}>
            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#72B7AC] uppercase">
              {t("hero.role")}
            </p>

            <h1
              id="hero-title"
              className="text-4xl leading-[1.15] font-bold sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Giovanny
              <span className="mt-2 block text-[#C9AA70]">
                Arpaia
              </span>
            </h1>
          </motion.div>

          <motion.p
            {...fadeUp(0.2)}
            className="mx-auto max-w-xl text-base leading-relaxed text-[#CDD7D0] sm:text-lg lg:mx-0"
          >
            {t("hero.description")}
          </motion.p>

          <motion.p
            {...fadeUp(0.25)}
            className="mx-auto max-w-xl text-sm leading-relaxed text-[#9FB3AE] sm:text-base lg:mx-0"
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
                className="rounded-lg border border-[#72B7AC]/25 bg-[#203C35]/55 px-3 py-1.5 text-xs font-medium text-[#B8DAD1] transition-colors hover:border-[#72B7AC]/70"
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
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#E8C88D] bg-[#C9AA70] px-6 py-3 font-semibold text-[#101B25] shadow-[0_5px_25px_rgba(201,170,112,0.14)] hover:bg-[#E8C88D] hover:shadow-[0_5px_30px_rgba(201,170,112,0.28)]"
            >
              <Map size={19} />
              {t("hero.projectsButton")}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#C9AA70]/40 bg-[#203C35]/55 px-6 py-3 font-semibold text-[#EDE5D4] hover:border-[#C9AA70] hover:bg-[#203C35]"
            >
              <Sparkles size={18} className="text-[#C9AA70]" />
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
              className="inline-flex items-center gap-2 text-[#C5D0CA] hover:text-[#E8C88D]"
            >
              <Download size={16} />
              {t("hero.cvSpanish")}
            </a>

            <a
              href={cvEnglish}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5D0CA] hover:text-[#E8C88D]"
            >
              <FileText size={16} />
              {t("hero.cvEnglish")}
            </a>

            <a
              href="https://github.com/giovaar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("common.github")} (${t("common.openNewTab")})`}
              className="inline-flex items-center gap-2 text-[#C5D0CA] hover:text-[#E8C88D]"
            >
              <ExternalLink size={16} />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Panel del aventurero */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute inset-7 rounded-full bg-[#72B7AC]/15 blur-[75px]"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#C9AA70]/35 bg-gradient-to-br from-[#203C35] via-[#152B2A] to-[#101B25] p-5 shadow-2xl shadow-black/30 sm:p-7">
            {/* Esquinas decorativas */}
            <div className="absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-[#C9AA70]/65" />
            <div className="absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-[#C9AA70]/65" />
            <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-[#C9AA70]/65" />
            <div className="absolute right-4 bottom-4 h-8 w-8 border-r-2 border-b-2 border-[#C9AA70]/65" />

            <div className="relative flex aspect-[4/4.3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#C9AA70]/15 bg-[radial-gradient(circle_at_50%_40%,rgba(114,183,172,0.19),transparent_60%)] text-center">
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mb-5 flex h-36 w-36 items-center justify-center rounded-full border border-[#C9AA70]/45 bg-[#101B25]/65 shadow-[0_0_45px_rgba(114,183,172,0.16)]"
              >
                <div className="absolute inset-3 rounded-full border border-dashed border-[#72B7AC]/30" />

                <Code2
                  size={67}
                  strokeWidth={1.1}
                  className="text-[#C9AA70]"
                />
              </motion.div>

              <span className="text-xs font-semibold tracking-[0.2em] text-[#72B7AC] uppercase">
                {t("hero.character")}
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#EDE5D4]">
                GIO
              </h2>

              <p className="mt-2 max-w-52 text-sm leading-relaxed text-[#9FB3AE]">
                {t("hero.characterDescription")}
              </p>

              <div className="mt-6 flex items-center gap-2 rounded-full border border-[#C9AA70]/30 bg-[#101B25]/65 px-4 py-2 text-xs text-[#E8C88D]">
                <Terminal size={14} />
                {t("hero.chapter")}
              </div>
            </div>
          </div>

          {/* Etiqueta decorativa */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#C9AA70]/35 bg-[#101B25] px-5 py-2.5 text-xs font-medium text-[#E8C88D] shadow-xl">
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
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-[#B8C6BD] hover:text-[#E8C88D] lg:flex"
        aria-label={t("hero.scroll")}
      >
        {t("hero.scroll")}
        <ArrowDown size={17} />
      </motion.a>
    </section>
  );
}
