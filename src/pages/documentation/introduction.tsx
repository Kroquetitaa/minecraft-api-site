import PagesLayout from '@components/PagesLayout';
import {
  TemplateGridTwo,
  TemplateGrid,
  TemplateGridOne,
} from '@styles/StylesDocs';
import TemplateMenu from '@templates/TemplateMenu';
import IntroductionDetail from 'containers/IntroductionDetail';

const Introduction = () => {
  return (
    <PagesLayout title="Introduction">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <IntroductionDetail />
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default Introduction;
