import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/versions';
import Image from 'next/image';
import { TemplateDiv, TemplateDivSpecified, TemplateImage} from '@styles/StylesDataID';
import PagesLayout from '@components/PagesLayout';

const Items = ({ result }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(result);
  return (
    <PagesLayout title={result[0].minecraftIDName}>
      <TemplateDiv>
        <TemplateDivSpecified>
          <h2>
            Ingles: {result[0].nameItem.nameItemEnglish} - Español:{' '}
            {result[0].nameItem.nameItemSpanish}
          </h2>
          <TemplateImage src={result[0].imageItem} width={50} height={50} />
          <p>
            <strong>item: </strong> {result[0].item} - <strong>ID: </strong>
            {result[0].id}
          </p>
          <p>
            <strong>Rareza: </strong>Ingles:{' '}
            {result[0].rarityColor.rarityColorEnglish} - Español:{' '}
            {result[0].rarityColor.rarityColorSpanish}
          </p>
          <p>
            <strong>MinecraftName: </strong> {result[0].minecraftName}
          </p>
          <p>
            <strong>MinecraftIDName: </strong> {result[0].minecraftIDName}
          </p>
          <p>
            <strong>MinecraftID: </strong> {result[0].minecraftID}
          </p>
          <p>
            <strong>minecraftDataValue: </strong> {result[0].minecraftDataValue}
          </p>
          <p>
            <strong>flamableItem: </strong>{' '}
            {result[0].flamableItem === true ? 'Yes' : 'No'}
          </p>

          <p>
            <strong>Stack: </strong> {result[0].stack}
          </p>
        </TemplateDivSpecified>
      </TemplateDiv>
    </PagesLayout>
  );
};

export default Items;

export const getServerSideProps: GetStaticProps = async ({
  params,
}: undefined | any) => {
  const urlItems: string = `http://localhost:8080/api/items/idname/${params.id}`;
  const response = await fetch(urlItems);
  const { result } = await response.json();
  return {
    props: {
      result,
    },
  };
};
