import PagesLayout from '@components/PagesLayout';

import {
  TemplateDiv,
  TemplateH3,
  TemplateTr,
  TemplateTd,
  TemplateIdTitles,
} from '@styles/StylesIntroductionDetail';
import {
  TemplateGridTwo,
  TemplateGrid,
  TemplateGridOne,
} from '@styles/StylesDocs';
import React from 'react';
import TemplateMenu from '@templates/TemplateMenu';

export const schemaitem = () => {
  return (
    <PagesLayout title="items-schema">
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateMenu />
        </TemplateGridOne>
        <TemplateGridTwo>
          <TemplateDiv>
            <TemplateH3>Schema items</TemplateH3>
            <table>
              <tbody>
                <TemplateTr>
                  <TemplateIdTitles>Key</TemplateIdTitles>
                  <TemplateIdTitles>Type</TemplateIdTitles>
                  <TemplateIdTitles>Description</TemplateIdTitles>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>item</TemplateTd>
                  <TemplateTd>number</TemplateTd>
                  <TemplateTd>The number of item</TemplateTd>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>minecraftIDName</TemplateTd>
                  <TemplateTd>string</TemplateTd>
                  <TemplateTd>
                    The minecraftIDName is the name of minecraft item
                  </TemplateTd>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>minecraftID</TemplateTd>
                  <TemplateTd>number</TemplateTd>
                  <TemplateTd>
                    The minecraftID is the item ID on game
                  </TemplateTd>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>minecraftDataValue</TemplateTd>
                  <TemplateTd>number</TemplateTd>
                  <TemplateTd>
                    The minecraftDataValue is value between 0 - 1
                  </TemplateTd>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>flamableItem</TemplateTd>
                  <TemplateTd>boolean</TemplateTd>
                  <TemplateTd>
                    The flamableItem is the value of item flamable true - false
                  </TemplateTd>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>rarityColor</TemplateTd>
                  <TemplateTd>object</TemplateTd>
                  <TemplateTd>
                    The rarityColor is object made up of
                    valuesrarityColorSpanish: String, rarityColorEnglish: String
                  </TemplateTd>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>image</TemplateTd>
                  <TemplateTd>string</TemplateTd>
                  <TemplateTd>Link to the image on Minecraft Item</TemplateTd>
                </TemplateTr>
                <TemplateTr>
                  <TemplateTd>nameItem</TemplateTd>
                  <TemplateTd>object</TemplateTd>
                  <TemplateTd>
                    The nameItem is object made up of valuesnameItemSpanish:
                    String, nameItemEnglish: String Are the name of items
                  </TemplateTd>
                </TemplateTr>
              </tbody>
            </table>
          </TemplateDiv>
        </TemplateGridTwo>
      </TemplateGrid>
    </PagesLayout>
  );
};

export default schemaitem;
