import styled from '@emotion/styled';

export const TemplateDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-left: 200px;
  padding-right: 200px;
`;

export const TemplateH3 = styled.h3`
  color: #1e2b36;
  font-weight: bolder;
  font-size: 1.85rem;
  letter-spacing: 1px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const TemplateParagraph = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 4px;
  color: gray;
  font-size: 1.25rem;
`;

export const TemplateDivCard = styled.div`
  background-color: #efffff;
  border: 2px solid #1e2b36;
  padding: 10px;
  border-radius: 10px;
`;

export const TemplateDivCircles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const TemplateRedCircle = styled.p`
  width: 24px;
  height: 24px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-color: red;
  border: 2px solid #1e2b36;
  margin-right: 5px;
`;
export const TemplateOrangeCircle = styled(TemplateRedCircle)`
  background-color: orange;
`;
export const TemplateGreenCircle = styled(TemplateRedCircle)`
  background-color: #00d33a;
`;
export const TemplateUrl = styled.p`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  color: #1e2b36;
  font-size: 1.25rem;
  border: 2px solid black;
  border-radius: 10px;
  margin-right: 10px;
  background-color: white;
`;

export const TemplatePetition = styled.p`
  width: 10%;
  display: flex;
  align-items: center;
  padding: 7px;
  justify-content: center;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #00d33a;
  font-weight: bolder;
  color: white;
  letter-spacing: 4px;
`;

export const TemplateTr = styled.tr`
`;

export const TemplateIdTitles = styled.td`
  border-bottom: 1px solid gray;
  border-width: 100%;
  color: black;
  padding: 10px;
  font-weight: bolder;
`;

export const TemplateTd = styled.td`
  border-bottom: 1px solid gray;
  border-width: 100%;
  color: gray;
  padding: 10px;
`;

export const TemplateSpan = styled.span`
    background-color: #ddd;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    color: gray;
    font-weight: bolder;
`;