import PagesLayout from '@components/PagesLayout';
import React from 'react';
import ReactJson from 'react-json-view';

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
  TemplateSpan,
} from '@styles/StylesIntroductionDetail';
import {
  TemplateGridTwo,
  TemplateGrid,
  TemplateGridOne,
} from '@styles/StylesDocs';
import TemplateMenu from '@templates/TemplateMenu';
import { Versions } from '@interfaces/Versions.interface';

const multipleversion = () => {
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
    <PagesLayout title="multiple-version">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <TemplateDiv>
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
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default multipleversion;
