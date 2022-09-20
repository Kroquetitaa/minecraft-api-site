import PagesLayout from '@components/PagesLayout';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const urlCharacters: string = 'http://localhost:8080/api/characters/';
  const response = await fetch(urlCharacters);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
};

const characters = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(results);
  const title: string = 'Characters';

  return (
    <PagesLayout title={title}>
      <div>Characters</div>
    </PagesLayout>
  );
};

export default characters;
