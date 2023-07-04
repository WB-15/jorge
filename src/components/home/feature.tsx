import React, { FC, useEffect, useRef } from 'react'
// import Image from 'next/image'
// import { CardMedia, Card } from '@mui/material'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
// import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined'
import Image from 'next/image'
import AndroidIcon from '@mui/icons-material/Android'
import AppleIcon from '@mui/icons-material/Apple'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const HomeFeature: FC = () => {
  const videoEl = useRef<HTMLVideoElement>(null)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  return (
    <Box id="feature" sx={{ py: { xs: 4, md: 5 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} alignItems={'center'} justifyContent={'center'}>
            <Box
              sx={{
                position: 'relative',
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div>
                <video
                  style={{
                    maxWidth: '250px',
                    width: '380px',
                    margin: '0 auto',
                    borderRadius: '30px',
                    marginTop: '20px',
                  }}
                  playsInline
                  loop
                  muted
                  controls
                  src="video/file.mp4"
                  ref={videoEl}
                />
              </div>
              {/* <Box
                sx={{
                  position: 'absolute',
                  top: -45,
                  right: { xs: 0, md: -36 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  width: 160,
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }} textAlign={'center'}>
                  Android & iOS
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    UI/UI
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={65} order={1} />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Android
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={40} order={2} />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    iOS
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={50} order={3} />
                </Box>
              </Box> */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -12,
                  left: { xs: 0, md: -68 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 2,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>Jorge Carrasco</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.disabled' }}>
                    Parallel Bible Inc
                  </Typography>
                  <Box
                    sx={{
                      height: 85,
                      width: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    {/* <Typography variant="h4" sx={{ color: '#32dc88' }}>
                      75%
                    </Typography>
                    <CircularProgress
                      sx={{ position: 'absolute', color: 'divider' }}
                      thickness={2}
                      variant="determinate"
                      value={85}
                      size={85}
                    />
                    <CircularProgress
                      disableShrink
                      thickness={2}
                      variant="indeterminate"
                      value={75}
                      size={85}
                      sx={{ transform: 'rotate(96deg) !important', color: '#32dc88', position: 'absolute' }}
                    /> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 35, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Free Download{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                App <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 90, md: 110 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
              {/* Enjoyable */}
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Parallel Bible Books, Free Download, Ranked #1 Worldwide best Parallel Bible Books App, the combination of
              the scriptures By Jorge Carrasco
            </Typography>

            <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              <Grid container item xs={12} md={6} style={{ marginBottom: '15px' }}>
                <Grid container item xs={6} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.2rem',
                        mb: 1,
                        color: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <AndroidIcon style={{ paddingRight: '5px' }} />
                      {'Android App'}
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        lineHeight: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: '#000000',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      variant="subtitle1"
                    >
                      <TouchAppOutlinedIcon />
                      <Link href="#" variant="body2" style={{ marginBottom: '10px', fontSize: '1.1rem' }}>
                        {'Click to download'}
                      </Link>
                    </Typography>
                  </Box>
                  <Image alt="Android Scan" src="/images/QR_Code/Android_QR.jpg" width={200} height={200}></Image>
                  <Typography textAlign={'center'} display={'flex'} justifyContent={'center'}>
                    Scan To Download
                  </Typography>
                </Grid>
                <Grid container item xs={6} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                  {/* <Typography>22 Languages</Typography> */}
                  <Image alt="Android Scan" src="/images/Phone/android.jpg" width={130} height={100}></Image>
                </Grid>
              </Grid>
              <Grid container item xs={12} md={6} style={{ marginBottom: '15px' }}>
                <Grid container item xs={6} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.2rem',
                        mb: 1,
                        color: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <AppleIcon style={{ paddingRight: '5px' }} />
                      {'Apple / iOS App'}
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        fontSize: '1.1rem',
                        lineHeight: 1.5,
                        fontWeight: 'bold',
                        color: '#000000',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      variant="subtitle1"
                    >
                      <TouchAppOutlinedIcon />
                      <Link href="#" variant="body2" style={{ marginBottom: '10px', fontSize: '1.1rem' }}>
                        {'Click to download'}
                      </Link>
                    </Typography>
                  </Box>
                  <Image alt="Android Scan" src="/images/QR_Code/Android_QR.jpg" width={200} height={200}></Image>
                  <Typography textAlign={'center'} display={'flex'} justifyContent={'center'}>
                    Scan To Download
                  </Typography>
                </Grid>
                <Grid container item xs={6} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                  {/* <Typography>22 Languages</Typography> */}
                  <Image alt="Android Scan" src="/images/Phone/ios.jpg" width={130} height={100}></Image>
                </Grid>
              </Grid>
              {/* {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 1,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          display: 'flex',
                          lineHeight: 1.5,
                          fontWeight: 'bold',
                          color: '#000000',
                          alignItems: 'center',
                        }}
                        variant="subtitle1"
                      >
                        <TouchAppOutlinedIcon />
                        <Link href="#" variant="body2">
                          {description}
                        </Link>
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <Typography>Scan To Download</Typography>
                          <Image
                            alt="Android Scan"
                            src="/images/QR_Code/Android_QR.jpg"
                            width={200}
                            height={200}
                          ></Image>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography>22 Languages</Typography>
                          <Image alt="Android Scan" src="/images/Phone/android.jpg" width={100} height={200}></Image>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              ))} */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature
