
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es.json";
import en from "./en.json";
import it from "./it.json";

const supportedLanguages = ["es", "en", "it"];

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem("gio-language");

    if (supportedLanguages.includes(savedLanguage)) {
      return savedLanguage;
    }
  } catch {
    // Usar español si el almacenamiento no está disponible.
  }

  return "es";
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    it: { translation: it }
  },
  lng: getInitialLanguage(),
  fallbackLng: "es",
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

i18n.on("languageChanged", (language) => {
  const languageCode = language.split("-")[0];

  document.documentElement.lang = languageCode;

  try {
    localStorage.setItem("gio-language", languageCode);
  } catch {
    // La página funciona incluso sin almacenamiento local.
  }
});

document.documentElement.lang = i18n.language;

export default i18n;
