import React from 'react';
import {
  TemplateSection,
  TemplateDivPrincipal,
  TemplateH1,
  TemplateParagraph,
  TemplateH3,
  TemplateA,
} from '@styles/StylesError';

const TemplateError = () => {
  return (
    <TemplateSection>
      <TemplateDivPrincipal>
        <TemplateH1>404</TemplateH1>
      <TemplateH3>¿Te has perdido?</TemplateH3>

      <TemplateParagraph>
        la pagina que buscas no esta disponible!
      </TemplateParagraph>

      <TemplateA href="/">Vuelve a home</TemplateA>
      </TemplateDivPrincipal>
    </TemplateSection>
  );
};

export default TemplateError;
