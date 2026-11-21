
import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useTranslation } from "react-i18next";
import {
  BookOpen,
  Code2,
  Database,
  GitBranch,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    id: "web",
    icon: Code2,
    example: "skills.webExample",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    id: "programming",
    icon: Terminal,
    example: "skills.programmingExample",
    technologies: [
      "Python",
      "C",
      "C++",
      "Java",
      "C#",
    ],
  },
  {
    id: "data",
    icon: Database,
    example: "skills.dataExample",
    technologies: [
      "SQL",
      "Azure SQL Database",
      "Excel",
      "Power BI",
    ],
  },
  {
    id: "tools",
    icon: Wrench,
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Figma",
      "Godot",
    ],
  },
];

export default function Skills() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="habilidades"
      tabIndex={-1}
      aria-labelledby="skills-title"
      className="gio-section-layout"
    >
      {/* Fondo ambiental */}
      <div className="gio-section-container">
        {/* Encabezado */}
        <m.div
          initial={reduceMotion ? false : { opacity: 0.94, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="gio-reading-panel gio-section-heading"
        >
          <span className="gio-section-eyebrow text-gio-gold">
            <GitBranch size={15} aria-hidden="true" />
            {t("skills.eyebrow")}
          </span>

          <h2
            id="skills-title"
            className="gio-section-title text-gio-ink"
          >
            {t("skills.title")}
          </h2>

          <p className="gio-section-intro">
            {t("skills.subtitle")}
          </p>
        </m.div>

        {/* Categorías */}
        <div className="gio-section-start gio-grid md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <m.article
                key={group.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0.9, y: 8 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="group relative overflow-hidden gio-card gio-card-interactive gio-card-padding rounded-2xl transition-colors"
              >
                {/* Esquinas decorativas */}

                <div className="mb-5 flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-gio-line bg-gio-surface">
                    <Icon
                      size={24}
                      aria-hidden="true"
                      className="text-gio-gold"
                    />
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-gio-ink">
                      {t(`skills.${group.id}`)}
                    </h3>

                    <p className="mt-1 text-sm text-gio-muted">
                      {t(`skills.${group.id}Description`)}
                    </p>
                  </div>
                </div>

                {/* Tecnologías */}
                <ul role="list" className="flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg border border-gio-line bg-gio-surface px-3 py-2 text-sm font-medium text-gio-ink transition-colors hover:border-gio-line hover:bg-gio-gold/10"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                {group.example && (
                  <p className="mt-4 border-t border-gio-line pt-3 text-sm leading-relaxed text-gio-muted">
                    {t(group.example)}
                  </p>
                )}
              </m.article>
            );
          })}
        </div>

        {/* Mensaje inferior */}
        <m.div
          initial={reduceMotion ? false : { opacity: 0.9, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gio-section-start flex items-start gap-3 gio-card rounded-xl p-5"
        >
          <BookOpen
            size={22}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-gio-turquoise"
          />

          <div>
            <h3 className="font-semibold text-gio-ink">
              {t("skills.learning")}
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-gio-muted">
              {t("skills.learningDescription")}
            </p>
          </div>

          <Sparkles
            size={19}
            aria-hidden="true"
            className="ml-auto shrink-0 text-gio-gold"
          />
        </m.div>
      </div>
    </section>
  );
}
