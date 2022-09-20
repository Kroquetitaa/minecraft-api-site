import {
    TemplateGrid,
    TemplateGridOne,
    TemplateGridTwo,
    TemplateDiv,
    TemplateTitleh2,
    TemplateParagraph,
  } from '@styles/StylesDocs';
  
  const ComponentDocs = () => {
    return (
      <TemplateGrid>
        <TemplateGridOne>
          <TemplateDiv>
            <TemplateTitleh2>Try it now</TemplateTitleh2>
            <TemplateParagraph>Send request</TemplateParagraph>
          </TemplateDiv>
          <TemplateDiv>
            <TemplateTitleh2>Introduction</TemplateTitleh2>
            <TemplateParagraph>REST</TemplateParagraph>
            <TemplateParagraph>JavasCript Client</TemplateParagraph>
          </TemplateDiv>
          <TemplateDiv>
            <TemplateTitleh2>Versions</TemplateTitleh2>
            <TemplateParagraph>Versions schema</TemplateParagraph>
            <TemplateParagraph>Get all versions</TemplateParagraph>
            <TemplateParagraph>Get a single version</TemplateParagraph>
            <TemplateParagraph>Get multiple versions</TemplateParagraph>
          </TemplateDiv>
          <TemplateDiv>
            <TemplateTitleh2>Items</TemplateTitleh2>
            <TemplateParagraph>Items schema</TemplateParagraph>
            <TemplateParagraph>Get all items</TemplateParagraph>
            <TemplateParagraph>Get a single item by ID</TemplateParagraph>
            <TemplateParagraph>Get a single item by IDName</TemplateParagraph>
            <TemplateParagraph>Get multiple items by ID</TemplateParagraph>
            <TemplateParagraph>Get multiple items by IDName</TemplateParagraph>
            <TemplateParagraph>Filter items</TemplateParagraph>
          </TemplateDiv>
          <TemplateDiv>
            <TemplateTitleh2>Games</TemplateTitleh2>
            <TemplateParagraph>Games schema</TemplateParagraph>
            <TemplateParagraph>Get all games</TemplateParagraph>
            <TemplateParagraph>Get a single game by ID</TemplateParagraph>
            <TemplateParagraph>Get a single game by GameID</TemplateParagraph>
            <TemplateParagraph>Get multiple games by ID</TemplateParagraph>
            <TemplateParagraph>Get multiple games by GameID</TemplateParagraph>
            <TemplateParagraph>Filter games</TemplateParagraph>
          </TemplateDiv>
          <TemplateDiv>
            <TemplateTitleh2>Characters</TemplateTitleh2>
            <TemplateParagraph>Characters schema</TemplateParagraph>
            <TemplateParagraph>Get a single character by name</TemplateParagraph>
            <TemplateParagraph>Get multiple characters by name</TemplateParagraph>
          </TemplateDiv>
        </TemplateGridOne>
        <TemplateGridTwo>a</TemplateGridTwo>
      </TemplateGrid>
    );
  };
  
  export default ComponentDocs;
  