import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { FC } from 'react'
import { languageType } from './language.data'
import { useLanguageContext } from 'src/context/languageContext'

const Language: FC = () => {
  const { t, languages, onClickLanguageChange } = useLanguageContext()
  const [lang, setLang] = useState('')
  const handleChange = (e: any): void => {
    onClickLanguageChange(e)
    setLang(e.target.value)
  }
  return (
    <FormControl sx={{ width: '120px' }} size="small">
      <InputLabel id="demo-simple-select-label">{t('Language')}</InputLabel>
      <Select id="language-selector" value={lang} label={t('Language')} onChange={handleChange}>
        {Object.keys(languages).map((lang: any) => (
          <MenuItem key={languages[lang].nativeName} value={lang}>
            {languages[lang].nativeName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Language
