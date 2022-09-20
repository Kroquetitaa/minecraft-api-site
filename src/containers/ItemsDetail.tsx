import { Item } from '@interfaces/Item.interface';
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

const ItemDetail = () => {
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
    <TemplateDiv>
      <TemplateH3>ITEMS</TemplateH3>
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
            <TemplateTd>The minecraftID is the item ID on game</TemplateTd>
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
              The rarityColor is object made up of valuesrarityColorSpanish:
              String, rarityColorEnglish: String
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
              The nameItem is object made up of valuesnameItemSpanish: String,
              nameItemEnglish: String Are the name of items
            </TemplateTd>
          </TemplateTr>
        </tbody>
      </table>
      <TemplateH3>Todos los items</TemplateH3>
      <TemplateParagraph>
        Accede a la lista de todos los items utilizando{' '}
        <TemplateSpan>/</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>https://minecraft-api.com/api/items/</TemplateUrl>
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
      <TemplateH3>Items por ID</TemplateH3>
      <TemplateParagraph>
        Busca un item por su ID <TemplateSpan>/id/:minecraftID</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/items/id/:minecraftID
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
      <TemplateH3>Items por nombre</TemplateH3>
      <TemplateParagraph>
        Busca un item por su nombre{' '}
        <TemplateSpan>/idname/:minecraftIDName</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/items/idname/:minecraftIDName
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
      <TemplateH3>Multiples Items por nombre</TemplateH3>
      <TemplateParagraph>
        Accede a multiples items por su nombre{' '}
        <TemplateSpan>/multiplename/:minecraftIDName</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/items/multiplename/:minecraftIDName
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
        Por ejemplo, si desea verificar cuantos items con el valor 1 hay y que
        son flamables simplemente agregue
        <TemplateSpan>/filter/?item=1&flamableItem=true</TemplateSpan> a la URL.
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
        - <TemplateSpan>minecraftIDName</TemplateSpan>: Filtra por como se llama
        el item
      </TemplateParagraph>
      <TemplateParagraph>
        - <TemplateSpan>minecraftDataValue</TemplateSpan>: Filtra por su
        dataValue que es ( <TemplateSpan>0</TemplateSpan> -{' '}
        <TemplateSpan>1</TemplateSpan> )
      </TemplateParagraph>
      <TemplateParagraph>
        - <TemplateSpan>minecraftDataValue</TemplateSpan>: Filtra por si se
        puede quemar el item que es ( <TemplateSpan>true</TemplateSpan> -{' '}
        <TemplateSpan>false</TemplateSpan> )
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>https://minecraft-api.com/api/items/filter/</TemplateUrl>
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

export default ItemDetail;
