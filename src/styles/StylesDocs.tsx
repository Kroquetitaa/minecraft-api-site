import styled from '@emotion/styled';


export const TemplateData = styled.div``;

export const TemplateGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px;
  width: 100%;
  height: 75vh;
`;
export const TemplateGridOne = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 7.5%;
  padding-top: 100%;
  overflow-y: scroll;
  transition: all 0.3s ease;
  cursor: grab;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #1e2b36;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
`;
export const TemplateGridTwo = styled.div`
background-color: #ddd;
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-column-end: 7;
  overflow-y: scroll;
  transition: all 0.3s ease;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #1e2b36;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
  
`;

export const TemplateDiv = styled.div`
  margin-bottom: 5px;
`;

export const TemplateTitleh2 = styled.h2`
  color: #1e2b36;
  font-weight: bolder;
  font-size: 1.75rem;
  cursor: pointer;
`;

export const TemplateParagraph = styled.p`
  color: grey;
  font-weight: bolder;
  letter-spacing: 1px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #e88b05;
  }
`;

export const TemplateLink = styled.img``;
