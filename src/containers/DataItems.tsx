import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/games';
import ReactJson from 'react-json-view';
import { Item } from '@interfaces/Item.interface';

export const getServerSideProps: GetStaticProps = async () => {
  const urlItems: string = 'http://localhost:8080/api/items/id/447';
  const response = await fetch(urlItems);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
};

const DataItems = ({
  results
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
  return (
    <ReactJson
      src={data}
      iconStyle="square"
      displayObjectSize={true}
      displayDataTypes={true}
      name="results"
      sortKeys={false}
      quotesOnKeys={false}
    />
  );
};

export default DataItems;
