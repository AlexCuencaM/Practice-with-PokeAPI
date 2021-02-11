import React, { ReactElement } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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