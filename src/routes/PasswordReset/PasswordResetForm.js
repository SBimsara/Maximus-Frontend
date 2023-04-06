import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import './PasswordResetStyles.css';

function ResetPassword() {
  // Define the style for the paper element.
  const paperStyle = {
    padding: 20,
    height: '70vh',
    minWidth: '300px',
    width: '70%',
    maxWidth: '500px',
    margin: "20px auto",
    borderRadius: 20
  };

  return (
    <div style={{ background: '#D0E7F8' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
        <Paper elevation={10} style={paperStyle}>
          <div style={{ marginTop: '32px' }}>
            <Typography variant="h4" align="center" gutterBottom color="primary" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
              Forgot Password
            </Typography>
            {/* Input field for the username. */}
            <TextField label='Username' placeholder="Enter username" fullWidth required={true} style={{ marginTop: 8 }} />&nbsp;
            {/* Input field for the new password. */}
            <TextField label='New Password' placeholder="Enter new password" fullWidth required={false} style={{ marginTop: 8 }} />&nbsp;
            {/* Input field for confirming the new password. */}
            <TextField label='Confirm Password' placeholder="Confirm new password" fullWidth required={false} style={{ marginTop: 8 }} />&nbsp;
             {/* Button to submit the form. */}
            <Button type='Submit' color='primary' variant="contained" fullWidth style={{ marginTop: 8 }}>Reset Password</Button>&nbsp;
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
            {/* Link to go back to the login page */}
            <Link to="/login" className="passwordResetForm-link">Back to Sign In</Link>
          </div>
        </Paper>
      </Grid>
    </div>
  )
}

export default ResetPassword;
