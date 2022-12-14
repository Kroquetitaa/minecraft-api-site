import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('Hola')) {
      actions.handleHello();
    }
    if (message.includes('Si')) {
      actions.handleYes();
    }
    if (message.includes('No')) {
      actions.handleNo();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
