import styled from "styled-components";
import imagem from "../../assets/banner.png";

export const Container = styled.div`
  width: 100%;

  header {
    width: 100%;
    height: 80px;

    background-color: var(--color-grey-0);

    display: flex;
    justify-content: center;
    align-items: center;

    figure {
      img {
        width: 250px;
      }
    }
  }

  main {
    width: 100%;
    height: 382px;

    background-image: url(${imagem});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    h2{
      width: 830px;
      text-align: center;
      font: var(--font-12);
      color: var(--color-grey-1);

      line-height: 140%;
      letter-spacing: -0.02em;
    }
  }
`;
