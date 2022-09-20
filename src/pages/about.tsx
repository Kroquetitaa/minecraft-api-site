import About from '@components/About';
import PagesLayout from '@components/PagesLayout';

const documentation = () => {
  const title: string = 'Documentation';
  return (
    <PagesLayout title={title}>
      <About />
    </PagesLayout>
  );
};

export default documentation;