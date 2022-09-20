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
        <TemplateTitleh2>Try it now</TemplateTitleh2>
        <TemplateParagraph>Send request</TemplateParagraph>
      </TemplateDiv>
      <TemplateDiv>
        <Link href="/documentation/introduction">
          <TemplateTitleh2>Introduction</TemplateTitleh2>
        </Link>
        <TemplateParagraph>REST</TemplateParagraph>
        <TemplateParagraph>JavasCript Client</TemplateParagraph>
      </TemplateDiv>
      <TemplateDiv>
        <Link href="/documentation/versions">
          <TemplateTitleh2>Versions</TemplateTitleh2>
        </Link>
        <TemplateParagraph>Versions schema</TemplateParagraph>
        <TemplateParagraph>Get all versions</TemplateParagraph>
        <TemplateParagraph>Get a single version</TemplateParagraph>
        <TemplateParagraph>Get multiple versions</TemplateParagraph>
      </TemplateDiv>
      <TemplateDiv>
        <Link href="/documentation/items">
          <TemplateTitleh2>Items</TemplateTitleh2>
        </Link>
        <TemplateParagraph>Items schema</TemplateParagraph>
        <TemplateParagraph>Get all items</TemplateParagraph>
        <TemplateParagraph>Get a single item by ID</TemplateParagraph>
        <TemplateParagraph>Get a single item by IDName</TemplateParagraph>
        <TemplateParagraph>Get multiple items by ID</TemplateParagraph>
        <TemplateParagraph>Get multiple items by IDName</TemplateParagraph>
        <TemplateParagraph>Filter items</TemplateParagraph>
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
