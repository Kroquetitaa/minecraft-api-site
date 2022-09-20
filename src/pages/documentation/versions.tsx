import PagesLayout from '@components/PagesLayout';
import {
  TemplateGridTwo,
  TemplateGrid,
  TemplateGridOne,
} from '@styles/StylesDocs';
import TemplateMenu from '@templates/TemplateMenu';
import VersionsDetail from 'containers/VersionsDetail';
const Versions = () => {
  return (
    <PagesLayout title="Versions">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <VersionsDetail />
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default Versions;
