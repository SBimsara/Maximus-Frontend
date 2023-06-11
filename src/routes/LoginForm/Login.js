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
  const paperStyle = { padding: 20, height: '60vh', minwidth: '300px', width: '70%', maxwidth: '500px', margin: "20px auto", borderRadius: 20 };
  const btnStyle = { margin: '8px 0' };

  // ...
const handleLogin = () => {
  // Perform validation if needed
  if (username === '' || password === '') {
    setErrorMessage('Please enter username and password');
    return;
  }

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
        setErrorMessage('Login successful!');
      } else {
        setErrorMessage('Invalid username or password');
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
            {/* Login container. */}
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '-45px', marginTop: '3px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} className="login-container">
              <Typography variant="h4" align="center" gutterBottom color="#f1f1f1" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                Welcome to Quizzer!
              </Typography>
            </Grid>
            {/* Login form container. */}
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ marginTop: '32px' }}>
                <Typography variant="h5" gutterBottom>
                  Already have an account?
                </Typography>
                <form onSubmit={e => e.preventDefault()}>
                {/*Username and password text fields. */}
                <TextField label='Username' placeholder="Enter username" fullWidth required={true} style={{ marginTop: 8 }}autoComplete="username"value={username}
                    onChange={e => setUsername(e.target.value)} />&nbsp;
                <TextField label='Password' placeholder="Enter password" type='password' fullWidth required={true} style={{ marginTop: 8 }} autoComplete="current-password"value={password}
                    onChange={e => setPassword(e.target.value)}/>&nbsp;
                {/* Sign in button */}
                <Button type='Submit' color='primary' variant="contained" style={btnStyle} fullWidth onClick={handleLogin}>Sign in</Button>&nbsp;
                {/* Forgot password link. */}
                </form>
                {errorMessage && <Typography>{errorMessage}</Typography>}
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
