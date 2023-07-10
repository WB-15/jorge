import axios from 'axios'
import { useState, useEffect, FC, useRef } from 'react'
import { Box, Grid, Avatar, Typography, TextField, styled, Divider } from '@mui/material'
import { URL } from '../../constants/url'

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

  const scrollToBottom = (): void => {
    const nestedElement = document.getElementById('chatBox')
    if (nestedElement) {
      nestedElement.scrollTo(0, nestedElement.scrollHeight)
    }
  }

  const handleKeyPress = async (event: any): Promise<void> => {
    if (event.key === 'Enter') {
      setLoading(true)
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
      axios
        .post(`${URL.baseAPIUrl}/apis/chatbot/chat`, { message: userMsg })
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
  }

  const handleInputChange = (e: any): void => {
    setUserMsg(e.target.value)
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
        <Typography style={{ fontSize: '1.1rem', color: '#111' }}>Prallel Bible Books</Typography>
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
                👋 Hi! I am Parallel Bible Books Chatbot, ask me anything about Parallel Bible Books!
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
                    <Typography fontSize={'1rem'}>Loading...</Typography>
                  </Box>
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
          id="userMsg"
          value={userMsg}
          style={{ width: '100%' }}
          variant="standard"
          placeholder="Write your message here..."
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
          disabled={loading}
        />
      </Box>
    </Box>
  )
}

export default ChatbotWindow