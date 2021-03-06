import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css?family=Roboto|Major+Mono+Display|VT323&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    font-family: 'Press Start 2P', Courier, monospace;
    letter-spacing: 0.3rem;
  }

  html {
    font-size: 62.5%;
    // background-color: #f0f4f7;
    // background-color: lightblue;
    height: 100%;
  }
  
  body {
    line-height: 1.5;
    font-size: 1rem;
    // background-color:#f0f4f7;
    background-color: lightblue;
    height: 100%;
    // background-image: url('./photos/background2.png');
    // background-size: cover;
  }

  h1 {
    font-family: 'Triforce', sans-serif;
  }
`;

export default GlobalStyle;
