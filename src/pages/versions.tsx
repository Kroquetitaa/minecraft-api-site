import PagesLayout from '@components/PagesLayout';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const urlVersions: string = 'http://localhost:8080/api/versions/';
  const response = await fetch(urlVersions);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
};

const versions = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(results);
  const title: string = 'Versions';
  return (
    <PagesLayout title={title}>
      <div>Versions</div>
    </PagesLayout>
  );
};

export default versions;
