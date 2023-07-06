import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
// import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'

const HomeContact: FC = () => {
  return (
    <Box id="contact" sx={{ backgroundColor: '#ecf3f3', py: { xs: 8, md: 10 } }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography fontSize={30} fontWeight={'bold'} sx={{ paddingBottom: '20px' }}>
              Contact Info
            </Typography>
            <Box>
              <Typography color={'grey'} fontSize={'1.1rem'} style={{ paddingBottom: '20px' }}>
                Contact Us At: Parallel Bible by Jorge Carrasco
                <br />
                Jc Workforce Training Center Corporation Organization.
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
              Contact Form
            </Typography>
            <Box>
              <TextField
                id="contact_name"
                label="Name"
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="contact_email"
                label="Email"
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="contact_phone"
                label="Phone"
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="contact_message"
                label="Message"
                multiline
                rows={4}
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <Box>
                <StyledButton disableHoverEffect size="large">
                  Send
                </StyledButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeContact
