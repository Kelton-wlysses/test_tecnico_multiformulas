import styled from "styled-components";
import imagem from "../../assets/banner.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${imagem});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  div{
    width: 400px;
    height: 200px;
    background-color: var(--color-grey-1);
    border-radius: 7px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    span{
      font: var(--font-8);
      font-weight: 600;
      color: var(--color-grey-4);
    }

    h2{
      font: var(--font-8);
      color: var(--color-grey-4);
    }

    button{
      width: 200px;
      height: 50px;

      background-color: var(--color-primary-blue);
      border: none;
      border-radius: 5px;

      font: var(--font-4);
      color: var(--color-grey-1);
    }
    
  }
`;
