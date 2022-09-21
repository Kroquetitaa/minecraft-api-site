import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      'Hola, ¿te gustaria aprender unos trucos de minecraft?',
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleYes = () => {
    const botMessage = createChatBotMessage(
      'Genial! Entonces te comentaré alguno que otro divertido 😃',
    );
    const botMessage2 = createChatBotMessage(
      'Sabias que en minecraft hay multitud de formas de recoger items por comandos',
      {
        delay: 2000,
        withAvatar: true,
      },
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleNo = () => {
    const botMessage = createChatBotMessage(
      'Vaya! Espero no haberte molestado. . . 🥲',
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleYes,
            handleNo,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
