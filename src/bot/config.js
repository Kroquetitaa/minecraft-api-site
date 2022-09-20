// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Kroquetita';

const config = {
  initialMessages: [createChatBotMessage(`Hola, me llamo ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;