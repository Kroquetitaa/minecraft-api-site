import styled from '@emotion/styled';


export const TemplateDivGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px;
  height: 75vh;
`;
export const TemplateDivGridOne = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 100px;
  text-align: justify;
`;
export const TemplateDivGridTwo = styled.div`
  grid-row-start: 1;
  grid-column-start: 4;
  grid-row-end: 4;
  grid-column-end: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TemplateTitleh2 = styled.h2`
  color: #1e2b36;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 1.85rem;
  letter-spacing: 5px;
  margin-bottom: 2rem;
`;

export const TemplateTitleH3 = styled.h3`
  color: #1e2b36;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 1.85rem;
  letter-spacing: 5px;
  margin: 1rem 0px 0px;
`;

export const TemplateTitleH4 = styled.h4`
  color: #1e2b36;
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const TemplateParagraph = styled.p`
  margin-top: 2px;
  margin-bottom: 10px;
  padding: 4px;
  color: gray;
  font-weight: bolder;
`;

export const TemplateA = styled.a`
  color: gray;
  font-weight: bolder;
  text-decoration-color: orange;
  text-underline-position: under;
  margin-left: 4px;
  margin-right: 4px;
`;