import React from "react";
import { BsNewspaper } from "react-icons/bs";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Password } from "@mui/icons-material";
import { margin } from "@mui/system";
import { Link } from 'react-router-dom';

function Login() {

    const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "20px auto" }
    const btnStyle = { margin: '8px 0' }
    
  
  return (
    <div>
    {/*<div className="login">
          <h1>Login</h1>
          <BsNewspaper className="page-icon" />
  </div>*/}
        <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
      <Paper elevation={10} style={paperStyle}>
      <h2 style={{ textAlign: "center" }}>Sign In</h2>&nbsp;
        <TextField label='Username' placeholder="Enter username" fullWidth required />&nbsp;
        <TextField label='Password' placeholder="Enter password" type='password' fullWidth required />&nbsp;
        <Button type='Submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign in</Button>&nbsp;
        <Typography>
        <Link to="/PasswordResetForm">Forgot Password?</Link>
        </Typography>&nbsp;
        <Typography> Not Registered?&nbsp;
          <Link href="#" >
            Create an Account
          </Link>
        </Typography>
      </Paper>
    </Grid>
    </div>

  )
}

export default Login
