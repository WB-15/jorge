import React, { createContext, useContext } from 'react'
import { useTranslation } from 'react-i18next'

interface ILanguageContext {
  t: (key: string) => string
  i18n: any // Replace with the appropriate type for your 'i18n' instance
  onClickLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  languages: Record<string, { nativeName: string }>
}

export const LanguageContext = createContext<ILanguageContext | undefined>(undefined)

interface LanguageContextProviderProps {
  children: React.ReactNode
}

export const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({ children }) => {
  const { t, i18n } = useTranslation()
  const languages: Record<string, { nativeName: string }> = {
    en: { nativeName: t('English') },
    fr: { nativeName: t('French') },
    de: { nativeName: t('Germany') },
  }

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value
    localStorage.setItem('language', language)
    i18n.changeLanguage(language) // change the language
  }

  const contextValue: ILanguageContext = {
    t,
    i18n,
    onClickLanguageChange,
    languages,
  }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export const useLanguageContext = (): ILanguageContext => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageContextProvider')
  }
  return context
}
