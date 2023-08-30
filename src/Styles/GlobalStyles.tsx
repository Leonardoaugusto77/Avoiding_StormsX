import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${Theme.fonts.fontFamily};
  }

  body {
    background: ${Theme.colors.backgroundGradient};
  }
`;

export default GlobalStyle;
