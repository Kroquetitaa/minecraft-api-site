import PagesLayout from '@components/PagesLayout';
import {
  TemplateGridTwo,
  TemplateGrid,
  TemplateGridOne,
} from '@styles/StylesDocs';
import TemplateMenu from '@templates/TemplateMenu';
import ItemDetail from 'containers/ItemsDetail';

const Items = () => {
  return (
    <PagesLayout title="Introduction">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <ItemDetail />
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default Items;
