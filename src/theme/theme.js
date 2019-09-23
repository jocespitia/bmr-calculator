import {createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';


export const theme = createMuiTheme({
  palette: {
    primary: {main: '#D5D0CD'},
    secondary: {main: "#D5D0CD"},
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});