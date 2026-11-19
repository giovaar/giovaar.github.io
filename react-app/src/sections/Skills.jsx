
import { motion, useReducedMotion } from "motion/react";
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
    technologies: [
      "SQL",
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
        <motion.div
          initial={reduceMotion ? false : { opacity: 0.94, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="gio-reading-panel gio-section-heading"
        >
          <span className="gio-section-eyebrow text-gio-gold">
            <GitBranch size={15} />
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
        </motion.div>

        {/* Categorías */}
        <div className="gio-section-start gio-grid md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gio-line bg-gio-surface transition-colors group-hover:border-gio-line">
                    <Icon
                      size={24}
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
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-gio-line bg-gio-surface px-3 py-2 text-sm font-medium text-gio-ink transition-colors hover:border-gio-line hover:bg-gio-gold/10"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Mensaje inferior */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0.9, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gio-section-start flex items-start gap-3 gio-card rounded-xl p-5"
        >
          <BookOpen
            size={22}
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
        </motion.div>
      </div>
    </section>
  );
}
