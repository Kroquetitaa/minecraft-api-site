import PagesLayout from '@components/PagesLayout';

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
import React from 'react';
import TemplateMenu from '@templates/TemplateMenu';
import ReactJson from 'react-json-view';
import { Item } from '@interfaces/Item.interface';

export const multipleitems = () => {
  const data: Item = {
    id: 5,
    item: '163:0',
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
  };
  return (
    <PagesLayout title="items-schema">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <TemplateDiv>
            <TemplateH3>Multiples Items por ID</TemplateH3>
            <TemplateParagraph>
              Accede a multiples items por ID{' '}
              <TemplateSpan>/multipleid/:minecraftID</TemplateSpan>
            </TemplateParagraph>
            <TemplateDivCard>
              <TemplateDivCircles>
                <TemplateRedCircle></TemplateRedCircle>
                <TemplateOrangeCircle></TemplateOrangeCircle>
                <TemplateGreenCircle></TemplateGreenCircle>
                <TemplateUrl>
                  https://minecraft-api.com/api/items/multipleid/:minecraftID
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
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default multipleitems;
