import { Button, TextField, Box, Typography, Container, CssBaseline } from '@mui/material';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '../schemas';

const LoginForm = () => {
    const setUser = useStore((state) => state.setUser);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const handleLogin = async (data: LoginSchema) => {
        const { email, password } = data;
        const { data: loginData, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error('Login error:', error);
            alert(error.message);
        } else if (loginData) {
            console.log('Login successful:', loginData);
            if (loginData.user) {
                setUser({ id: loginData.user.id, email: loginData.user.email || '' });
                navigate('/dashboard');
            } else {
                console.log('No user data - unusual case');
            }
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
                <form onSubmit={handleSubmit(handleLogin)}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
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
                            }
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
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
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default LoginForm;
