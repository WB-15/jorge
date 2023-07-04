import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import AndroidIcon from '@mui/icons-material/Android'
import AppleIcon from '@mui/icons-material/Apple'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Android App',
    description: 'Click To Download',
    icon: <AndroidIcon />,
  },
  {
    title: 'iOS / Apple App',
    description: 'Click To Download',
    icon: <AppleIcon />,
  },
  // {
  //   title: 'Flexible Study Time',
  //   description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  //   icon: <LocalLibraryIcon />,
  // },
  // {
  //   title: 'Consultation With Mentor',
  //   description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  //   icon: <ContactSupportIcon />,
  // },
]
