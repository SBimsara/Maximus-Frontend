import React from "react";
import { BsNewspaper } from "react-icons/bs";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import './LoginStyles.css';

function Login() {
  const paperStyle = { padding: 20, height: '60vh',minwidth:'300px', width: '70%',maxwidth:'500px', margin: "20px auto" ,borderRadius:20};
  const btnStyle = { margin: '8px 0' };

  return (
    <div style={{background:'#D0E7F8' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', marginBottom: '-45px',marginTop: '3px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'  }}className="login-container">
            <Typography variant="h4" align="center" gutterBottom color="#f1f1f1" style={{ fontWeight: 'bold',fontSize: '2.5rem' }}>
  Welcome to Quizzer!
</Typography>

            </Grid>
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ marginTop: '32px' }}>
              <Typography variant="h5" gutterBottom>
                Already have an account?
              </Typography>
              <TextField label='Username' placeholder="Enter username" fullWidth required={true} style={{ marginTop: 8 }} />&nbsp;
              <TextField label='Password' placeholder="Enter password" type='password' fullWidth required={true} style={{ marginTop: 8 }} />&nbsp;
              <Button type='Submit' color='primary' variant="contained" style={btnStyle} fullWidth component={Link} to="/">Sign in</Button>&nbsp;
              <Typography>
                <Link to="/PasswordResetForm" className="login-link">Forgot Password?</Link>
              </Typography>&nbsp;
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
