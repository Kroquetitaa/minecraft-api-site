import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/games';
import React from 'react';

export const getServerSideProps: GetStaticProps = async () => {
  //   const urls = [
  //     'http://localhost:8080/api/items/id/447',
  //     'http://localhost:8080/api/versions/Minecraft 1.10',
  //     'http://localhost:8080/api/games/gameid/1',
  //     'http://localhost:8080/api/characters/Steve',
  //   ];
  //   for (let i = 0; i < urls.length; i++) {
  //     console.log(urls[i]);
  //     const response = await fetch(urls[i]);
  //     const result = await response.json();
  //   }
  const urlItems: string = 'http://localhost:8080/api/items/id/447';

  const response = await fetch(urlItems);
  const { result } = await response.json();

  return {
    props: {
      result,
    },
  };
};

const CharactersValuesDetail = ({
  result,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div></div>;
};

export default CharactersValuesDetail;
