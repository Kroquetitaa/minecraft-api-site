import {
  TemplateData,
  TemplateDiv,
  TemplateTitleh2,
  TemplateParagraph,
} from '@styles/StylesDocs';
import Link from 'next/link';

const TemplateMenu = () => {
  return (
    <TemplateData>
      <TemplateDiv>
        <Link href="/documentation/introduction">
          <TemplateTitleh2>Introduction</TemplateTitleh2>
        </Link>
        <Link href="/documentation/introduction/rest">
          <TemplateParagraph>REST</TemplateParagraph>
        </Link>
        <Link href="/documentation/introduction/javascriptclient">
          <TemplateParagraph>JavasCript Client</TemplateParagraph>
        </Link>
      </TemplateDiv>
      <TemplateDiv>
        <Link href="/documentation/versions">
          <TemplateTitleh2>Versions</TemplateTitleh2>
        </Link>
        <Link href="/documentation/versions/versionschema">
          <TemplateParagraph>Versions schema</TemplateParagraph>
        </Link>
        <Link href="/documentation/versions/allversion">
          <TemplateParagraph>Get all versions</TemplateParagraph>
        </Link>
        <Link href="/documentation/versions/singleversion">
          <TemplateParagraph>Get a single version</TemplateParagraph>
        </Link>
        <Link href="/documentation/versions/multipleversion">
          <TemplateParagraph>Get multiple versions</TemplateParagraph>
        </Link>
      </TemplateDiv>
      <TemplateDiv>
        <Link href="/documentation/items">
          <TemplateTitleh2>Items</TemplateTitleh2>
        </Link>
        <Link href="/documentation/items/schemaitem">
          <TemplateParagraph>Items schema</TemplateParagraph>
        </Link>
        <Link href="/documentation/items/allitems">
          <TemplateParagraph>Get all items</TemplateParagraph>
        </Link>
        <Link href="/documentation/items/singleitem">
          <TemplateParagraph>Get a single item by ID</TemplateParagraph>
        </Link>
        <Link href="/documentation/items/singleitemname">
          <TemplateParagraph>Get a single item by IDName</TemplateParagraph>
        </Link>
        <Link href="/documentation/items/multipleitems">
          <TemplateParagraph>Get multiple items by ID</TemplateParagraph>
        </Link>
        <Link href="/documentation/items/multipleitemsname">
          <TemplateParagraph>Get multiple items by IDName</TemplateParagraph>
        </Link>
        <Link href="/documentation/items/filteritems">
          <TemplateParagraph>Filter items</TemplateParagraph>
        </Link>
      </TemplateDiv>
      <TemplateDiv>
        <Link href="/documentation/games">
          <TemplateTitleh2>Games</TemplateTitleh2>
        </Link>
        <TemplateParagraph>Games schema</TemplateParagraph>
        <TemplateParagraph>Get all games</TemplateParagraph>
        <TemplateParagraph>Get a single game by ID</TemplateParagraph>
        <TemplateParagraph>Get a single game by GameID</TemplateParagraph>
        <TemplateParagraph>Get multiple games by ID</TemplateParagraph>
        <TemplateParagraph>Get multiple games by GameID</TemplateParagraph>
        <TemplateParagraph>Filter games</TemplateParagraph>
      </TemplateDiv>
      <TemplateDiv>
        <Link href="/documentation/characters">
          <TemplateTitleh2>Characters</TemplateTitleh2>
        </Link>
        <Link href="/documentation/characters/schema">
          <TemplateParagraph>Characters schema</TemplateParagraph>
        </Link>
        <TemplateParagraph>Get a single character by name</TemplateParagraph>
        <TemplateParagraph>Get multiple characters by name</TemplateParagraph>
      </TemplateDiv>
    </TemplateData>
  );
};

export default TemplateMenu;
