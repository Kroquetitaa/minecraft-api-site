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

const res = () => {
  const data: AllPaths = {
    versions: 'https://minecraft-api.com/api/versions/',
    items: 'https://minecraft-api.com/api/items/',
    games: 'https://minecraft-api.com/api/games/',
    characters: 'https://minecraft-api.com/api/characters/',
  };
  return (
    <PagesLayout title="rest">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <TemplateDiv>
            <TemplateH3>REST</TemplateH3>
            <TemplateParagraph>
              URL Base: https://minecraft-api.com/api
            </TemplateParagraph>
            <TemplateParagraph>
              The base URL contains information about all API resources
              available. All requests are GET requests. All responses will
              return data in json format.
            </TemplateParagraph>
            <TemplateDivCard>
              <TemplateDivCircles>
                <TemplateRedCircle></TemplateRedCircle>
                <TemplateOrangeCircle></TemplateOrangeCircle>
                <TemplateGreenCircle></TemplateGreenCircle>
                <TemplateUrl>https://minecraft-api.com/api</TemplateUrl>
                <TemplatePetition>GET</TemplatePetition>
              </TemplateDivCircles>
              <ReactJson
                src={data}
                iconStyle="square"
                displayObjectSize={true}
                displayDataTypes={true}
                name="results"
                sortKeys={false}
                quotesOnKeys={false}
                //theme="apathy:inverted"
              />
            </TemplateDivCard>
          </TemplateDiv>
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default res;
