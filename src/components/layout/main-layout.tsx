import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Chatbot from '../chatbot/Chatbot'

import { LanguageContextProvider } from '@/context/languageContext'
import '../i18n'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <LanguageContextProvider>
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </LanguageContextProvider>
    </Box>
  )
}

export default MainLayout
