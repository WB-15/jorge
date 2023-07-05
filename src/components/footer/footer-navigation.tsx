import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
// import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation> = [
  {
    label: 'Google Play',
    path: 'https://play.google.com/store/apps/details?id=com.jccorporation.bibliaparalela',
  },
  {
    label: 'App Store',
    path: 'https://apps.apple.com/us/app/parallel-bible-books/id1641349485',
  },
  {
    label: 'Google Play Books',
    path: 'https://play.google.com/store/search?q=Jorge%20Carrasco%20Bible&c=books&hl=es',
  },
  {
    label: 'Barnes & Noble Books',
    path: 'https://www.barnesandnoble.com/s/Jorge%20Carrasco%20Parallel%20Bible/_/N-w',
  },
  {
    label: 'iBooks Store',
    path: 'http://books.apple.com/us/book/id1596561780',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: 'contact' },
  { label: 'Privacy & Policy', path: 'privacy' },
  { label: 'Translations Disclaimer', path: 'translations' },
]

// interface NavigationItemProps {
//   label: string
//   path: string
// }

// const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
//   return (
//     <Link href={`/${path}`} passHref>
//       <MuiLink
//         underline="hover"
//         sx={{
//           display: 'block',
//           mb: 1,
//           color: 'primary.contrastText',
//         }}
//       >
//         {label}
//       </MuiLink>
//     </Link>
//   )
// }

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Books Services" />
        {courseMenu.map(({ label, path }, index) => (
          // <NavigationItem key={index + path} label={label} path={path} />
          <Link key={index} href={path} passHref>
            <a
              target="_blank"
              className="link-text"
              style={{ color: 'inherit', display: 'block', marginBottom: '8px' }}
            >
              {label}
            </a>
          </Link>
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          // <NavigationItem key={index + path} label={label} path={path} />
          <Link key={index} href={`/#${path}`} passHref>
            <a className="link-text" style={{ color: 'inherit', display: 'block', marginBottom: '8px' }}>
              {label}
            </a>
          </Link>
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          // <NavigationItem key={index + path} label={label} path={path} />
          <Link key={index} href={`/#${path}`} passHref>
            <a className="link-text" style={{ color: 'inherit', display: 'block', marginBottom: '8px' }}>
              {label}
            </a>
          </Link>
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
