import styled from '@emotion/styled';
import Image from 'next/image';

export const TemplateDiv = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TemplateDivSpecified = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid orange;
  border-radius: 10px;
  gap: 20px;
  padding: 20px;
  background-color: #1e2b36;
  color: white;
  &:hover{
    color: #1e2b36;
    border-color: #1e2b36;
    background-color: white;
  }
`;

export const TemplateImage = styled(Image)`
`;
