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
    <PagesLayout title={result.minecraftIDName}>
      <TemplateDiv>
        <TemplateDivSpecified>
          <h2>
            Ingles: {result.nameItem.nameItemEnglish} - Español:{' '}
            {result.nameItem.nameItemSpanish}
          </h2>
          <TemplateImage src={result.imageItem} width={50} height={50} />
          <p>
            <strong>item: </strong> {result.item} - <strong>ID: </strong>
            {result.id}
          </p>
          <p>
            <strong>Rareza: </strong>Ingles:{' '}
            {result.rarityColor.rarityColorEnglish} - Español:{' '}
            {result.rarityColor.rarityColorSpanish}
          </p>
          <p>
            <strong>MinecraftName: </strong> {result.minecraftName}
          </p>
          <p>
            <strong>MinecraftIDName: </strong> {result.minecraftIDName}
          </p>
          <p>
            <strong>MinecraftID: </strong> {result.minecraftID}
          </p>
          <p>
            <strong>minecraftDataValue: </strong> {result.minecraftDataValue}
          </p>
          <p>
            <strong>flamableItem: </strong>{' '}
            {result.flamableItem === true ? 'Yes' : 'No'}
          </p>

          <p>
            <strong>Stack: </strong> {result.stack}
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
