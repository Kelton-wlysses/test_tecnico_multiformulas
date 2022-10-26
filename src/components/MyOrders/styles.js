import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header{
    width: 100%;
    height: 40px;
    background-color: var(--color-primary-blue);
    
    padding-left: 8%;
    padding-right: 8%;

    @media (min-width: 520px) {
      padding-left: 20%;
      padding-right: 20%;
    }
    
    display: flex;
    align-items: center;

    h2{
      font: var(--font-4);
      font-weight: 600;
      color: var(--color-grey-1);
      letter-spacing: 0.02em;

    }
  }

  main{
    width: 100%;

    padding-left: 8%;
    padding-right: 8%;

    @media (min-width: 520px) {
      padding-left: 20%;
      padding-right: 20%;
    }

    padding-top: 26px;
    
    background-color: var(--color-grey-0);
    display: flex;
    flex-direction: column;
    gap: 18px;

    h2{
      width: 100%;
      font: var(--font-3);
      color: var(--color-grey-4);
      font-weight: 600;
    }

    h3{
      width: 100%;
      font: var(--font-3);
      color: var(--color-grey-3);
    }

    .frete{
      display: flex;
      justify-content: space-between;
      
      border-bottom: 1px solid var(--color-grey-2);
      
      h2 {
        font: var(--font-3);
        color: var(--color-grey-4);
        font-weight: 600;
      }

      p {
        margin-bottom: 12px;

        display: flex;
        align-items: center;
        gap: 5px;

        font: var(--font-3);
        color: var(--color-grey-4);

        span {
          font: var(--font-8);
          color: var(--color-grey-4);
          font-style: bold;
        }
      }
    }

  }
`;
