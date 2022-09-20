import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/characters';
// import { getStaticProps } from 'pages/versions';


const Items = ({result}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <p>a</p>
    // <p><ItemsDetail data={result[0]}</p>
  );
};

export default Items;

export const getServerSideProps: GetStaticProps = async ({params}: undefined | any) => {
  const urlItems: string = `http://localhost:8080/api/items/idname/${params.id}`;
  const response = await fetch(urlItems);
  const { result } = await response.json();
  return {
    props: {
      result,
    },
  };
};
