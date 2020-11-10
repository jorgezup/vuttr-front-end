import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    width: 700px;
    height: 100vh;
    margin: 0 auto;

    background: #f4f5f6;
    color: #232529;
    font-family: 'Grandstander', cursive;
    font-size: 14px;
    font-weight: 300;

  }

  input, button {
    font-family: 'Grandstander', cursive;
    font-size: 14px;
    font-weight: 300;
    color: #232529;
  }
`