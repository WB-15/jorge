import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'

const HomeContact: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#ecf3f3', py: { xs: 8, md: 10 } }}>
      <Container>
        {/* <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Subscribe to get exclusive updates
          </Typography>
          <Typography sx={{ mb: 6 }}>Join Our Mailing List</Typography>

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
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
            />
            <Box>
              <StyledButton disableHoverEffect size="large">
                Subscribe
              </StyledButton>
            </Box>
          </Box>
        </Box> */}
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography fontSize={30} fontWeight={'bold'} sx={{ paddingBottom: '20px' }}>
              Contact Info
            </Typography>
            <Box>
              <Typography color={'grey'} fontSize={20} style={{ paddingBottom: '20px' }}>
                Contact Us At: Parallel Bible by Jorge Carrasco
                <br />
                Jc Workforce Training Center Corporation Organization.
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <HomeOutlinedIcon style={{ fontSize: '25', marginRight: '30px' }} />
                <Typography color={'grey'} fontSize={20}>
                  5190 Indian Mound St. Sarasota Florida USA
                </Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <PhoneInTalkOutlinedIcon style={{ fontSize: '25', marginRight: '30px' }} />
                <Typography color={'grey'} fontSize={20}>
                  (555) 123-4567
                </Typography>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <EmailOutlinedIcon style={{ fontSize: '25', marginRight: '30px' }} />
                <Typography color={'grey'} fontSize={20}>
                  info@jorgecarrascobible.com
                </Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <LanguageOutlinedIcon style={{ fontSize: '25', marginRight: '30px' }} />
                <Typography color={'grey'} fontSize={20}>
                  dfadsfadf
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
                id="standard-basic"
                label="Name"
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="standard-basic"
                label="Phone"
                variant="standard"
                style={{ paddingBottom: '15px', width: '100%' }}
              />
              <TextField
                id="standard-multiline-static"
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
