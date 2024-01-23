import { useState } from 'react';
import { Paper, Typography, TextField, Button, Container, CssBaseline } from '@mui/material';
import login_recharge from '../assets/login_recharge.avif';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters long and contain at least one digit
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Validation
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password should be at least 8 characters long and contain at least one digit, one upper case character, one lower case character and one special character.');
      return;
    }

    // Add your more complex authentication logic here, such as calling an authentication API

    console.log('Logging in with:', { email, password });
    window.location.href = '/UserHomePage';
  };

  return (
    <div style={{ backgroundColor: '#B5FDE2', width: '100%', height: '100%' }}>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CssBaseline />
        <Paper elevation={3} sx={{ padding: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px' }}>
          <div style={{ position: 'relative', width: '100%', marginBottom: 2 }}>
            <img src={login_recharge} alt="Login Recharge" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }} style={{ fontSize: 20, fontStyle: 'italic', textShadow: '1px 1px #78FBCA', color: 'darkgreen' }}>
            User Login
          </Typography>
          <TextField
            label="Email"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
            style={{ height: 50 }}
            color='success'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <TextField
            label="Password"
            id="filled-basic"
            variant="filled"
            margin="normal"
            type="password"
            color='success'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          <Link to='/UserHomePage'><Button variant="contained" fullWidth onClick={handleLogin} sx={{ marginTop: 2 }} style={{ backgroundColor: '#78FBCA', color: 'black', width: 150, borderRadius: 20 }}>
            Login
          </Button></Link>
          <p>New User? <Link to="/SignUp">Register Here!</Link></p>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;
