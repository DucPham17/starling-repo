import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2D3436',
      contrastText: '#DFE6E9',
    },
    secondary: {
      main: '#DFE6E9',
      contrastText: '#2D3436',
    },
    danger: {
      main: '#FF7373',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFE24E',
      contrastText: '#2D3436',
    }
  },
});

export default theme;