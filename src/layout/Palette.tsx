import React, { ReactElement } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { green } from '@material-ui/core/colors';
type PaletteProps = {
  children: ReactElement;
}
export default function Palette(props:PaletteProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
    const theme = React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
              main:prefersDarkMode ? green[700]: green[400],
            },
          },
          

        }),
      [prefersDarkMode],
    );
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {props.children}
      </ThemeProvider>
    );
  }