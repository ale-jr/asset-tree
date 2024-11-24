import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en-US";
import ptBR from "./locales/pt-BR";

const resources = {
  "en-US": enUS,
  "pt-BR": ptBR,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
