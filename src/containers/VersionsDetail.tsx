import { Versions } from '@interfaces/Versions.interface';
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
import React from 'react';
import ReactJson from 'react-json-view';

const ItemsDetail = () => {
  const version: Versions = {
    version: 'Minecraft 1.10',
    items: [
      {
        item: 1,
        stack: 64,
        minecraftID: 163,
        minecraftDataValue: 0,
        flamableItem: true,
        minecraftIDName: 'minecraft:acacia_stairs',
        minecraftName: 'Acacia Stairs',
        imageItem:
          'https://res.cloudinary.com/kroquetita/image/upload/v1663397789/dev/acacia_wood_stairs.png.png',
        nameItem: {
          nameItemSpanish: 'Escaleras de madera de acacia',
          nameItemEnglish: 'Acacia Stairs',
        },
        rarityColor: {
          rarityColorSpanish: 'comun',
          rarityColorEnglish: 'common',
        },
      },
    ],
  };
  return (
    <TemplateDiv>
      <TemplateH3>VERSIONS</TemplateH3>
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
      <TemplateH3>Todos los items</TemplateH3>
      <TemplateParagraph>
        Accede a la lista de todas las versions utilizando{' '}
        <TemplateSpan>/versions</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>https://minecraft-api.com/api/versions</TemplateUrl>
          <TemplatePetition>GET</TemplatePetition>
        </TemplateDivCircles>
        <ReactJson
          src={version}
          iconStyle="square"
          displayObjectSize={true}
          displayDataTypes={true}
          name="results"
          sortKeys={false}
          quotesOnKeys={false}
        />
      </TemplateDivCard>
      <TemplateH3>Simple version</TemplateH3>
      <TemplateParagraph>
        Accede a una version <TemplateSpan>/:version</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/versions/:version
          </TemplateUrl>
          <TemplatePetition>GET</TemplatePetition>
        </TemplateDivCircles>
        <ReactJson
          src={version}
          iconStyle="square"
          displayObjectSize={true}
          displayDataTypes={true}
          name="results"
          sortKeys={false}
          quotesOnKeys={false}
        />
      </TemplateDivCard>
      <TemplateH3>Multiple version</TemplateH3>
      <TemplateParagraph>
        Accede a multiples version{' '}
        <TemplateSpan>/multiples/:version</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/versions/multiples/:version
          </TemplateUrl>
          <TemplatePetition>GET</TemplatePetition>
        </TemplateDivCircles>
        <ReactJson
          src={version}
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

export default ItemsDetail;
