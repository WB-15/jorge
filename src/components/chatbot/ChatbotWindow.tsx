import axios from 'axios'
import { useState, useEffect, FC, useRef } from 'react'
import { Box, Grid, Avatar, Typography, TextField, styled, Divider } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import SendIcon from '@mui/icons-material/Send'
import { URL } from '../../constants/url'
import { useLanguageContext } from '@/context/languageContext'

const arr = [
  {
    client: {
      msg: '',
    },
    bot: {
      msg: '',
    },
  },
]
let chatNum = 0

const ChatbotWindow: FC = () => {
  const [chat, setChat] = useState(arr)
  const [userMsg, setUserMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const { t, i18n } = useLanguageContext()

  const scrollToBottom = (): void => {
    const nestedElement = document.getElementById('chatBox')
    if (nestedElement) {
      nestedElement.scrollTo(0, nestedElement.scrollHeight)
    }
  }

  const handleKeyPress = async (event: any): Promise<void> => {
    if (event.key === 'Enter' && userMsg.length != 0) {
      handleSubmit()
    }
  }

  const handleInputChange = (e: any): void => {
    setUserMsg(e.target.value)
  }

  const handleSubmit = (): void => {
    if (userMsg.length != 0) setLoading(true)
    chatNum++
    arr.push({
      client: {
        msg: `${userMsg}`,
      },
      bot: {
        msg: '',
      },
    })
    setChat(arr)
    scrollToBottom()
    axios
      // .post(`${URL.baseAPIUrl}/apis/chatbot/chat`, { message: userMsg, language: i18n.language })
      .post(`/api/chat`, { message: userMsg, language: i18n.language })
      .then((res) => {
        arr[chatNum].bot.msg = res.data.text
        setChat(arr)
        setLoading(false)
        scrollToBottom()
      })
      .catch((err) => {
        console.log('ERR', err)
      })
    setUserMsg('')
  }

  return (
    <Box
      style={{ width: '100%', height: '100%' }}
      sx={{
        borderRadius: '10px',
        borderStyle: 'solid',
        borderColor: '#127C71',
        padding: '10px',
        backgroundColor: '#fff',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', height: '10%' }}>
        <Avatar alt="Remy Sharp" src="/images/chatbot.svg" sx={{ width: 40, height: 40 }} />
        <Typography style={{ fontSize: '1.1rem', color: '#111' }}>{t('Parallel Bible Books')}</Typography>
      </Box>
      <Divider sx={{ width: '98%' }} />
      <Box id="chatBox" sx={{ height: '80%', padding: '10px 5px 10px 5px', overflow: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                height: 'fit-content',
                width: 'fit-content',
                backgroundColor: '#bbb',
                borderRadius: '5px',
                marginBottom: '10px',
                padding: '2px 6px 2px 6px',
              }}
            >
              <Typography fontSize={'1rem'}>
                👋 {t('Hi')}! {t('I am Parallel Bible Books Chatbot, ask me anything about Parallel Bible Books!')}
              </Typography>
            </Box>
          </Box>
        </Box>
        {chat.map((message, index) => {
          return (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                {message.client.msg.length == 0 ? (
                  <></>
                ) : (
                  <Box
                    sx={{
                      height: 'fit-content',
                      width: 'fit-content',
                      backgroundColor: '#eee',
                      borderRadius: '5px',
                      marginBottom: '10px',
                      padding: '2px 6px 2px 6px',
                    }}
                  >
                    <Typography fontSize={'1rem'}>{message.client.msg}</Typography>
                  </Box>
                )}
              </Box>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
                {message.client.msg.length == 0 && message.bot.msg.length == 0 ? (
                  <></>
                ) : message.client.msg.length != 0 && message.bot.msg.length == 0 ? (
                  <div className="snippet" data-title="dot-flashing">
                    <div className="stage">
                      <div className="dot-flashing"></div>
                    </div>
                  </div>
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      height: 'fit-content',
                      width: 'fit-content',
                      backgroundColor: '#bbb',
                      borderRadius: '5px',
                      marginBottom: '10px',
                      padding: '2px 6px 2px 6px',
                    }}
                  >
                    <Typography fontSize={'1rem'}>{message.bot.msg}</Typography>
                  </Box>
                )}
              </Box>
            </Box>
          )
        })}
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          height: '10%',
        }}
      >
        <TextField
          className="chatBotTextField"
          id="userMsg"
          value={userMsg}
          variant="standard"
          placeholder={t('Enter your message here...')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start" onClick={handleSubmit}>
                <SendIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
          disabled={loading}
        />
      </Box>
    </Box>
  )
}

export default ChatbotWindow
