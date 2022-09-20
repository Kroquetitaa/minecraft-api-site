import styled from '@emotion/styled';
import Image from 'next/image';

export const TemplateDiv = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TemplateDivCharacters = styled.div`
  display: flex;
  left: 7.5%;
  align-items: center;
  transition: all 1s;
  transform-style: preserve-3d;
  position: relative;
  &:hover {
    transform: rotateY(180deg);
  }
`;

export const TemplateDivCara = styled.div`
  backface-visibility: hidden;
  padding: 100px;
`;

export const TemplateDivDetras = styled.div`
  display: block;
  padding: 20px;
  border-radius: 10px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  text-align: center;
`;

export const TemplateImage = styled(Image)``;

export const TemplateH3 = styled.h3`
  display: block;
  align-items: center;
  text-align: center;
  margin: 10px 0;
  border-bottom: 1px solid black;
  padding: 10px;
`;

export const TemplateH4 = styled.h4`
  color: #e88b05;
  font-size: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  animation: typewriter 1s steps(20) infinite alternate,
    blink 1000ms steps(20) infinite normal;
  border-right: 5px solid black;

  @keyframes typewriter {
    from {
      width: 0%;
    }
    to {
      width: 45%;
    }
  }
  @keyframes blink {
    from {
      border-color: black;
    }
    to {
      border-color: transparent;
    }
  }
`;

export const TemplateParagraph = styled.p`
  text-align: left;
  margin: 10px;
`;
