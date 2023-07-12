import * as i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import all translation files
import English from '../../public/translation/English.json'
import Germany from '../../public/translation/Germany.json'
import French from '../../public/translation/French.json'

const resources = {
  en: {
    translation: English,
  },
  fr: {
    translation: French,
  },
  de: {
    translation: Germany,
  },
}

i18next.use(initReactI18next).init({
  resources,
  // lng: localStorage.getItem('language') || 'en', // default language
  lng: 'en',
})

export default i18next
