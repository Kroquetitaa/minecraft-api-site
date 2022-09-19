import styled from '@emotion/styled';

export const TemplateUl = styled('ul')( ({ color }) => ({
  backgroundColor: `${color}`,
  width: '100%',
  top: '0',
  bottom: '0',
  position: 'relative',
  height: '10vh',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  listStyle: 'none',
}));

export const TemplateLi = styled.li``;

export const TemplateParagraph = styled.p`
  width: 100%;
  font-size: 1.3rem;
  color: #e88b05;
  font-weight: bolder;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.05s;
  letter-spacing: 0.20rem;
  &:hover {
    color: #ddd;
  }
`;