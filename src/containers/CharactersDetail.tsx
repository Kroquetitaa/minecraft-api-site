import React from 'react';
import ReactJson from 'react-json-view';
import { Characters } from '@interfaces/Characters.interface';
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

const CharactersDetail = () => {
  const data: Characters = {
    name: 'steve',
    healthPoints: 1,
    image: 'imagen',
    attackStrength: 20,
    hitboxSize: [
      {
        mode: 'normal',
        hitboxWidth: {
          hitboxSpanish: 'spanish',
          hitboxEnglish: 'english',
        },
        hitboxHeight: {
          hitboxEnglish: 'english',
          hitboxSpanish: 'spanish',
        },
      },
    ],
  };
  return (
    <TemplateDiv>
      <TemplateH3>CHARACTERS</TemplateH3>
      <TemplateH3>Schema characters</TemplateH3>
      <table>
        <tbody>
          <TemplateTr>
            <TemplateIdTitles>Key</TemplateIdTitles>
            <TemplateIdTitles>Type</TemplateIdTitles>
            <TemplateIdTitles>Description</TemplateIdTitles>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>name</TemplateTd>
            <TemplateTd>string</TemplateTd>
            <TemplateTd>
              The name is the name of the character only two characters Alex -
              Steve
            </TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>healthPoints</TemplateTd>
            <TemplateTd>number</TemplateTd>
            <TemplateTd>
              The healthPoints is the health of the character
            </TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>image</TemplateTd>
            <TemplateTd>string</TemplateTd>
            <TemplateTd>Link to the image of character</TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>attackStrength</TemplateTd>
            <TemplateTd>number</TemplateTd>
            <TemplateTd>
              The attackStrength is the strength attack of the character
            </TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>hitboxSize</TemplateTd>
            <TemplateTd>array of objects</TemplateTd>
            <TemplateTd>
              The hitboxSize is the distance of hit character. This model is an
              array of 5 objects made up of mode and hitboxWidth and
              hitboxHeight and this containt 2 objects in hitboxSpanish,
              hitboxEnglish.
            </TemplateTd>
          </TemplateTr>
        </tbody>
      </table>
      <TemplateH3>Todos los characters</TemplateH3>
      <TemplateParagraph>
        Accede a la lista de todos los characters
        <TemplateSpan>/</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>https://minecraft-api.com/api/characters/</TemplateUrl>
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
        />
      </TemplateDivCard>
      <TemplateH3>Characters por nombre</TemplateH3>
      <TemplateParagraph>
        Busca un character por su nombre <TemplateSpan>/:name</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/characters/:name
          </TemplateUrl>
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
        />
      </TemplateDivCard>
      <TemplateH3>Multiple characters</TemplateH3>
      <TemplateParagraph>
        Busca multiples characters por su nombre
        <TemplateSpan>/multiplesnames/:name</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/characters/multiplesnames/:name
          </TemplateUrl>
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
        />
      </TemplateDivCard>
    </TemplateDiv>
  );
};

export default CharactersDetail;
