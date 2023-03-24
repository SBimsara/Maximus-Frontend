import React from "react";
import { BsNewspaper } from "react-icons/bs";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { margin } from "@mui/system";

function PasswordResetForm() {

    const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "20px auto" }
    const btnStyle = { margin: '8px 0' }

    return (
        <div>
            {/*<div className="passwordResetForm">
          <h1>PasswordResetForm</h1>
          <BsNewspaper className="page-icon" />
      </div>*/}
            <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
                <Paper elevation={10} style={paperStyle}>
                    <h2 style={{ textAlign: "center" }}>Reset Password</h2>&nbsp;
                    <TextField label='New Password' placeholder="Enter new password" fullWidth required />&nbsp;
                    <TextField label='Confirm Password' placeholder="Enter new password again" type='password' fullWidth required />&nbsp;
                    <Button type='Submit' color='primary' variant="contained" style={btnStyle} fullWidth>Reset Password</Button>&nbsp;
                </Paper>
            </Grid>
        </div>
    )
}

export default PasswordResetForm;
