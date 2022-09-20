import PagesLayout from '@components/PagesLayout';
import { Item } from '@interfaces/Item.interface';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const urlItems: string = 'http://localhost:8080/api/items/';
  const response = await fetch(urlItems);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
};

const items = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title: string = 'Items';
  console.log(results.map((value: Item) => value.id));
  return (
    <PagesLayout title={title}>
      <div>
        {results.map((value: Item) => {
          <div>
            <h2>{value.id}</h2>
            <p>{}</p>
          </div>;
        })}
      </div>
    </PagesLayout>
  );
};

export default items;
