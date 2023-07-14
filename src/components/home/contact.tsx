import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Snackbar, Alert } from '@mui/material'
import { StyledButton } from '../styled-button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
// import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'

import { useLanguageContext } from '@/context/languageContext'

const HomeContact: FC = () => {
  const { t } = useLanguageContext()
  const [status, setStatus] = useState(false)
  const [snackMsg, setSnackMsg] = useState('')
  const [result, setResult] = useState(true)
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [validateName, setValidateName] = useState({
    flag: false,
    text: '',
  })
  const [validateEmail, setValidateEmail] = useState({
    flag: false,
    text: '',
  })
  const [validatePhone, setValidatePhone] = useState({
    flag: false,
    text: '',
  })
  const [validateMessage, setValidateMessage] = useState({
    flag: false,
    text: '',
  })

  const handleInputchange = (e: any): void => {
    const { id, value } = e.target

    switch (e.target.id) {
      case 'name':
        setValidateName({
          flag: false,
          text: '',
        })
        break
      case 'email':
        setValidateEmail({
          flag: false,
          text: '',
        })
        break
      case 'phone':
        setValidatePhone({
          flag: false,
          text: '',
        })
        break
      case 'message':
        setValidateMessage({
          flag: false,
          text: '',
        })
        break
      default:
        break
    }
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = (): void => {
    if (state.name == '' || state.email == '' || state.phone == '' || state.message == '') {
      if (state.name == '') {
        setValidateName({
          flag: true,
          text: 'Name field is required!',
        })
      }
      if (state.email == '') {
        setValidateEmail({
          flag: true,
          text: 'Email field is required!',
        })
      }
      if (state.phone == '') {
        setValidatePhone({
          flag: true,
          text: 'Phone field is required!',
        })
      }
      if (state.message == '') {
        setValidateMessage({
          flag: true,
          text: 'Message field is required!',
        })
      }
    } else {
      setSnackMsg('Successfully submitted!')
      setResult(true)
      setStatus(true)
    }
  }

  return (
    <Box id="contact" sx={{ backgroundColor: '#ecf3f3', py: { xs: 8, md: 10 } }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography fontSize={30} fontWeight={'bold'} sx={{ paddingBottom: '20px' }}>
              {t('Contact Info')}
            </Typography>
            <Box>
              <Typography color={'grey'} fontSize={'1.1rem'} style={{ paddingBottom: '20px' }}>
                {t('Contact Us At: Parallel Bible by Jorge Carrasco')}
                <br />
                {t('Jc Workforce Training Center Corporation Organization.')}
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <HomeOutlinedIcon style={{ fontSize: '25', marginRight: '30px' }} />
                <Typography color={'grey'} fontSize={'1.1rem'}>
                  5190 Indian Mound St. Sarasota Florida USA
                </Typography>
              </div>
              {/* <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <PhoneInTalkOutlinedIcon style={{ fontSize: '25', marginRight: '30px' }} />
                <Typography color={'grey'} fontSize={'1.1rem'}>
                  (555) 123-4567
                </Typography>
              </div> */}

              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <EmailOutlinedIcon style={{ fontSize: '25', marginRight: '30px' }} />
                <Typography color={'grey'} fontSize={'1.1rem'}>
                  info@jorgecarrascobible.com
                </Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <LanguageOutlinedIcon style={{ fontSize: '25', marginRight: '30px' }} />
                <Typography color={'grey'} fontSize={'1.1rem'}>
                  jorgecarrascobible.com
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontSize={30} fontWeight={'bold'} sx={{ paddingBottom: '20px' }}>
              {t('Contact Form')}
            </Typography>
            <Box>
              <TextField
                id="name"
                error={validateName.flag ? true : false}
                helperText={t(`${validateName.text}`)}
                value={state.name}
                onChange={handleInputchange}
                label={t('Name')}
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="email"
                error={validateEmail.flag ? true : false}
                helperText={t(`${validateEmail.text}`)}
                value={state.email}
                onChange={handleInputchange}
                type="email"
                label={t('Email')}
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="phone"
                error={validatePhone.flag ? true : false}
                helperText={t(`${validatePhone.text}`)}
                value={state.phone}
                onChange={handleInputchange}
                label={t('Phone')}
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="message"
                error={validateMessage.flag ? true : false}
                helperText={t(`${validateMessage.text}`)}
                value={state.message}
                onChange={handleInputchange}
                label={t('Message')}
                multiline
                rows={4}
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <Box>
                <StyledButton disableHoverEffect size="large" onClick={handleSubmit}>
                  {t('Send')}
                </StyledButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Snackbar
          open={status}
          autoHideDuration={3000}
          onClose={() => {
            setStatus(false)
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity={result ? 'success' : 'warning'} sx={{ width: '100%' }}>
            {t(`${snackMsg}`)}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  )
}

export default HomeContact
