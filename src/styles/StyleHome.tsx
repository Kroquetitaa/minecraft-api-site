import styled from '@emotion/styled';

export const TemplateDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0px;
  height: 75vh;
`;

export const TemplateDivOne = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TemplateDivTwo = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-column-end: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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

export const Buttons = styled.button`
  all: unset;
  text-align: center;
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
