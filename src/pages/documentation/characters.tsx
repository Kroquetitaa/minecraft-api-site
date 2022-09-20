import PagesLayout from '@components/PagesLayout';
import {
  TemplateGridTwo,
  TemplateGrid,
  TemplateGridOne,
} from '@styles/StylesDocs';
import TemplateMenu from '@templates/TemplateMenu';
import GamesDetail from 'containers/GamesDetail';

const Characters = () => {
  return (
    <PagesLayout title="Introduction">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <GamesDetail />
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default Characters;
