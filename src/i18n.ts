import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    supportedLngs: ["pt", "en", "es", "zh"],
    fallbackLng: "pt",
    lng: "pt",
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;