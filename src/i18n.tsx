import i18nNext from "i18next";
import { initReactI18next } from "react-i18next";
import { Lang } from "./language";

const resources = {
  en: {
    translation: {
      ...Lang,
    },
  },
};

i18nNext
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false, // react already safes from
    },
  });

export default i18nNext;
