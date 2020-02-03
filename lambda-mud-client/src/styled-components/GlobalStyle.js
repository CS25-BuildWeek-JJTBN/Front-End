import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css?family=Roboto|Major+Mono+Display|VT323&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    font-family: 'VT323', Courier, monospace;
    letter-spacing: 0.3rem;
  }

  html {
    font-size: 62.5%;
  }

  body {
    line-height: 1.5;
    font-size: 2rem;
  }
`;

export default GlobalStyle;
