import {
  TemplateDiv,
  Buttons,
  TemplateDivOne,
  TemplateDivTwo,
  TemplateDivAbsolute,
} from '@styles/StyleHome';
import DataItems from 'containers/DataItems';
import React, { useState } from 'react';
import logo from '@logos/logo.png';
import Image from 'next/image';
import config from '../bot/config.js';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

const ComponentHome = () => {
  const [flag, setFlag] = useState(0);
  const clickEvent = (number: number) => {
    setFlag(number);
  };

  return (
    <TemplateDiv>
      <TemplateDivOne>
        <Buttons type="button" onClick={() => clickEvent(1)}>
          Versions
        </Buttons>
        <Buttons type="button" onClick={() => clickEvent(2)}>
          Items
        </Buttons>
        <Buttons onClick={() => clickEvent(3)}>Games</Buttons>
        <Buttons onClick={() => clickEvent(4)}>Characters</Buttons>
      </TemplateDivOne>
      <TemplateDivTwo>
        <Image src={logo} width={512} height={64} />
        {!flag ? (
          <h3>Selecciona un input . . .</h3>
        ) : (
          <DataItems value={flag} />
        )}
        <TemplateDivAbsolute>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            headerText='Kroquetita'
            placeholderText='Write anything'
          />
        </TemplateDivAbsolute>
      </TemplateDivTwo>
    </TemplateDiv>
  );
};
export default ComponentHome;
