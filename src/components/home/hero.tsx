import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import AndroidIcon from '@mui/icons-material/Android'
import AppleIcon from '@mui/icons-material/Apple'
import { useLanguageContext } from '@/context/languageContext'

interface Exp {
  label: string
  value: string
  link: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Android App',
    value: '/images/badges/android.png',
    link: 'https://play.google.com/store/apps/details?id=com.jccorporation.bibliaparalela',
  },
  {
    label: 'iOS / Apple App',
    value: '/images/badges/apple.png',
    link: 'https://apps.apple.com/us/app/parallel-bible-books/id1641349485',
  },
  {
    label: 'Google Play Books',
    value: '/images/badges/googleplaybooks.png',
    link: 'https://play.google.com/store/search?q=Jorge%20Carrasco%20Bible&c=books&hl=es',
  },
  {
    label: 'Barnes & Noble Books',
    value: '/images/badges/barnes.png',
    link: 'https://www.barnesandnoble.com/s/Jorge%20Carrasco%20Parallel%20Bible/_/N-w',
  },
  {
    label: 'iBooks Store',
    value: '/images/badges/ibooks.png',
    link: 'http://books.apple.com/us/book/id1596561780',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { t } = useLanguageContext()
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0, boxShadow: 3 } }}>
      <Image src={value} width={250} height={85} alt={label} />
      <Typography color="text.secondary" variant="h5">
        {t(`${label}`)}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  const { t } = useLanguageContext()
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
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
                    {t('Parallel')}{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  {t('Bible')}{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    {t('Books')}
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#127C71"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#127C71"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#127C71"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                  <Typography style={{ fontSize: '1.9rem' }}>{t('Parallel Bible Inc')}</Typography>
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {t('Parallel Bible Books, Free Download')}
                  <br /> {t('Parallel Bible Books App, the combination of the scriptures By Jorge Carrasco')} <br />
                  {t('Parallel Bible The combination Of The scriptures the easiest way to comprehend the Bible')}
                  <br />
                  {t(
                    'Parallel Bible by Jorge Carrasco, Where You Can Strengths, Your Faith, Love, Peace, Companion, Mercy, Hope, The Best Bible Study Tools And Daily verses...'
                  )}
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }} justifyContent={'space-between'} style={{ marginBottom: '10px' }}>
                {/* <ScrollLink to="book-collection" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Get Started
                  </StyledButton>
                </ScrollLink> */}
                {/* <ScrollLink to="download" spy={true} smooth={true} offset={0} duration={350}> */}
                <Link href={`${exps[0].link}`} target="_blank">
                  <StyledButton color="primary" size="large" variant="outlined" startIcon={<AndroidIcon />}>
                    {t('Download Android App')}
                  </StyledButton>
                </Link>
                {/* </ScrollLink> */}
                {/* <ScrollLink to="download" spy={true} smooth={true} offset={0} duration={350}> */}
                <Link href={`${exps[1].link}`} target="_blank">
                  <StyledButton color="primary" size="large" variant="outlined" startIcon={<AppleIcon />}>
                    {t('Download iOS App')}
                  </StyledButton>
                </Link>
                {/* </ScrollLink> */}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Sertificate badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: { xs: 0, md: -60 },
                boxShadow: 1,
                borderRadius: 3,
                px: 3,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 35,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: 'secondary.main', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}
                >
                  Jorge Carrasco
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
                  {t('Parallel Bible by Jorge Carrasco')}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <Image src="/images/home-face.png" width={775} height={787} alt="Hero img" />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box
          sx={{
            boxShadow: 3,
            py: 4,
            px: 7,
            borderRadius: 4,
            borderWidth: '4px',
            borderStyle: 'dashed',
            borderColor: '#127C71',
            marginTop: '50px',
          }}
        >
          <Grid container spacing={2} columns={15} padding={'20px 0px 20px 0px'}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={15} md={3}>
                <Link href={`${item.link}`} target="_blank">
                  <ExpItem item={item} />
                </Link>
              </Grid>
            ))}
            {/* <Grid item xs={15} md={3}>
              <Link href={`${exps[0].link}`} target="_blank">
                <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0, boxShadow: 3 } }}>
                  <Image src={exps[0].value} width={150} height={70} alt={exps[0].label} />
                  <Typography color="text.secondary" variant="h5">
                    {exps[0].label}
                  </Typography>
                </Box>
              </Link>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero
