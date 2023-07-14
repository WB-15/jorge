import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useLanguageContext } from '@/context/languageContext'

const HomeTranslations: FC = () => {
  const { t } = useLanguageContext()
  return (
    <Box id="translations" sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box>
          <Typography
            fontSize={'1.6rem'}
            fontWeight={'bold'}
            sx={{ paddingBottom: '20px', display: 'flex', justifyContent: 'center' }}
          >
            {t('Translations Disclaimer')}
          </Typography>
          <Typography
            fontSize={'1.1rem'}
            color={'grey'}
            style={{ padding: '0px 20px 0px 20px', wordBreak: 'break-all' }}
          >
            {t('Parallel Bible Books App, in Different Languages, #parallelbiblejorge, #bibliaparalelajorge')}
            <br />{' '}
            {t(
              'All the content on our website and Content displayed has been translated using Google translation software powered by Google, and some translations may be flawed or inaccurate.'
            )}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeTranslations
