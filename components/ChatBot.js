import React from 'react'
import Chatbot from 'react-chatbot-kit';
import config from '../utility/chatbot/config';
import ActionProvider from '../utility/chatbot/ActionProvider';
import MessageParser from '../utility/chatbot/MessageParser';
// import AiOutlineRobot from 'react-icons/ai';
import 'react-chatbot-kit/build/main.css'
// import '..1/utility/chatbot/main.css'
// import styles from '@/styles/ChatBot.module.css'

const ChatBot = () => {
  return (
    <div className='z-40'>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
    </div>
  )
}

export default ChatBot