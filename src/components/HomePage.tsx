import { AppBar, Toolbar, Typography, Button, Box, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/BB-image.png';
const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline /> {/* Resets the CSS */}
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
                            backgroundColor: '#FE819F', // Set the background color
                            color: '#050505', // Set the text color
                            marginLeft: 1,
                            '&:hover': {
                                backgroundColor: '#E06A89' // Optional: Darker shade of pink on hover
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
                            backgroundColor: '#FE819F', // Set the background color
                            color: '#050505', // Set the text color
                            marginLeft: 1,
                            '&:hover': {
                                backgroundColor: '#E06A89' // Optional: Darker shade of pink on hover
                            },
                            mt: 3,
                            mb: 2
                        }}
                    >
                        Signup
                    </Button>

                </Toolbar>
            </AppBar>
            <Box sx={{ bgcolor: 'background.default', minHeight: '90vh', p: 3 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
                    Welcome to Brain Buster
                </Typography>
                <Typography variant="h1" sx={{ color: 'secondary.main', marginBottom: 2 }}>
                    Your Ultimate Quiz Companion!
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                    "Challenge your knowledge, explore new topics, and master the subjects with our curated quizzes."
                </Typography>
            </Box>
        </Box>
    );
};

export default HomePage;
