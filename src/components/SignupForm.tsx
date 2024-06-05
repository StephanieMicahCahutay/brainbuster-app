import React, { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  CssBaseline,
} from '@mui/material';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    console.log('Signup attempt:', data, error);

    if (error) {
      alert(error.message);
    } else if (data) {
      navigate('/dashboard');
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
          boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
          color: '#ffffff',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign Up to Brain Buster
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
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
            },
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
          autoComplete="new-password"
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
            },
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            input: { color: '#ffffff' },
            label: { color: '#ffffff' },
            '& label.Mui-focused': { color: '#ffffff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ffffff' },
              '&:hover fieldset': { borderColor: '#ffffff' },
              '&.Mui-focused fieldset': { borderColor: '#ffffff' },
            },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: '#FE819F',
            '&:hover': { backgroundColor: '#E06A89' },
          }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;
