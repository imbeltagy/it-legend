import { Locale, LocaleSettings } from "../types/i18n";

export const localeSettings: Record<Locale, LocaleSettings> = {
  ar: {
    value: "ar",
    label: "العربية",
    dir: "rtl",
  },
  en: {
    value: "en",
    label: "English",
    dir: "ltr",
  },
};
