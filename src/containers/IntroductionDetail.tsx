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

const IntroductionDetail = () => {
  const data: AllPaths = {
    versions: 'https://minecraft-api.com/api/versions/',
    items: 'https://minecraft-api.com/api/items/',
    games: 'https://minecraft-api.com/api/games/',
    characters: 'https://minecraft-api.com/api/characters/',
  };

  return (
    <TemplateDiv>
      <TemplateH3>INTRODUCCION</TemplateH3>
      <TemplateH3>Introduction</TemplateH3>
      <TemplateParagraph>
        This documentation will help you become familiar with the resources of
        the Minecraft API and will show you how to make different queries, for
        that you can make the most of it.
      </TemplateParagraph>
      <TemplateH3>REST</TemplateH3>
      <TemplateParagraph>
        URL Base: https://minecraft-api.com/api
      </TemplateParagraph>
      <TemplateParagraph>
        The base URL contains information about all API resources available. All
        requests are GET requests. All responses will return data in json
        format.
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
      <TemplateH3>JavaScript Client</TemplateH3>
      <TemplateParagraph>
        The Minecraft-API JavaScript client is a fully typed client that gives
        you access to the API and its features.
      </TemplateParagraph>
    </TemplateDiv>
  );
};

export default IntroductionDetail;
