import { AppBar, Toolbar, Typography, Button, Box, CssBaseline, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/BB-image.png';
import text from '../assets/images/BB-text.png'; 

const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar position="static" color="primary" sx={{ width: '100%', margin: 0 }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Brain Buster Logo" style={{ height: '50px', marginRight: '10px' }} />
                        <img src={text} alt="Brain Buster Text" style={{ height: '30px', marginRight: '10px' }} />
                    </Box>
                    <Box>
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
                    </Box>
                </Toolbar>
            </AppBar>
            <Container sx={{ bgcolor: 'background.default', minHeight: '90vh', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', textAlign: 'center' }}>
                    Welcome to Brain Buster
                </Typography>
                <Typography variant="h2" sx={{ color: 'secondary.main', marginBottom: 2, textAlign: 'center' }}>
                    Your Ultimate Quiz Companion!
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.primary', textAlign: 'center', maxWidth: '600px' }}>
                    "Challenge your knowledge, explore new topics, and master the subjects with our curated quizzes."
                </Typography>
            </Container>
        </Box>
    );
};

export default HomePage;
