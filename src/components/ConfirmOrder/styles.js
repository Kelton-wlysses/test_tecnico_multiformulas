import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 236px;

  background-color: var(--color-primary-Focus);
  padding-left: 20%;
  padding-right: 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2{
    font: var(--font-4);
    color: var(--color-grey-4);
    font-weight: 600;
  }
  
  .select{
    display: flex;
    gap: 10px;

  }

  button{
    width: 100%;
    height: 56px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;

    background-color: var(--color-primary-blue);
    border: none;
    border-radius: 5px;

    font: var(--font-4);
    color: var(--color-grey-1);

    :hover{
      filter: brightness(1.15);
    }
  }
`;
