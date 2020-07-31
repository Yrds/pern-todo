import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
  :root {
    --charcoal: hsla(203, 37%, 22%, 1);
    --pumpkin: hsla(24, 99%, 59%, 1);
    --sunglow: hsla(44, 97%, 63%, 1);
    --olivine: hsla(90, 34%, 63%, 1);
    --polished-pine: hsla(162, 23%, 49%, 1);
  }

  html {
    height: 100%;
  }

  body {
    color: var(--charcoal);
    margin: 0;
    padding: 0;
    background: var(--polished-pine);
    font-family: 'Quicksand', sans-serif;
  }

  h1 {
    color: var(--sunglow);
  }
`;
