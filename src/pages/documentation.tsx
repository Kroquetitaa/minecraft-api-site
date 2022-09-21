import TemplateMenu from '@templates/TemplateMenu';
import PagesLayout from '@components/PagesLayout';
import {
  TemplateGrid,
  TemplateGridOne,
  TemplateGridTwo,
  TemplateMensaje,
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
          <TemplateMensaje>
            <h3>
              Selecciona cualquier enlance del menú para buscar información
              sobre la API
            </h3>
          </TemplateMensaje>
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default documentation;
