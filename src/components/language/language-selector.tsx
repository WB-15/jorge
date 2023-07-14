import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { FC } from 'react'
import { useLanguageContext } from 'src/context/languageContext'

const Language: FC = () => {
  const { t, i18n, languages, onClickLanguageChange } = useLanguageContext()
  const [lang, setLang] = useState(i18n.language)
  const handleChange = (e: any): void => {
    onClickLanguageChange(e)
    setLang(e.target.value)
  }

  return (
    <FormControl sx={{ width: '120px' }} size="small">
      <InputLabel id="demo-simple-select-label">{t('Language')}</InputLabel>
      <Select id="language-selector" value={lang} label={t('Language')} onChange={handleChange} defaultValue={lang}>
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
