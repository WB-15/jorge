import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const HomePrivacy: FC = () => {
  const url1 = 'https://parallelbibleapp/home'
  const url2 = 'https://sites.google.com/view/parallelbibleapp/multilingual-privacy-policy/privacy-policy?authuser=0'
  return (
    <Box id="privacy" sx={{ backgroundColor: '#ecf3f3', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box>
          <Typography
            fontSize={30}
            fontWeight={'bold'}
            sx={{ paddingBottom: '20px', display: 'flex', justifyContent: 'center' }}
          >
            Privacy & Policy
          </Typography>
          <Typography
            fontSize={'1.1rem'}
            color={'grey'}
            style={{ padding: '0px 20px 0px 20px', wordBreak: 'break-all' }}
          >
            Free Parallel Bible en english and spanish Now , #parallelbiblejorge, #bibliaparalelajorge <br />
            <br />
            1- Privacy policy
            <br /> 2- Jc Workforce Training Center Corporation Organization Mobile App Terms of Service
            <br /> 3- Mobile Terms of Use
            <br /> 4- Translation Disclaimer Privacy policy for my applications Biblia Paralela Libros, Parallel Bible
            Books Android and Apple as mentioned here in this link Biblia Paralela Libros Or Parallel Bible Books will
            be named as follows Biblia Paralela 1 or Biblia Paralela
            <br />
            <br /> For Al Terms And Conditions Reference to our App Parallel Bible Books On different languages, please
            follow the link: on the multilingual Privacy Policy Area
            <br />
            <br />
            {`${url1}`}
            <br /> 1- Privacy policy
            <br /> 2- Jc Workforce Training Center Corporation Organization Mobile App Terms of Service
            <br /> 3- Mobile Terms of Use
            <br /> 4- Translation Disclaimer
            <br /> Privacy policy for my applications Biblia Paralela Libros, Parallel Bible Books Android and Apple as
            mentioned here in this link Biblia Paralela Libros Or Parallel Bible Books will be named as follows Biblia
            Paralela 1 or Biblia Paralela
            <br />
            <br />
            For Al Terms And Conditions Reference to our App Parallel Bible Books On different languages, please follow
            the link: on the multilingual Privacy Policy Area
            <br />
            <br />
            {`${url2}`}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePrivacy
