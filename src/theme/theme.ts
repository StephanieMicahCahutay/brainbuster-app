import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#021E45',
    },
    secondary: {
      main: '#52B0FF',
    },
    background: {
      default: '#FFCFCA',
      paper: '#ffffff',
    },
    text: {
      primary: '#050505',
      secondary: '#FAFAFA',
    },
  },
});

export default theme;
