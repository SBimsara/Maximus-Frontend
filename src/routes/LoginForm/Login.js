// Importing necessary components from Material-UI library.
import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
// Importing custom styles.
import './Styles/LoginStyles.css';
import Dashboard from "../Dashboard";
import { useState } from 'react';


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Setting up paper and button styles.
  const paperStyle = { padding: 20, height: '64vh', minwidth: '300px', width: '70%', maxwidth: '500px', margin: "20px auto", borderRadius: 20 };
  const btnStyle = { margin: '8px 0' };

  // ...
const handleLogin = () => {

  // Make the API request
  fetch("http://localhost:8080/api/v1/admin/login", {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.text())  // Read the response as text
    .then(data => {
      console.log(data); // Add this line to inspect the response data
    
      // Handle the response from the backend
      if (data.trim() === 'Login successful!') {
        console.log('Login successful!');
         // Navigate to the dashboard
         window.location.href = "/";
      } else {
        setErrorMessage('Invalid login, please try again');
      }
    })
    .catch(error => {
      console.error('Failed to login:', error);
      setErrorMessage('An error occurred during login');
    });
};
// ...

    
  
  // Rendering Login component.
  return (
    <div style={{ background: '#D0E7F8' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid container spacing={3}>
          {/* Typography and Picture */}
          <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#000000' }}>
  Quizzer
</Typography>

<img src="\assets\images" alt="Quizzer Logo" style={{ width: '200px', height: '200px', marginTop: '20px' }} />

          </Grid>
            {/* Login form container. */}
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ marginTop:'32px' }}>
                <Typography variant="h5" gutterBottom>
                  Already have an account?
                </Typography>
                <form onSubmit={e => e.preventDefault()}>
                {/*Username and password text fields. */}
                <TextField label='Username' placeholder="Enter username" fullWidth required={true} style={{ marginTop: 8 }}autoComplete="username"value={username}
                    onChange={e => setUsername(e.target.value)} error={errorMessage !== ''}
                    className={errorMessage !== '' ? 'error-textfield' : ''}/>&nbsp;
                <TextField label='Password' placeholder="Enter password" type='password' fullWidth required={true} style={{ marginTop: 8 }} autoComplete="current-password"value={password}
                    onChange={e => setPassword(e.target.value)} error={errorMessage !== ''}
                    className={errorMessage !== '' ? 'error-textfield' : ''}/>&nbsp;
                {/* Sign in button */}
                <Button type='Submit' color='primary' variant="contained" style={btnStyle} fullWidth onClick={handleLogin}>Sign in</Button>&nbsp;
                </form>
                {errorMessage && (
                <Typography variant="body2" color="error">
                  {errorMessage}
                </Typography>
              )}&nbsp;
                {/* Forgot password link. */}
                <Typography>
                  <Link to="/PasswordResetForm" className="login-link">Forgot Password?</Link>
                </Typography>&nbsp;
                {/* Signup link. */}
                <Typography>
                  Not Registered? <Link to="/Signup" className="login-link">Create an account</Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login;
