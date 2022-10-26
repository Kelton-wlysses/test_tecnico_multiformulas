import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-bottom: 1px solid var(--color-grey-2);

  h2 {
    width: 350px;

    font: var(--font-3);
    color: var(--color-grey-4);
    font-weight: 600;
  }

  h3 {
    width: 320px;
    font: var(--font-3);
    color: var(--color-grey-3);
    line-height: 180%;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

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
      font-weight: 600;

      span {
        font: var(--font-8);
        color: var(--color-grey-4);
        font-style: bold;
      }
    }
  }
`;
