import styled from '@emotion/styled';
import Image from 'next/image';

export const TemplateDiv = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TemplateImage = styled(Image)`
  -webkit-animation: bounce-in-top 1.1s both;
  animation: bounce-in-top 1.1s both;
  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;

export const TemplateTitle = styled.h1`
  position: absolute;
  align-items: center;
  font-size: 5rem;
  color: #fdf6c4;
  font-family: fantasy;
  letter-spacing: 10px;
  text-shadow: 0.1em 0.1em 0.05em #1e2b36;
  transition: all 0.5s ease-out;
  color: #e88b05;
  letter-spacing: 1rem;
  cursor: pointer;
  &:hover {
    letter-spacing: 0.75rem;
    font-size: 4.5rem;
    -webkit-text-stroke: 1px #e88b05;
    color: transparent; 
  }
  -webkit-animation: tracking-in-contract-bck 1s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-contract-bck 3s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  @-webkit-keyframes tracking-in-contract-bck {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(400px);
      transform: translateZ(400px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes tracking-in-contract-bck {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(400px);
      transform: translateZ(400px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;
