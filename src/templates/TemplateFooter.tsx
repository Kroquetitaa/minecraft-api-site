import {
  TemplateUl,
  TemplateLi,
  TemplateParagraph,
} from '@styles/StylesFooter';

const TemplateFooter = () => {
  return (
    <TemplateUl color="#1e2b36">
      <TemplateLi>
        <TemplateParagraph>Minecraft-API</TemplateParagraph>
      </TemplateLi>
      <TemplateLi>
        <TemplateParagraph>
          Items: {0} Characters: {0} Games: {0}
        </TemplateParagraph>
      </TemplateLi>
      <TemplateLi>
        <TemplateParagraph>Kroquetita-2022</TemplateParagraph>
      </TemplateLi>
    </TemplateUl>
  );
};

export default TemplateFooter;
