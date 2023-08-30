import ReactDOM from "react-dom"; // Import ReactDOM instead of createRoot
import React from "react";
import GlobalStyle from "./Styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import AppRoutes from "./Routes/Routes";
import Theme from "./Styles/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
