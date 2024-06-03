import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient'; // Import the supabase client
import logo from '../assets/images/BB-image.png';

const MainNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      navigate('/');
    }
  };

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
          to="/dashboard"
          sx={{
            backgroundColor: '#FE819F',
            color: '#050505',
            '&:hover': {
              backgroundColor: '#E06A89'
            },
            mt: 3,
            mb: 2
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/profile"
          sx={{
            backgroundColor: '#FE819F',
            color: '#050505',
            '&:hover': {
              backgroundColor: '#E06A89'
            },
            mt: 3,
            mb: 2
          }}
        >
          Profile
        </Button>
        <Button
          color="inherit"
          sx={{
            backgroundColor: '#FE819F',
            color: '#050505',
            '&:hover': {
              backgroundColor: '#E06A89'
            },
            mt: 3,
            mb: 2
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
