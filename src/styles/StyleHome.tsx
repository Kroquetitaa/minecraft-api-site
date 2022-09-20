import styled from '@emotion/styled';

export const TemplateDiv = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Buttons = styled.button`
  all: unset;
  font-size: 1.5rem;
  padding: 15px;
  padding-left: 50px;
  padding-right: 50px;
  border: 3px solid #1e2b36;
  background: repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0) 20px,
    rgba(0, 0, 0, 0) 40px,
    #e88b05 40px,
    #e88b05 60px
  );
  color: #1e2b36;
  font-weight: bolder;
  letter-spacing: 2px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0) 30px,
      rgba(0, 0, 0, 0) 40px,
      #1e2b36 40px,
      #1e2b36 60px
    );
    border-color: #e88b05;
  }
`;
