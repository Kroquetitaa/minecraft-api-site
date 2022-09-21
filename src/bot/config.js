
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Kroquetita';

const config = {
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1e2b36',
    },
    chatButton: {
      backgroundColor: '#1e2b36',
    },
  },
  initialMessages: [createChatBotMessage(`Hola, me llamo ${botName}`)],
};

export default config;
