import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  :root {

    /* style guide */

      /* Color Style guide */
        /* Primary Palette */
        --color-primary-blue: #20659F;
        --color-primary-Focus: #DCEFFF;


        /* Grey Scale Palette */

        --color-grey-5: #272727;
        --color-grey-4: #202020;
        --color-grey-3: #7A7A7A;
        --color-grey-2: #D9D9D9;
        --color-grey-1: #F7F7F7;
        --color-grey-0: #FFFFFF;

        /* Feedback Palette */

        --color-sucess: #3A9949;
        --color-negative: #E83F5B;

      /* Text Style guide */

        /* fonte style */

        --font-inter: 'Inter', sans-serif;

        /* Typography */

        --font-1: normal 10px var(--font-inter);
        --font-2: normal 12px var(--font-inter);
        --font-3: normal 14px var(--font-inter);
        --font-4: normal 16px var(--font-inter);
        --font-5: normal 18px var(--font-inter);
        --font-6: normal 20px var(--font-inter);
        --font-7: normal 22px var(--font-inter);
        --font-8: normal 24px var(--font-inter);
        --font-9: normal 26px var(--font-inter);
        --font-10: normal 28px var(--font-inter);
        --font-11: normal 30px var(--font-inter);
        --font-12: normal 34px var(--font-inter);


    font-size: 62.5%;
    
  }

  @media (min-width: 700px) {
    :root {
       font-size: 62.5%;
    }
  }
  
  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    max-width: 100vw;
    min-height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-grey-2);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-4);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-4);
  }
`;


