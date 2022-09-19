import styled from '@emotion/styled';

export const TemplateUl = styled('ul')( ({ color }) => ({
  backgroundColor: `${color}`,
  width: '100%',
  height: '15vh',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  listStyle: 'none',
}));


export const TemplateLi = styled.li`
  cursor: pointer;
`;

export const TemplateParagraph = styled.p`
  width: 100%;
  font-size: 1.3rem;
  color: #e88b05;
  font-weight: bolder;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.05s;
  &:hover {
    font-size: 1.9rem;
    letter-spacing: 0.3rem;
    color: #ddd;
  }
`;

export const TemplateImageLi = styled(TemplateLi)`
  animation: myAnimation 2s ease 0s infinite normal none;
  @keyframes myAnimation {
    0% {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

