import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient'; 
import logo from '../assets/images/BB-image.png';
import text from '../assets/images/BB-text.png'; 

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
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={logo} alt="Brain Buster Logo" style={{ height: '50px', marginRight: '10px' }} />
          <img src={text} alt="Brain Buster Text" style={{ height: '30px', marginRight: '10px' }} />
        </Box>
        <Box>
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
              mb: 2,
              ml: 1
            }}
          >
            Home
          </Button>
          {/* <Button
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
              mb: 2,
              ml: 1
            }}
          >
            Profile
          </Button> */}
          <Button
            color="inherit"
            sx={{
              backgroundColor: '#FE819F',
              color: '#050505',
              '&:hover': {
                backgroundColor: '#E06A89'
              },
              mt: 3,
              mb: 2,
              ml: 1
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
