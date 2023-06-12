import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import './PasswordResetStyles.css';
import IconButton from '@mui/material/IconButton';


function ResetPassword() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState('');
  const [confirmNewPasswordErrorMessage, setConfirmNewPasswordErrorMessage] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);
  const [isConfirmNewPasswordFocused, setIsConfirmNewPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [usernameError, setUsernameError] = useState('');


  const [errors, setErrors] = useState({
    username: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  // Define the style for the paper element.
  const paperStyle = {
    padding: 20,
    height: '65vh',
    minWidth: '300px',
    width: '70%',
    maxWidth: '500px',
    margin: "20px auto",
    borderRadius: 20
  };

  const handleUsernameChange = (event) => {
    const valu = event.target.value;
    setUsername(valu);

    if (!valu) {
      setErrors({ ...errors, username: 'Please enter a username' });
    } else {
      setErrors({ ...errors, username: '' });
    }

    // Clear the username error when the username is changed
  if (usernameError) {
    setUsernameError('');
  }

  // Update the username state
  setUsername(valu);
  };

  const handleNewPasswordChange = (event) => {
    const valp = event.target.value;
    setNewPassword(valp);

    // Validation logic for new password
    if (!valp) {
      setErrors({ ...errors, newPassword: 'Please enter a new password' });
    } else if (valp.length < 8) {
      setErrors({ ...errors, newPassword: 'Password must be at least 8 characters long' });
    } else if (!/[A-Z]/.test(valp)) {
      setErrors({ ...errors, newPassword: 'Password must contain at least one uppercase letter' });
    } else if (!/[a-z]/.test(valp)) {
      setErrors({ ...errors, newPassword: 'Password must contain at least one lowercase letter' });
    } else if (!/(?=.*\d)/.test(valp)) {
      setErrors({ ...errors, newPassword: 'Password must contain at least one number' });
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(valp)) {
      setErrors({ ...errors, newPassword: 'Password must contain at least one special character (e.g., !, @, #, $, %, etc.)' });
    } else {
      setErrors({ ...errors, newPassword: '' });
    }
  };

  const handleConfirmNewPasswordChange = (event) => {
    const valo = event.target.value;
    setConfirmNewPassword(valo);

    // Validation logic for confirming new password
    if (!valo) {
      setErrors({ ...errors, confirmNewPassword: 'Please confirm the password' });
    } else if (valo !== newPassword) {
      setErrors({ ...errors, confirmNewPassword: 'Passwords do not match' });
    } else {
      setErrors({ ...errors, confirmNewPassword: '' });
    }
  };

  const handleResetPassword = () => {
     // Perform validations
  let usernameError = '';
  if (!username) {
    usernameError = 'Please enter your username';
  }

  let newPasswordError = '';
  if (!newPassword) {
    newPasswordError = 'Please enter a new password';
  }

  let confirmNewPasswordError = '';
  if (!confirmNewPassword) {
    confirmNewPasswordError = 'Please confirm the password';
  }

  // Set errors in state
  setErrors({
    username: usernameError,
    newPassword: newPasswordError,
    confirmNewPassword: confirmNewPasswordError
  });

  // Check if there are any errors
  if (usernameError || newPasswordError || confirmNewPasswordError) {
    return; // Exit the function if there are errors
  }

    // API request to reset password
    try {
      fetch('http://localhost:8080/api/v1/admin/resetPassword', {
        method: 'POST',
        body: JSON.stringify({ username, newPassword, confirmNewPassword }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.text();
          } else if (response.status === 404) {
            throw new Error('Invalid username');
          } else {
            throw new Error('Failed to reset password');
          }
        })
        .then(data => {
          if (data == 'success') {
            console.log('Password reset successful!');

          } else {
            setErrorMessage(data);
          }
        })
        .catch(error => {
          console.error('Failed to reset password:', error);
          setErrorMessage(error.message);
          if (error.message === 'Invalid username') {
            setUsernameError('Invalid username');
          } else {
            setUsernameError('');
          }
        });
    } catch (error) {
      console.error('Failed to reset password:', error);
      setErrorMessage('An error occurred during password reset');
    }
  };    
    
  const handleFocusUsername = () => {
    setIsUsernameFocused(true);
    setIsNewPasswordFocused(false);
    setIsConfirmNewPasswordFocused(false);
  };


  const handleFocusNewPassword = () => {
    setIsUsernameFocused(false);
    setIsNewPasswordFocused(true);
    setIsConfirmNewPasswordFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocusConfirmNewPassword = () => {
    setIsUsernameFocused(false);
    setIsNewPasswordFocused(false);
    setIsConfirmNewPasswordFocused(true);
  };

  const handleBlur = () => {
    setIsUsernameFocused(false);
    setIsNewPasswordFocused(false);
    setIsConfirmNewPasswordFocused(false);
  };

  return (
    <div style={{ background: '#D0E7F8' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
        <Paper elevation={10} style={paperStyle}>
          <div style={{ marginTop: '32px' }}>
            <Typography variant="h4" align="center" gutterBottom color="primary" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
              Forgot Password
            </Typography>
            {/* Input field for the username */}
            <TextField
  label='Username'
  placeholder="Enter username"
  fullWidth
  required={true}
  autoComplete='off'
  error={Boolean(errors.username) || Boolean(usernameError)}
  helperText={errors.username || usernameError}
  FormHelperTextProps={{
    style: {
      color: (errors.username || usernameError) ? '#ff0000' : 'inherit',
    },
  }}
  InputProps={{
    style: {
      color: (errors.username || usernameError) ? 'initial' : 'initial',
      borderBottomColor: (errors.username || usernameError) ? '#ff0000' : 'initial',
    },
    onFocus: handleFocusUsername,
    onBlur: handleBlur,
  }}
  InputLabelProps={{
    style: {
      color: (errors.username || usernameError) ? (isUsernameFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isUsernameFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)'),
    },
  }}
  onChange={handleUsernameChange}
/>&nbsp;


            {/* Input field for the new password */}
            <TextField
              label='New Password'
              placeholder="Enter new password"
              fullWidth
              required={true}
              type={showPassword ? 'text' : 'password'}
              autoComplete='off'
              error={Boolean(errors.newPassword)}
              helperText={errors.newPassword}
              FormHelperTextProps={{
                style: errors.newPassword ? { color: '#ff0000' } : {}
              }}
              InputProps={{
                style: {
                  color: 'initial',
                  borderBottomColor: errors.newPassword ? '#ff0000' : 'initial',
                },
                onFocus: handleFocusNewPassword,
                onBlur: handleBlur,
                endAdornment: (
                  <IconButton edge="end" onClick={togglePasswordVisibility}>
                  </IconButton>
                ),
              }}
              InputLabelProps={{
                style: {
                  color: errors.newPassword ? (isNewPasswordFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isNewPasswordFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                },
              }}
              onChange={handleNewPasswordChange}
            />&nbsp;
           {/* Input field for confirming the new password */}
           <TextField
              label='Confirm Password'
              placeholder="Confirm new password"
              fullWidth
              required={true}
              type={showPassword ? 'text' : 'password'}
              autoComplete='off'
              error={Boolean(errors.confirmNewPassword)}
              helperText={errors.confirmNewPassword}
              FormHelperTextProps={{
                style: errors.confirmNewPassword ? { color: '#ff0000' } : {}
              }}
              InputProps={{
                style: {
                  color: 'initial',
                  borderBottomColor: errors.confirmNewPassword ? '#ff0000' : 'initial',
                },
                onFocus: handleFocusConfirmNewPassword,
                onBlur: handleBlur,
                endAdornment: (
                  <IconButton edge="end" onClick={togglePasswordVisibility}>
                    {/* Add your icon here */}
                  </IconButton>
                ),
              }}
              InputLabelProps={{
                style: {
                  color: errors.confirmNewPassword ? (isConfirmNewPasswordFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isConfirmNewPasswordFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                },
              }}
              onChange={handleConfirmNewPasswordChange}
            />&nbsp;
            {/* Button to submit the form */}
            <Button type='Submit' color='primary' variant="contained" fullWidth style={{ marginTop: 10 }} onClick={handleResetPassword}>
              Reset Password
            </Button>
          </div>
        </Paper>
      </Grid>
      </div>
  );
}

export default ResetPassword;