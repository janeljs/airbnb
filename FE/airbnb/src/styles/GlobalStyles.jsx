import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    color: #fff;
  }

  *{
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
    margin: 0;
  }
`;

export default GlobalStyles;
