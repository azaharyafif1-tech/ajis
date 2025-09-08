import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ms from '../locales/ms.json';
import en from '../locales/en.json';

const resources = {
  ms: {
    translation: ms
  },
  en: {
    translation: en
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ms', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;