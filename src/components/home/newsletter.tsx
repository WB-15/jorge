import React, { useState, FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Snackbar, Alert } from '@mui/material'
import { StyledButton } from '../styled-button'
import { useLanguageContext } from '@/context/languageContext'

const HomeNewsLetter: FC = () => {
  const { t } = useLanguageContext()
  const [value, setValue] = useState('')
  const [status, setStatus] = useState(false)
  const [message, setMessage] = useState('')
  const [result, setResult] = useState(true)

  const handleChange = (e: any): void => {
    setValue(e.target.value)
  }

  const handleSubmit = (): void => {
    if (value.length == 0) {
      setResult(false)
      setMessage('Please input your correct email!')
      setStatus(true)
    } else {
      if (result) {
        setResult(false)
        setMessage('Your email added our email listing. You can receive our promotioning email.')
        setStatus(true)
      } else {
        setResult(false)
        setMessage('The Server Error occurred!')
        setStatus(true)
      }
    }
  }

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            {t('Subscribe to get exclusive updates')}
          </Typography>
          <Typography sx={{ mb: 6 }}>{t('Join Our Mailing List')}</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              value={value}
              onChange={handleChange}
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder={t('Enter your Email Address')}
            />
            <Box>
              <StyledButton disableHoverEffect size="large" onClick={handleSubmit}>
                {t('Subscribe')}
              </StyledButton>
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={status}
          autoHideDuration={3000}
          onClose={() => {
            setStatus(false)
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity={result ? 'success' : 'warning'} sx={{ width: '100%' }}>
            {t(`${message}`)}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
