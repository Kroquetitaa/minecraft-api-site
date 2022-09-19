import Head from 'next/head';
import TemplateHeader from '@templates/TemplateHeader';
import TemplateFooter from '@templates/TemplateFooter';

interface Props {
  title: Title;
  children: JSX.Element;
}

type Title = string | string[];

const PagesLayout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="minecraft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TemplateHeader />
      {children}
      <TemplateFooter />
    </>
  );
};

export default PagesLayout;

