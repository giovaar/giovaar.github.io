
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
      tabIndex={-1}
      aria-labelledby="about-title"
      className="gio-section gio-section-alt relative scroll-mt-20 overflow-hidden px-5 py-20 sm:px-8 lg:py-28"
    >
      {/* Iluminación ambiental */}
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gio-line bg-gio-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.15em] text-gio-gold uppercase">
            <Compass size={15} />
            {t("about.eyebrow")}
          </span>

          <h2
            id="about-title"
            className="mt-4 text-3xl font-bold text-gio-ink sm:text-4xl lg:text-5xl"
          >
            {t("about.title")}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gio-muted">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Perfil */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative gio-card rounded-2xl p-6 sm:p-8"
          >

            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gio-line bg-gio-raised">
                <Sparkles size={23} className="text-gio-gold" />
              </span>

              <div>
                <h3 className="text-xl font-bold">Giovanny Arpaia</h3>
                <p className="text-xs tracking-wider text-gio-turquoise">
                  GIO · Developer
                </p>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-7 text-gio-muted sm:text-base">
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
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="group flex gap-4 gio-card gio-card-interactive rounded-2xl p-5 transition-colors sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gio-line bg-gio-raised transition-colors group-hover:border-gio-line">
                    <Icon size={23} className="text-gio-turquoise transition-colors group-hover:text-gio-gold" />
                  </span>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gio-ink">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gio-muted">
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
