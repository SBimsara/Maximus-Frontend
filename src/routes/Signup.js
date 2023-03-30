import React from 'react';
import { Button, Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { BsNewspaper } from "react-icons/bs";
import { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function Signup() {
    const paperStyle = { padding: '30px 20px', width: 600, margin: "20px auto",borderRadius:20 }
    const headerStyle = { margin: 0 ,color: '#1976d2',fontWeight:'bold' }
    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <div style={{background:'#D0E7F8' }}>
            {/*<div className="signup">
          <h1>Signup</h1>
          <BsNewspaper className="page-icon" />
  </div>*/}
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Paper elevation={20} style={paperStyle}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <h2 style={headerStyle}>Sign Up</h2>
                            <Typography variant='caption' gutterBottom color='#3f51b5'>Please fill this form to create an account !</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='First Name' placeholder="Enter first name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Last Name' placeholder="Enter last name" style={{ marginTop: '-0.5px' }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleGenderChange}>
                                    <Grid container direction="row">
                                        <Grid item>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>&nbsp;
                            <TextField fullWidth label='ID Number' placeholder="Enter ID number" />&nbsp;
                            <TextField fullWidth label='E-mail' placeholder="Enter e-mail" />&nbsp;
                            <TextField fullWidth label='Password' placeholder="Enter password" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Date of Birth' placeholder="Enter date of birth" style={{ marginBottom: '9px' }} />&nbsp;
                            <TextField fullWidth label='Contact Number' placeholder="Enter contact number" />&nbsp;
                            <TextField fullWidth label='Username' placeholder="Enter username" />&nbsp;
                            <TextField fullWidth label='Confirm Password' placeholder="Enter password again" />
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
