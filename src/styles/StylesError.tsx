import styled from '@emotion/styled';

export const TemplateSection = styled.section`
  height: 80vh;
  background: #fff;
  font-family: fantasy, serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TemplateDivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TemplateH1 = styled.h1`
  font-size: 90px;
`;

export const TemplateH3 = styled(TemplateH1)`
  color: #1e2b36;
  text-align: center;
  margin-top: 250px;
`;

export const TemplateParagraph = styled.p`
  text-align: center;
  font-size: 25px;
`;

export const TemplateA = styled.a`
  color: #fdf6c4;
  padding: 10px 20px;
  background-color: #1e2b36;
  right: 100px;
  margin: 20px 0;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  font-weight: bolder;
  border: 2px solid #fdf6c4;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fdf6c4;
    color: #1e2b36;
    border: 2px solid #1e2b36;
  }
`;
