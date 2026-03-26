import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ru from './locales/ru.json'
import ka from './locales/ka.json'

const saved = localStorage.getItem('lang') ?? 'en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ka: { translation: ka },
    },
    lng: saved,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
