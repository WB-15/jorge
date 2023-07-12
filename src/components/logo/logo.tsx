import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useLanguageContext } from '@/context/languageContext'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  const { t } = useLanguageContext()
  return (
    <Box onClick={onClick}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        <span>{t('Paralle')}</span>
        <span>&nbsp;{t('Bible')}</span>
        <span>&nbsp;{t('Books')}</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
