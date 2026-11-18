
import { useTranslation } from "react-i18next";
import { Globe2 } from "lucide-react";

const languages = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
  { code: "it", label: "IT", name: "Italiano" },
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || "es";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      role="group"
      aria-label={t("common.language")}
      className="flex items-center gap-1 rounded-xl border border-[#C9AA70]/40 bg-[#203C35]/80 p-1"
    >
      <Globe2
        size={16}
        aria-hidden="true"
        className="ml-2 hidden text-[#C9AA70] sm:block"
      />

      {languages.map((language) => {
        const selected = currentLanguage === language.code;

        return (
          <button
            key={language.code}
            type="button"
            lang={language.code}
            onClick={() => changeLanguage(language.code)}
            aria-label={language.name}
            aria-pressed={selected}
            title={language.name}
            className={`min-h-9 min-w-9 rounded-lg px-2 text-xs font-semibold transition-all duration-200 sm:min-w-10 ${
              selected
                ? "bg-[#C9AA70] text-[#101B25] shadow-sm"
                : "text-[#EDE5D4] hover:bg-[#C9AA70]/15 hover:text-[#E8C88D]"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
