import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import hiTranslations from './hi.json';
import teTranslations from './te.json';
import knTranslations from './kn.json';
import { getStoredLanguage, LANGUAGE_STORAGE_KEY } from '../utils/schemeAudio';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en';

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return getStoredLanguage(savedLanguage, 'en');
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations },
      te: { translation: teTranslations },
      kn: { translation: knTranslations }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (language) => {
  if (typeof window === 'undefined') return;

  const nextLanguage = getStoredLanguage(language, 'en');
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
});

export default i18n;
