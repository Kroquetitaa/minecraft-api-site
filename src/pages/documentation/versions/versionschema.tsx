import PagesLayout from '@components/PagesLayout';
import React from 'react';

import {
    TemplateDiv,
    TemplateH3,
    TemplateParagraph,
    TemplateDivCard,
    TemplateDivCircles,
    TemplateRedCircle,
    TemplateOrangeCircle,
    TemplateGreenCircle,
    TemplateUrl,
    TemplatePetition,
    TemplateTr,
    TemplateTd,
    TemplateIdTitles,
    TemplateSpan,
  } from '@styles/StylesIntroductionDetail';
import {
  TemplateGridTwo,
  TemplateGrid,
  TemplateGridOne,
} from '@styles/StylesDocs';
import TemplateMenu from '@templates/TemplateMenu';

const versionschema = () => {
  return (
    <PagesLayout title="version-schema">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <TemplateDiv>
            <TemplateH3>Schema versions</TemplateH3>
            <table>
              <tbody>
                <TemplateTr>
                  <TemplateIdTitles>Key</TemplateIdTitles>
                  <TemplateIdTitles>Type</TemplateIdTitles>
                  <TemplateIdTitles>Description</TemplateIdTitles>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>versions</TemplateTd>
                  <TemplateTd>string</TemplateTd>
                  <TemplateTd>The version of minecraft</TemplateTd>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>items</TemplateTd>
                  <TemplateTd>array</TemplateTd>
                  <TemplateTd>All items of this version</TemplateTd>
                </TemplateTr>
              </tbody>
            </table>
          </TemplateDiv>
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default versionschema;
