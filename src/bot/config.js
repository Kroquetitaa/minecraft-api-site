// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Kroquetita';

const config = {
  initialMessages: [createChatBotMessage(`Hola, me llamo ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1e2b36',
    },
    chatButton: {
      backgroundColor: '#1e2b36',
    },
  },
};

export default config;