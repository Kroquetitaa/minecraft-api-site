import type { NextPage } from 'next';
import ComponentIndex from '@components/ComponentIndex';
import Head from 'next/head';

const Home: NextPage = () => {
  const title: string = 'Minecraft-API';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="minecraft" />
      </Head>
      <ComponentIndex />
    </>
  );
};

export default Home;
