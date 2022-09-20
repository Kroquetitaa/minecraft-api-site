import TemplateMenu from '@templates/TemplateMenu';
import PagesLayout from '@components/PagesLayout';
import {
  TemplateGrid,
  TemplateGridOne,
  TemplateGridTwo,
} from '@styles/StylesDocs';

const documentation = () => {
  const title: string = 'Documentation';
  return (
    <PagesLayout title={title}>
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default documentation;
