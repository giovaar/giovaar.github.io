
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
      aria-labelledby="skills-title"
      className="relative scroll-mt-20 overflow-hidden bg-[#101B25] px-5 py-20 text-[#EDE5D4] sm:px-8 lg:py-28"
    >
      {/* Fondo ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_5%,rgba(114,183,172,0.11),transparent_48%),radial-gradient(ellipse_at_85%_85%,rgba(201,170,112,0.07),transparent_42%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9AA70]/35 bg-[#C9AA70]/10 px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#E8C88D] uppercase">
            <GitBranch size={15} />
            {t("skills.eyebrow")}
          </span>

          <h2
            id="skills-title"
            className="mt-4 text-3xl font-bold text-[#EDE5D4] sm:text-4xl"
          >
            {t("skills.title")}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#B9CBC2]">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Categorías */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#C9AA70]/25 bg-[#203C35]/55 p-6 shadow-xl shadow-black/10 transition-colors hover:border-[#C9AA70]/60 sm:p-7"
              >
                {/* Esquinas decorativas */}
                <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#C9AA70]/55" />
                <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#C9AA70]/55" />

                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9AA70]/40 bg-[#101B25]/80 transition-colors group-hover:border-[#C9AA70]">
                    <Icon
                      size={24}
                      className="text-[#C9AA70]"
                    />
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-[#EDE5D4]">
                      {t(`skills.${group.id}`)}
                    </h3>

                    <p className="mt-1 text-sm text-[#B9CBC2]">
                      {t(`skills.${group.id}Description`)}
                    </p>
                  </div>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-[#72B7AC]/25 bg-[#101B25]/60 px-3 py-2 text-sm font-medium text-[#D3E1DA] transition-colors hover:border-[#C9AA70]/65 hover:bg-[#C9AA70]/10"
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
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-9 flex items-start gap-3 rounded-xl border border-[#72B7AC]/25 bg-[#203C35]/35 p-5"
        >
          <BookOpen
            size={22}
            className="mt-0.5 shrink-0 text-[#72B7AC]"
          />

          <div>
            <h3 className="font-semibold text-[#EDE5D4]">
              {t("skills.learning")}
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-[#B9CBC2]">
              {t("skills.learningDescription")}
            </p>
          </div>

          <Sparkles
            size={19}
            aria-hidden="true"
            className="ml-auto shrink-0 text-[#C9AA70]"
          />
        </motion.div>
      </div>
    </section>
  );
}
