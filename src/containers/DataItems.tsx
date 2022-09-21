import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/versions';
import ReactJson from 'react-json-view';
import { Item } from '@interfaces/Item.interface';
import { Characters } from '@interfaces/Characters.interface';
import { Games } from '@interfaces/Games.interface';
import { Versions } from '@interfaces/Versions.interface';


const DataItems = ({
  value,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(value);

  const version: Versions = {
    version: 'Minecraft 1.10',
    items: [
      {
        item: 1,
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
      },
    ],
  };
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

  const game: Games = {
    id: 1,
    game: 'minecraft story Mode',
    price: 14.99,
    releaseData: 'data',
    image: 'imagen',
    titles: ['title1', 'title2'],
    description: 'description',
  };
  return (
    <>
      {value === 1 && (
        <div>
          <ReactJson
            src={version}
            iconStyle="square"
            displayObjectSize={true}
            displayDataTypes={true}
            name="results"
            sortKeys={false}
            quotesOnKeys={false}
          />
        </div>
      )}
      ;
      {value === 2 && (
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
      {value === 3 && (
        <ReactJson
          src={game}
          iconStyle="square"
          displayObjectSize={true}
          displayDataTypes={true}
          name="results"
          sortKeys={false}
          quotesOnKeys={false}
        />
      )}
      ;
      {value === 4 && (
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
    </>
  );
};

export default DataItems;
