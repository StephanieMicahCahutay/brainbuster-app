import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/BB-image.png'; 

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ width: '100%', margin: 0 }}>
      <Toolbar>
        <img src={logo} alt="Brain Buster Logo" style={{ height: '50px', marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Brain Buster
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{
            backgroundColor: '#FE819F',
            color: '#050505',
            marginLeft: 1,
            '&:hover': {
              backgroundColor: '#E06A89'
            },
            mt: 3,
            mb: 2
          }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/signup"
          sx={{
            backgroundColor: '#FE819F',
            color: '#050505',
            marginLeft: 1,
            '&:hover': {
              backgroundColor: '#E06A89'
            },
            mt: 3,
            mb: 2
          }}
        >
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
