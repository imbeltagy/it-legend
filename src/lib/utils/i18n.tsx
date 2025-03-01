import { useLocale } from "next-intl";
import { Locale } from "../types/i18n";
import { localeSettings } from "../config/i18n";

export function useCurrentLocale() {
  const locale = useLocale();

  return localeSettings[locale as Locale];
}
