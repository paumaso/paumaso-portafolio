import { createI18n } from "vue-i18n";
import ca from "./ca.json";
import es from "./es.json";
import en from "./en.json";

const i18n = createI18n({
  legacy: false,
  locale: "es", // idioma por defecto
  fallbackLocale: "en", // idioma de respaldo
  messages: {
    ca,
    es,
    en,
  },
});

export default i18n;
