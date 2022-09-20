import ComponentDocs from '@components/ComponentDocs';
import PagesLayout from '@components/PagesLayout';

const documentation = () => {
  const title: string = 'Documentation';
  return (
    <PagesLayout title={title}>
      <ComponentDocs />
    </PagesLayout>
  );
};

export default documentation;
