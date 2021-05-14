import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./src/theme"

// eslint-disable-next-line react/prop-types
const StyleguidistMuiThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default StyleguidistMuiThemeWrapper;