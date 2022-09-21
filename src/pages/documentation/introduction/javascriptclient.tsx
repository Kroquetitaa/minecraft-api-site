import PagesLayout from '@components/PagesLayout';
import React from 'react';
import ReactJson from 'react-json-view';
import { AllPaths } from '@interfaces/AllPaths.interface';
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
} from '@styles/StylesIntroductionDetail';
import {
  TemplateGridTwo,
  TemplateGrid,
  TemplateGridOne,
} from '@styles/StylesDocs';
import TemplateMenu from '@templates/TemplateMenu';

const javascriptclient = () => {
  return (
    <PagesLayout title="rest">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <TemplateDiv>
            <TemplateH3>JavaScript Client</TemplateH3>
            <TemplateParagraph>
              The Minecraft-API JavaScript client is a fully typed client that
              gives you access to the API and its features.
            </TemplateParagraph>
          </TemplateDiv>
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default javascriptclient;
