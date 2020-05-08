import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }
  
  body {
    font-family: 'Nunito', sans-serif!important;
    background-color: #19181F;
    -webkit-font-smoothing: antialiased;
  }
  
  input, select, option, textarea, button {
    font-family: 'Nunito', sans-serif;
  }

  button {
      cursor: pointer;
  }
`;
