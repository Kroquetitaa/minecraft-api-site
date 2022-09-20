import PagesLayout from '@components/PagesLayout';
import { Item } from '@interfaces/Item.interface';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticProps } from './versions';
import {
  TemplateDiv,
  TemplateDivGeneral,
  TemplateImage,
} from '@styles/StylesItems';
import Link from 'next/link';

export const getServerSideProps: GetStaticProps = async () => {
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

  return (
    <PagesLayout title={title}>
      <TemplateDivGeneral>
        {results.map((results: Item) => (
          <TemplateDiv key={results.id}>
            <TemplateImage src={results.imageItem} width={50} height={50} />
            <div>
              <Link href={`/items/${results.minecraftIDName}`}>
                <h3>{results.minecraftName}</h3>
              </Link>
            </div>
          </TemplateDiv>
        ))}
      </TemplateDivGeneral>
    </PagesLayout>
  );
};

export default items;
