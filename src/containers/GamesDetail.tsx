import React from 'react';
import ReactJson from 'react-json-view';
import { Games } from '@interfaces/Games.interface';
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

const GamesDetail = () => {
  const data: Games = {
    id: 1,
    game: 'minecraft story Mode',
    price: 14.99,
    releaseData: 'data',
    image: 'imagen',
    titles: ['title1', 'title2'],
    description: 'description',
  };
  return (
    <TemplateDiv>
      <TemplateH3>GAMES</TemplateH3>
      <TemplateH3>Schema Games</TemplateH3>
      <table>
        <tbody>
          <TemplateTr>
            <TemplateIdTitles>Key</TemplateIdTitles>
            <TemplateIdTitles>Type</TemplateIdTitles>
            <TemplateIdTitles>Description</TemplateIdTitles>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>id</TemplateTd>
            <TemplateTd>number</TemplateTd>
            <TemplateTd>The id of game</TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>game</TemplateTd>
            <TemplateTd>string</TemplateTd>
            <TemplateTd>The game is the name of game</TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>price</TemplateTd>
            <TemplateTd>number</TemplateTd>
            <TemplateTd>
              The price is what the game costs. Value between min: 0, max: 100
            </TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>releaseData</TemplateTd>
            <TemplateTd>string</TemplateTd>
            <TemplateTd>
              The releaseData is the disponibility of the game
            </TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>image</TemplateTd>
            <TemplateTd>string</TemplateTd>
            <TemplateTd>Link to the image of Minecraft game</TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>titles</TemplateTd>
            <TemplateTd>[string]</TemplateTd>
            <TemplateTd>The titles is a array of titles of the game</TemplateTd>
          </TemplateTr>
          <TemplateTr>
            <TemplateTd>desription</TemplateTd>
            <TemplateTd>string</TemplateTd>
            <TemplateTd>The description of the game</TemplateTd>
          </TemplateTr>
        </tbody>
      </table>
      <TemplateH3>Todos los games</TemplateH3>
      <TemplateParagraph>
        Accede a la lista de todos los games utilizando
        <TemplateSpan>/</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>https://minecraft-api.com/api/games/</TemplateUrl>
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
      <TemplateH3>Games por ID</TemplateH3>
      <TemplateParagraph>
        Busca un game por su ID <TemplateSpan>/gameid/:id</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/games/gameid/:id
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
      <TemplateH3>Games por nombre</TemplateH3>
      <TemplateParagraph>
        Busca un game por su nombre
        <TemplateSpan>/game/:game</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/games/game/:game
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
      <TemplateH3>Multiples Games por ID</TemplateH3>
      <TemplateParagraph>
        Accede a multiples games por ID
        <TemplateSpan>/multiplegamesid/:id</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/games/multiplegamesid/:id
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
      <TemplateH3>Multiples games por nombre</TemplateH3>
      <TemplateParagraph>
        Accede a multiples items por su nombre{' '}
        <TemplateSpan>/multiplegames/:game</TemplateSpan>
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>
            https://minecraft-api.com/api/games/multiplegames/:game
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
        consulta adicionales. Para comenzar a filtrar agregue
        <TemplateSpan>?</TemplateSpan> seguido de la consulta
        <TemplateSpan>{'<query>=<value>'}</TemplateSpan>
        Si desea encadenar varias consultas en una misma llamada, utilice{' '}
        <TemplateSpan>&</TemplateSpan> seguido de la consulta.
      </TemplateParagraph>
      <TemplateParagraph>
        Por ejemplo, si desea verificar cuantos id con el valor 1 hay y que son
        game simplemente agregue
        <TemplateSpan>/filter/?item=1&game="Minecraft History"</TemplateSpan> a
        la URL.
      </TemplateParagraph>
      <TemplateParagraph>Parámetros disponibles:</TemplateParagraph>
      <TemplateParagraph>
        - <TemplateSpan>id</TemplateSpan>: Filtra por el ID del game
      </TemplateParagraph>
      <TemplateParagraph>
        - <TemplateSpan>game</TemplateSpan>: Filtra por el nombre del juego de
        minecraft
      </TemplateParagraph>
      <TemplateParagraph>
        - <TemplateSpan>price</TemplateSpan>: Filtra por el precio del juego
      </TemplateParagraph>
      <TemplateParagraph>
        - <TemplateSpan>releaseData</TemplateSpan>: Filtra por su releaseData
      </TemplateParagraph>
      <TemplateDivCard>
        <TemplateDivCircles>
          <TemplateRedCircle></TemplateRedCircle>
          <TemplateOrangeCircle></TemplateOrangeCircle>
          <TemplateGreenCircle></TemplateGreenCircle>
          <TemplateUrl>https://minecraft-api.com/api/games/filter/</TemplateUrl>
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

export default GamesDetail;
