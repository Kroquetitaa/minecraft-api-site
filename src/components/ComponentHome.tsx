import { TemplateDiv, Buttons } from '@styles/StyleHome';
// import { GetStaticProps, GetServerSideProps } from 'next';
// import { ParsedUrlQuery } from 'querystring';
import { Item } from 'interfaces/Item.interface';
import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';

const ComponentHome = () => {
  //   const [items, setItems] = useState([]);

  //   const itemsURL: string = 'http://localhost:8080/api/items/';

  //   const result = [];

  //   const peticionAPI = async () => {
  //     const res = await fetch(itemsURL);
  //     const convertToJSON = await res.json();
  //     const data = convertToJSON.results[0];
  //     result.push(data)
  //   };

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
    console.log('click')
  }


  return (
    <TemplateDiv>
      <Buttons type="button" onClick={ () => clickEvent()}>
        Versions
      </Buttons>
      <Buttons type="button">Items</Buttons>
      <Buttons type="button">Games</Buttons>
      <Buttons type="button">Characters</Buttons>
    </TemplateDiv>
  );
};
export default ComponentHome;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('http://localhost:8080/api/items/');
//   const data: IndexPageProps = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       data,
//     },
//   };
// };
