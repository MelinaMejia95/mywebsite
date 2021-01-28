import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import { englishTranslation, spanishTranslation } from './constants/languagesConstants'

const fallbackLng = ['en']
const availableLanguages = ['en', 'es']

const resources = {
  en: {
    translation: englishTranslation
  },
  es: {
    translation: spanishTranslation
  }
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    detection: {
      checkWhitelist: true
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n