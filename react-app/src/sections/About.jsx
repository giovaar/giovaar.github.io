
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  BookOpen,
  Code2,
  Compass,
  Database,
  Sparkles,
} from "lucide-react";

export default function About() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const cards = [
    {
      id: "software",
      title: t("about.software"),
      description: t("about.softwareDescription"),
      icon: Code2,
    },
    {
      id: "data",
      title: t("about.data"),
      description: t("about.dataDescription"),
      icon: Database,
    },
    {
      id: "learning",
      title: t("about.learning"),
      description: t("about.learningDescription"),
      icon: BookOpen,
    },
  ];

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="relative scroll-mt-20 overflow-hidden bg-[#13251F] px-5 py-20 text-[#EDE5D4] sm:px-8 lg:py-28"
    >
      {/* Iluminación ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(114,183,172,0.11),transparent_45%),radial-gradient(ellipse_at_85%_90%,rgba(201,170,112,0.08),transparent_40%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9AA70]/35 bg-[#C9AA70]/10 px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#E8C88D] uppercase">
            <Compass size={15} />
            {t("about.eyebrow")}
          </span>

          <h2
            id="about-title"
            className="mt-4 text-3xl font-bold text-[#EDE5D4] sm:text-4xl"
          >
            {t("about.title")}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#B9CBC2]">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Perfil */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-[#C9AA70]/30 bg-[#101B25]/70 p-6 shadow-xl shadow-black/10 sm:p-8"
          >
            <div className="absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-[#C9AA70]/60" />
            <div className="absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-[#C9AA70]/60" />

            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9AA70]/40 bg-[#203C35]">
                <Sparkles size={23} className="text-[#C9AA70]" />
              </span>

              <div>
                <h3 className="text-xl font-bold">Giovanny Arpaia</h3>
                <p className="text-xs tracking-wider text-[#72B7AC]">
                  GIO · Developer
                </p>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-7 text-[#CDD7D0] sm:text-base">
              <p>{t("about.intro")}</p>
              <p>{t("about.description")}</p>
              <p>{t("about.goal")}</p>
            </div>
          </motion.div>

          {/* Intereses */}
          <div className="grid gap-4">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="group flex gap-4 rounded-2xl border border-[#C9AA70]/20 bg-[#101B25]/55 p-5 transition-colors hover:border-[#C9AA70]/50 hover:bg-[#203C35]/65 sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#72B7AC]/30 bg-[#203C35] transition-colors group-hover:border-[#C9AA70]/60">
                    <Icon size={23} className="text-[#72B7AC] transition-colors group-hover:text-[#C9AA70]" />
                  </span>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#EDE5D4]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#B9CBC2]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
