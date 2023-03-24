import React from 'react';
import { Button, Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { BsNewspaper } from "react-icons/bs";

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 600, margin: "20px auto" }
    const headerStyle = { margin: 0 }

    return (
        <div>
            {/*<div className="signup">
          <h1>Signup</h1>
          <BsNewspaper className="page-icon" />
  </div>*/}
            <Box display="flex" justifyContent="center" alignItems="center" height="90vh">
                <Paper elevation={20} style={paperStyle}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <h2 style={headerStyle}>Sign Up</h2>
                            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='First Name' placeholder="Enter first name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Last Name' placeholder="Enter last name" style={{ marginTop: '0.5px' }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Date of Birth' placeholder="Enter date of birth" />&nbsp;
                            <TextField fullWidth label='Contact Number' placeholder="Enter contact number" />&nbsp;
                            <TextField fullWidth label='Username' placeholder="Enter username" />&nbsp;
                            <TextField fullWidth label='Confirm Password' placeholder="Enter password again" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='ID Number' placeholder="Enter ID number" />&nbsp;
                            <TextField fullWidth label='E-mail' placeholder="Enter e-mail" />&nbsp;
                            <TextField fullWidth label='Password' placeholder="Enter password" />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button type='submit' variant='contained' color='primary' style={{ marginTop: '0.5px' }}>Sign up</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </div>
    )
}

export default Signup;
