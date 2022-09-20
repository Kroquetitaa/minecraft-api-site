import PagesLayout from '@components/PagesLayout';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const urlGames: string = 'http://localhost:8080/api/games/';
  const response = await fetch(urlGames);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
};

const games = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(results);
  const title: string = 'Games';
  return (
    <PagesLayout title={title}>
      <div>games</div>
    </PagesLayout>
  );
};

export default games;
