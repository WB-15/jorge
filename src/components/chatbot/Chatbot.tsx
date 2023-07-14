import { useState, useEffect, FC, useRef } from 'react'

import { Box, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import ChatbotWindow from './ChatbotWindow'
import { Transition } from 'react-transition-group'
import { useLanguageContext } from '@/context/languageContext'

let num = 0

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '400px',
    height: '600px',
    position: 'fixed',
    right: '10px',
    bottom: '100px',
    padding: '0px 10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '80%',
    position: 'fixed',
    bottom: '100px',
    padding: '0px 10px',
  },
}))

const Chatbot: FC = () => {
  const [showBox, setShowBox] = useState(false)
  const [showMsg, setShowMsg] = useState(false)
  const [windowFlag, setWindonwFlag] = useState(false)
  const { t } = useLanguageContext()

  const showChatWindow = (): void => {
    num++
    if (num == 1) {
      setShowMsg(!showMsg)
    }
    setWindonwFlag(!windowFlag)
    setShowBox(!showBox)
  }

  const yourNodeRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMsg(true)
    }, 2000) // Adjust the delay (in milliseconds) as needed

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const duration = 300 // Duration of the transition animation

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: {}, // Add "unmounted" key with an empty object 
  }

  return (
    <>
      <Transition in={showBox} timeout={duration} nodeRef={yourNodeRef}>
        {(state) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state], width: '100%', height: '100%' }}>
            {state !== 'exited' && (
              <StyledBox style={{ zIndex: '999' }}>
                <ChatbotWindow />
              </StyledBox>
            )}
          </div>
        )}
      </Transition>
      <Box style={{ position: 'fixed', right: '0px', bottom: '0px', zIndex: '999' }}>
        <Image src={'/images/chatbot.svg'} width={'90px'} height={'90px'} alt={'ChatBot'} onClick={showChatWindow} />
      </Box>
      <Transition in={showMsg} timeout={duration} nodeRef={yourNodeRef}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
              right: '25px',
              bottom: '80px',
              display: 'flex',
              position: 'fixed',
              alignItems: 'start',
              justifyContent: 'end',
            }}
          >
            {state !== 'exited' && <Typography fontSize={'1.8rem'}>👋 {t('Hi')}!</Typography>}
          </div>
        )}
      </Transition>
    </>
  )
}

export default Chatbot
