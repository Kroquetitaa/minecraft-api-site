import {
  TemplateDiv,
  Buttons,
  TemplateDivOne,
  TemplateDivTwo,
} from '@styles/StyleHome';
import DataItems from 'containers/DataItems';
import React, { useState } from 'react';
import logo from '@logos/logo.png';
import Image from 'next/image';

const ComponentHome = () => {
  const [showCard, setShowCard] = useState(false);
  const clickEvent = () => {
    
    showCard === true ? setShowCard(false) : setShowCard(true);
  };
  return (
    <TemplateDiv>
      <TemplateDivOne>
        <Buttons type="button" onClick={() => clickEvent()}>
          Versions
        </Buttons>
        <Buttons  type="button" onClick={() => clickEvent()}>
          Items
        </Buttons>
        <Buttons onClick={() => clickEvent()}>
          Games
        </Buttons>
        <Buttons onClick={() => clickEvent()}>
          Characters
        </Buttons>
      </TemplateDivOne>
      <TemplateDivTwo>
        <Image src={logo} width={512} height={64} />
        {showCard ? <DataItems /> : <h3>Selecciona un input . . .</h3>}
      </TemplateDivTwo>
    </TemplateDiv>
  );
};
export default ComponentHome;
