import styled from '@emotion/styled';
import Image from 'next/image';

export const TemplateDivGeneral = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const TemplateDiv = styled.div`
    display: flex;
    width: 350px;
    flex-wrap: wrap;
    align-items: center;
    border: 3px solid #1e2b36;
    border-radius: 10px;
    gap: 10px;
    padding-right: 20px;
    cursor: pointer;
    &:hover{
      background-color: #1e2b36;
      color: white;
      border: 3px solid orange;
    }
`;

export const TemplateImage = styled(Image)`
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;