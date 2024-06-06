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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupSchema } from '../schemas';

const SignupForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const handleSignup = async (data: SignupSchema) => {
    const { email, password } = data;
    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log('Signup attempt:', signUpData, error);

    if (error) {
      alert(error.message);
    } else if (signUpData) {
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
        <form onSubmit={handleSubmit(handleSignup)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            autoComplete="email"
            autoFocus
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
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
            id="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
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
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            autoComplete="new-password"
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
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
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignupForm;
