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
import axios from 'axios';
import { useState } from 'react';
import Dashboard from "../Dashboard";


function Login() {
  // Setting up paper and button styles.
  const paperStyle = { padding: 20, height: '60vh', minwidth: '300px', width: '70%', maxwidth: '500px', margin: "20px auto", borderRadius: 20 };
  const btnStyle = { margin: '8px 0' };

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleLogin = async () => {

    // Resetting any previous error messages
    setUsernameError('');
    setPasswordError('');

    // Validating the username and password
    if (!username) {
      setUsernameError('Please enter a username');
      return;
    }

    if (!password) {
      setPasswordError('Please enter a password');
      return;
    }

    // Create an object with the user's information.
    const data = {
      "username": username,
      "password": password,
    };
  }

  async function loginAPI() {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/admin/login');
    console.log(response); // Do something with the response
     // Assuming the login API returns a success status
     setLoggedIn(true); // Set the login status to true
  } catch (error) {
    console.error(error); // Handle any errors that occurred during the API call
  }
};

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
                {/*Username and password text fields. */}
                <TextField label='Username' placeholder="Enter username" fullWidth required={true} style={{ marginTop: 8 }} />&nbsp;
                <TextField label='Password' placeholder="Enter password" type='password' fullWidth required={true} style={{ marginTop: 8 }} />&nbsp;
                {/* Sign in button */}
                <Button type='Submit' color='primary' variant="contained" style={btnStyle} fullWidth onClick={handleLogin}>Sign in</Button> {loggedIn && <Dashboard/>} {/* Render the Dashboard component if logged in */} &nbsp;
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
