import * as i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import all translation files
import Bengali from '../../public/translation/Bengali.json'
import English from '../../public/translation/English.json'
import Germany from '../../public/translation/Germany.json'
import French from '../../public/translation/French.json'
import Greek from '../../public/translation/Greek.json'
import Hebrew from '../../public/translation/Hebrew.json'
import Hindi from '../../public/translation/Hindi.json'
import Italian from '../../public/translation/Italian.json'
import Japanese from '../../public/translation/Japanese.json'
import Korean from '../../public/translation/Korean.json'
import Kurdish from '../../public/translation/Kurdish.json'
import Latin from '../../public/translation/Latin.json'
import Polish from '../../public/translation/Polish.json'
import Portuguese from '../../public/translation/Portuguese.json'
import Russian from '../../public/translation/Russian.json'
import Filipino from '../../public/translation/Filipino.json'
import Spanish from '../../public/translation/Spanish.json'
import Turkish from '../../public/translation/Turkish.json'
import Ukrainian from '../../public/translation/Ukrainian.json'
import Urdu from '../../public/translation/Urdu.json'

// import India from '../../public/translation/India.json'

const resources = {
  bn: {
    translation: Bengali,
  },
  en: {
    translation: English,
  },
  fr: {
    translation: French,
  },
  de: {
    translation: Germany,
  },
  el: {
    translation: Greek,
  },
  he: {
    translation: Hebrew,
  },
  hi: {
    translation: Hindi,
  },
  it: {
    translation: Italian,
  },
  ja: {
    translation: Japanese,
  },
  ko: {
    translation: Korean,
  },
  ku: {
    translation: Kurdish,
  },
  la: {
    translation: Latin,
  },
  pl: {
    translation: Polish,
  },
  pt: {
    translation: Portuguese,
  },
  ru: {
    translation: Russian,
  },
  tl: {
    translation: Filipino,
  },
  es: {
    translation: Spanish,
  },
  tr: {
    translation: Turkish,
  },
  uk: {
    translation: Ukrainian,
  },
  ur: {
    translation: Urdu,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
})

export default i18next
