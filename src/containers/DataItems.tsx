import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/versions';
import ReactJson from 'react-json-view';
import { Item } from '@interfaces/Item.interface';
import { Characters } from '@interfaces/Characters.interface';

const DataItems = ({
  value,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log( value )
  const item: Item = {
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

  const character: Characters = {
    name: 'steve',
    healthPoints: 1,
    image: 'imagen',
    attackStrength: 20,
    hitboxSize: [
      {
        mode: 'normal',
        hitboxWidth: {
          hitboxSpanish: 'spanish',
          hitboxEnglish: 'english',
        },
        hitboxHeight: {
          hitboxEnglish: 'english',
          hitboxSpanish: 'spanish',
        },
      },
    ],
  };
  return (
    <>
      {value === 1 && (
        <ReactJson
          src={item}
          iconStyle="square"
          displayObjectSize={true}
          displayDataTypes={true}
          name="results"
          sortKeys={false}
          quotesOnKeys={false}
        />
      )}
      ;
      {value === 2 && (
        <ReactJson
          src={character}
          iconStyle="square"
          displayObjectSize={true}
          displayDataTypes={true}
          name="results"
          sortKeys={false}
          quotesOnKeys={false}
        />
      )}
      ;
      {/* {flag === 3 && (
        <ReactJson
          src={data}
          iconStyle="square"
          displayObjectSize={true}
          displayDataTypes={true}
          name="results"
          sortKeys={false}
          quotesOnKeys={false}
        />
      )}
      ;
      {flag === 4 && (
        <ReactJson
          src={data}
          iconStyle="square"
          displayObjectSize={true}
          displayDataTypes={true}
          name="results"
          sortKeys={false}
          quotesOnKeys={false}
        />
      )} */}
      ;
    </>
  );
};

export default DataItems;
