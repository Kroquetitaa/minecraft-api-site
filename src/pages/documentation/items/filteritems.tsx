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
import { Item } from '@interfaces/Item.interface';
import ReactJson from 'react-json-view';

export const allitems = () => {
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
            <TemplateH3>Filtro Items</TemplateH3>
            <TemplateParagraph>
              Tambien puede incluir filtros en la URL al incluir parámetros de
              consulta adicionales. Para comenzar a filtrar agregue{' '}
              <TemplateSpan>?</TemplateSpan> seguido de la consulta
              <TemplateSpan>{'<query>=<value>'}</TemplateSpan>
              Si desea encadenar varias consultas en una misma llamada, utilice{' '}
              <TemplateSpan>&</TemplateSpan> seguido de la consulta.
            </TemplateParagraph>
            <TemplateParagraph>
              Por ejemplo, si desea verificar cuantos items con el valor 1 hay y
              que son flamables simplemente agregue
              <TemplateSpan>/filter/?item=1&flamableItem=true</TemplateSpan> a
              la URL.
            </TemplateParagraph>
            <TemplateParagraph>Parámetros disponibles:</TemplateParagraph>
            <TemplateParagraph>
              - <TemplateSpan>item</TemplateSpan>: Filtra por el numero del item
            </TemplateParagraph>
            <TemplateParagraph>
              - <TemplateSpan>minecraftID</TemplateSpan>: Filtra por el ID de
              minecraft
            </TemplateParagraph>
            <TemplateParagraph>
              - <TemplateSpan>minecraftIDName</TemplateSpan>: Filtra por como se
              llama el item
            </TemplateParagraph>
            <TemplateParagraph>
              - <TemplateSpan>minecraftDataValue</TemplateSpan>: Filtra por su
              dataValue que es ( <TemplateSpan>0</TemplateSpan> -{' '}
              <TemplateSpan>1</TemplateSpan> )
            </TemplateParagraph>
            <TemplateParagraph>
              - <TemplateSpan>minecraftDataValue</TemplateSpan>: Filtra por si
              se puede quemar el item que es ( <TemplateSpan>true</TemplateSpan>{' '}
              - <TemplateSpan>false</TemplateSpan> )
            </TemplateParagraph>
            <TemplateDivCard>
              <TemplateDivCircles>
                <TemplateRedCircle></TemplateRedCircle>
                <TemplateOrangeCircle></TemplateOrangeCircle>
                <TemplateGreenCircle></TemplateGreenCircle>
                <TemplateUrl>
                  https://minecraft-api.com/api/items/filter/
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

export default allitems;
