import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, CssBaseline } from '@mui/material';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error('Login error:', error);
        alert(error.message);
    } else if (data) {
        console.log('Login successful:', data);
        navigate('/dashboard');
    } else {
        console.log('No error and no user - unusual case');
    }
};


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 3,
                    backgroundColor: '#021E45', 
                    borderRadius: 2,
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)'
                }}
            >
                <Typography component="h1" variant="h5" sx={{ color: '#ffffff', mb: 3 }}>
                    Welcome to Brain Buster
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        input: { color: '#ffffff' },
                        label: { color: '#ffffff' }, 
                        '& label.Mui-focused': { color: '#ffffff' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#ffffff' }, 
                            '&:hover fieldset': { borderColor: '#ffffff' }, 
                            '&.Mui-focused fieldset': { borderColor: '#ffffff' },
                        }
                    }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        input: { color: '#ffffff' },
                        label: { color: '#ffffff' },
                        '& label.Mui-focused': { color: '#ffffff' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#ffffff' },
                            '&:hover fieldset': { borderColor: '#ffffff' },
                            '&.Mui-focused fieldset': { borderColor: '#ffffff' },
                        }
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3, mb: 2,
                        backgroundColor: '#FE819F', 
                        '&:hover': { backgroundColor: '#E06A89' } 
                    }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default LoginForm;
