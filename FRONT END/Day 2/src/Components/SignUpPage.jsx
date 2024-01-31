import { useState } from 'react';
import { Paper, Typography, TextField, Button, Container, CssBaseline, MenuItem, FormControl, InputLabel, Select, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import login_recharge from '../assets/login_recharge.avif';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is user
  const [showPassword, setShowPassword] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    // You can add more specific validation for mobile number if needed
    return mobileNumber.length === 10 && /^\d+$/.test(mobileNumber);
  };

  const handleSignUp = () => {
    // Reset errors
    setUsernameError('');
    setEmailError('');
    setMobileNumberError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validation
    if (!username) {
      setUsernameError('Please enter a username.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!validateMobileNumber(mobileNumber)) {
      setMobileNumberError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    // Add your more complex sign-up logic here, such as calling a sign-up API
    console.log('Signing up with:', { username, email, mobileNumber, password, role });
    window.location.href = '/Login';
    
  };


  return (
    <div style={{ backgroundColor: '#B5FDE2', width: '100%', height: '100%' }}>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <CssBaseline />
        <Paper elevation={3} sx={{ padding: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px', overflowY: 'scroll', overflow:'hidden' }}>
          <div style={{ position: 'relative', width: '100%', marginBottom: 2 }}>
            <img src={login_recharge} alt="Login Recharge" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', marginTop: '-10' }} />
          </div>
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }} style={{ fontSize: 20, fontStyle: 'italic', textShadow: '1px 1px #78FBCA' }}>
            Register
          </Typography>
          <TextField
            label="Username"
            variant="filled"
            margin="normal"
            fullWidth
            style={{ height: 50 }}
            color='success'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={Boolean(usernameError)}
            helperText={usernameError}
          />
          <TextField
            label="Email"
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
            label="Mobile Number"
            variant="filled"
            margin="normal"
            fullWidth
            style={{ height: 50 }}
            color='success'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            error={Boolean(mobileNumberError)}
            helperText={mobileNumberError}
          />
          <TextField
            label="Password"
            variant="filled"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            color='success'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            variant="filled"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            color='success'
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="role-label" color='success'>Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              label="Role"
              color='success'
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="user" color='success'>User</MenuItem>
              <MenuItem value="admin" color='success'>Admin</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" fullWidth onClick={handleSignUp} sx={{ marginTop: 2 }} style={{ backgroundColor: '#78FBCA', color: "black", width: 150, borderRadius: 20 }}>
            Sign Up
          </Button>
          <p style={{ paddingTop: 20 }}>Already Registered? <Link to='/Login'>Login Here!</Link></p>
        </Paper>
      </Container>
    </div>
  );
};

export default SignUpPage;
