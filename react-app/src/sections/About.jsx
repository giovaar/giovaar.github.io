
import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
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
      className="gio-section-layout"
    >
      {/* Iluminación ambiental */}
      <div className="gio-section-container">
        <m.div
          initial={reduceMotion ? false : { opacity: 0.94, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="gio-reading-panel gio-section-heading"
        >
          <span className="gio-section-eyebrow text-gio-gold">
            <Compass size={15} aria-hidden="true" />
            {t("about.eyebrow")}
          </span>

          <h2
            id="about-title"
            className="gio-section-title text-gio-ink"
          >
            {t("about.title")}
          </h2>

          <p className="gio-section-intro">
            {t("about.subtitle")}
          </p>
        </m.div>

        <div className="gio-section-start gio-grid lg:grid-cols-2">
          {/* Perfil */}
          <m.div
            initial={reduceMotion ? false : { opacity: 0.9, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative gio-card gio-card-padding rounded-2xl"
          >

            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-gio-line bg-gio-raised">
                <Sparkles size={23} aria-hidden="true" className="text-gio-gold" />
              </span>

              <div>
                <h3 className="text-xl font-bold">Giovanny Arpaia</h3>
                <p className="text-xs tracking-wider text-gio-turquoise">
                  {t("about.profileRole")}
                </p>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-7 text-gio-muted sm:text-base">
              <p className="text-lg leading-relaxed font-semibold text-gio-ink">{t("about.intro")}</p>
              <p>{t("about.description")}</p>
              <p>{t("about.goal")}</p>
            </div>
            <a href="#proyectos" className="mt-5 inline-flex min-h-11 items-center rounded-sm font-semibold text-gio-violet hover:underline">
              {t("about.projectsAction")}
            </a>
          </m.div>

          {/* Intereses */}
          <div className="gio-grid">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <m.div
                  key={card.id}
                  initial={reduceMotion ? false : { opacity: 0.9, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="group flex gap-4 gio-card gio-card-interactive rounded-2xl p-5 transition-colors sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gio-line bg-gio-raised transition-colors group-hover:border-gio-line">
                    <Icon size={23} aria-hidden="true" className="text-gio-turquoise transition-colors group-hover:text-gio-gold" />
                  </span>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gio-ink">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gio-muted">
                      {card.description}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
