import { TemplateDiv, Buttons } from '@styles/StyleHome';
import CharactersSchemaDetail from 'containers/CharactersSchemaDetail';
// import { GetStaticProps, GetServerSideProps } from 'next';
// import { ParsedUrlQuery } from 'querystring';
import { Item } from 'interfaces/Item.interface';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { findDOMNode } from 'react-dom';
import ReactJson from 'react-json-view';

const ComponentHome = () => {
  const [showCard, setShowCard] = useState(false);
  const data: Item = {
    id: 5,
    item: '163:0',
    stack: 64,
    minecraftID: 163,
    minecraftDataValue: 0,
    flamableItem: true,
    minecraftIDName: 'minecraft:acacia_stairs',
    minecraftName: 'Acacia Stairs',
    imageItem:
      'https://res.cloudinary.com/kroquetita/image/upload/v1663397789/dev/acacia_wood_stairs.png.png',
    nameItem: {
      nameItemSpanish: 'Escaleras de madera de acacia',
      nameItemEnglish: 'Acacia Stairs',
    },
    rarityColor: {
      rarityColorSpanish: 'comun',
      rarityColorEnglish: 'common',
    },
  };

  {
    /* <ReactJson
    src={data}
    iconStyle="square"
    displayObjectSize={true}
    displayDataTypes={true}
    name="results"
    sortKeys={false}
    quotesOnKeys={false}
  /> */
  }

  const clickEvent = () => {
    showCard === true ? setShowCard(false) : setShowCard(true);
  };

  return (
    <TemplateDiv>
      <Buttons type="button" onClick={() => clickEvent()}>
        Versions
      </Buttons>
      {showCard && <CharactersSchemaDetail />}
      <Buttons type="button">Items</Buttons>
      <Buttons type="button">Games</Buttons>
      <Buttons type="button">Characters</Buttons>
    </TemplateDiv>
  );
};
export default ComponentHome;
