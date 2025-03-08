import { Locale, LocaleSettings } from '../types/i18n';

export const localeSettings: Record<Locale, LocaleSettings> = {
  ar: {
    label: 'العربية',
    dir: 'rtl',
    icon: 'flagpack:sa',
    value: 'ar',
  },
  en: {
    label: 'English',
    dir: 'ltr',
    icon: 'flagpack:gb-nir',
    value: 'en',
  },
};

export const defaultLocale: Locale = 'en';
