import React, { useEffect } from 'react';
// Importing necessary components from MUI library.
import { Button, Box, Grid, Paper, TextField, Typography } from '@mui/material';
// Importing the 'useState' hook from React.
import { useState } from 'react';
// Importing necessary components from MUI library for form controls.
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// Importing a function named 'saveData' from a file named 'saveData.js' in '../services' directory.
import { saveData } from '../../services/saveData';
import IconButton from '@mui/material/IconButton';





//Url of save data.
const saveURL = "http://localhost:8080/api/v1/admin/saveDetails";

// CSS styles.
function Signup() {
    const paperStyle = { padding: '30px 20px', width: 600, margin: "20px auto", borderRadius: 20 }
    const headerStyle = { margin: 0, color: '#1976d2', fontWeight: 'bold' }
   
  


// State variables.
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [nic, setNic] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isMainAdmin, setIsMainAdmin] = useState(false);
    const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
    const [isLastNameFocused, setIsLastNameFocused] = useState(false);
    const [isDateOfBirthFocused, setIsDateOfBirthFocused] = useState(false);
    const [isNicFocused, setIsNicFocused] = useState(false);
    const [isContactNumberFocused, setIsContactNumberFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        nic: '',
        contactNumber: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleFirstNameChange = (event) => {
        const valf = event.target.value;
        setFirstName(valf);
        if (!valf) {
            setErrors({ ...errors, firstName: 'Please enter your first name ' });
        } else if (!/^[a-zA-Z]+$/.test(valf)) {
            setErrors({ ...errors, firstName: 'First name should contain only alphabetic letters' });
        } else if (valf.length < 2) {
            setErrors({ ...errors, firstName: 'First name should be at least 2 characters long' });
        } else if (valf.length > 50) {
            setErrors({ ...errors, firstName: 'First name should not exceed 50 characters' });
        } else {
            setErrors({ ...errors, firstName: '' });
        }
    }


    const handleLastNameChange = (event) => {
        const vall = event.target.value;
        setLastName(vall);
        if (!vall) {
            setErrors({ ...errors, lastName: 'Please enter your last name ' });
        } else if (!/^[a-zA-Z]+$/.test(vall)) {
            setErrors({ ...errors, lastName: 'Last name should contain only alphabetic letters' });
        } else if (vall.length > 30) {
            setErrors({ ...errors, lastName: 'Last name should not exceed 30 characters' });
        } else {
            setErrors({ ...errors, lastName: '' });
        }
    }

    const handleGenderChange = (event) => {
        const valg = (event.target.value);
        setGender(valg);
        if (!valg) {
            setErrors({ ...errors, gender: 'Please select the gender' });
        }
        else {
            setErrors({ ...errors, gender: '' });
        }
    }

    const handleDateOfBirthChange = (event) => {
        const vald = event.target.value;
        const dateObj = new Date(vald); // Convert the string to a Date object
        setDateOfBirth(dateObj);
        if (!vald) {
            setErrors({ ...errors, dateOfBirth: 'Please enter your date of birth' });
        }
        else if (!isValidDate(dateObj)) {
            setErrors({ ...errors, dateOfBirth: 'Please enter a valid date of birth' });
        }
        else if (!/^\d{4}-\d{2}-\d{2}$/.test(vald)) {
            setErrors({ ...errors, dateOfBirth: 'Please enter the date of birth in YYYY-MM-DD format' });
        }

        else {
            setErrors({ ...errors, dateOfBirth: '' });
        }
    }

    const isValidDate = (date) => {
        const now = new Date();
        return date instanceof Date && !isNaN(date) && date <= now;
    }

    const handleNicChange = (event) => {
        const valn = event.target.value;
        setNic(valn);
        if (!valn) {
            setErrors({ ...errors, nic: 'Please enter your Nic number' });
        }
        else if (!/^\d{9}[Vv]$|^\d{12}$/.test(valn)) {
            setErrors({ ...errors, nic: 'Please enter a valid NIC number' });
        }
        else {
                setErrors({ ...errors, nic: '' });
          }
    }

    const handleContactNumberChange = (event) => {
        const valc = event.target.value;
        setContactNumber(valc);
        if (!valc) {
            setErrors({ ...errors, contactNumber: 'Please enter your contact number' });
        }
        else if (!/^[0-9]{10}$/.test(valc)) {
            setErrors({ ...errors, contactNumber: 'Please enter a valid phone number' });

        }
        else {
                setErrors({ ...errors, contactNumber: '' });
          }
    }



    const handleEmailChange = (event) => {
        const vale = event.target.value;
        setEmail(vale);
        if (!vale) {
            setErrors({ ...errors, email: 'Please enter your email' });
        }
        else if (vale.length < 5) {
            setErrors({ ...errors, email: 'Email address is too short' });
        }
        else if (vale.length > 50) {
            setErrors({ ...errors, email: 'Email address is too long' });
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vale)) {
            setErrors({ ...errors, email: 'Please enter a valid email address' });
        }
        else {
                setErrors({ ...errors, email: '' });
              }
          }

    


    const handleUsernameChange = (event) => {
        const valu = event.target.value;
        setUsername(valu);
        
        if (!valu) {
            setErrors({ ...errors, username: 'Please enter a username' });
        }
        else if (valu.length < 4 || valu.length > 20) {
            setErrors({ ...errors, username: "Username must be between 4 and 20 characters" });
        }
        else if (!/^[a-zA-Z0-9_]{4,20}$/.test(valu)) {
            setErrors({ ...errors, username: 'Username may only contain letters, numbers, and underscores' });
        }
        else {
            setErrors({ ...errors, username: '' });
              
    }
}

    const handlePasswordChange = (event) => {
        const valp = event.target.value;
        setPassword(valp);
        if (!valp) {
            setErrors({ ...errors, password: 'Please enter a password' });
        }
        else if (valp.length < 8) {
            setErrors({ ...errors, password: 'Password must be at least 8 characters long' });
        }
        else if (!/[A-Z]/.test(valp)) {
            setErrors({ ...errors, password: 'Password must contain at least one uppercase letter' });
        }
        else if (!/[a-z]/.test(valp)) {
            setErrors({ ...errors, password: 'Password must contain at least one lowercase letter' });
        }
        else if (!/(?=.*\d)/.test(valp)) {
            setErrors({ ...errors, password: 'Password must contain at least one number' });
        }
        else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(valp)) {
            setErrors({ ...errors, password: 'Password must contain at least one special character(e.g. !, @, #, $, %, etc.) ' });
        }
        else {
            setErrors({ ...errors, password: '' });
        }
    }




    const handleConfirmPasswordChange = (event) => {
        const valo = event.target.value;
        setConfirmPassword(valo);
        if (!valo) {
            setErrors({ ...errors, confirmPassword: 'Please confirm the password' });
        }
        else if (valo !== password) {
            setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
        }
        else {
            setErrors({ ...errors, confirmPassword: '' });
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent form submission.

        
        // Check for errors in each form field.
        let firstNameError = '';
        if (!firstName) {
            firstNameError = 'Please enter your first name';
        }

        let lastNameError = '';
        if (!lastName) {
            lastNameError = 'Please enter your last name';
        }

        let genderError = '';
        if (!gender) {
            genderError = 'Please select the gender';
        }

        let dateOfBirthError = '';
        if (!dateOfBirth) {
            dateOfBirthError = 'Please enter your date of birth';
        }

        let nicError = '';
        if (!nic) {
            nicError = 'Please enter your NIC number';
        }

        let contactNumberError = '';
        if (!contactNumber) {
            contactNumberError = 'Please enter your contact number';
        }

        let emailError = '';
        if (!email) {
            emailError = 'Please enter your email';
        }

        let usernameError = '';
        if (!username) {
            usernameError = 'Please enter a username';
        }


        let passwordError = '';
        if (!password) {
            passwordError = 'Please enter a password';
        }

        let confirmPasswordError = '';
        if (!confirmPassword) {
            confirmPasswordError = 'Please confirm the password';
        }



        // Set errors in state.
        setErrors({ firstName: firstNameError, lastName: lastNameError, gender: genderError, dateOfBirth: dateOfBirthError, nic: nicError, contactNumber: contactNumberError, email: emailError, username: usernameError, password: passwordError, confirmPassword: confirmPasswordError });

        // If there are no errors, submit the form.
        if (!firstNameError && !lastNameError && !genderError && !dateOfBirthError && !nicError && !contactNumberError && !emailError && !usernameError && !passwordError && !confirmPasswordError) {
            try {
                // Send form data to server using fetch.
                const response = await fetch('/saveDetails', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, gender, dateOfBirth, nic, contactNumber, email, username, password, confirmPassword }),
                });
                if (response.ok) {
                    // The form was submitted successfully
                    setIsSubmitted(true);
                } else {
                    throw new Error('Failed to submit form');
                }
            } catch (error) {
                // An error occurred while submitting the form
                setError('An error occurred while submitting the form');
            }

        }
    };

    const handleReset = () => {
        // Reset the form by setting `isSubmitted` to false
        setIsSubmitted(false);
    };





    const handleFocusFirstName = () => {
        setIsFirstNameFocused(true);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(false);
        setIsContactNumberFocused(false);
        setIsEmailFocused(false);
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);

    };

    const handleFocusLastName = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(true);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(false);
        setIsContactNumberFocused(false);
        setIsEmailFocused(false);
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);

    };

    const handleFocusDateOfBirth = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(true);
        setIsNicFocused(false);
        setIsContactNumberFocused(false);
        setIsEmailFocused(false);
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);
    };

    const handleFocusNic = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(true);
        setIsContactNumberFocused(false);
        setIsEmailFocused(false);
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);
    };

    const handleFocusContactNumber = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(false);
        setIsContactNumberFocused(true);
        setIsEmailFocused(false);
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);
    };

    const handleFocusEmail = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(false);
        setIsContactNumberFocused(false);
        setIsEmailFocused(true);
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);

    };
    const handleFocusUsername = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(false);
        setIsContactNumberFocused(false);
        setIsEmailFocused(false);
        setIsUsernameFocused(true);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);

    };

    const handleFocusPassword = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(false);
        setIsContactNumberFocused(false);
        setIsEmailFocused(false);
        setIsUsernameFocused(false);
        setIsPasswordFocused(true);
        setIsConfirmPasswordFocused(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    

    const handleFocusConfirmPassword = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(false);
        setIsContactNumberFocused(false);
        setIsEmailFocused(false);
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(true);
    };



    const handleBlur = () => {
        setIsFirstNameFocused(false);
        setIsLastNameFocused(false);
        setIsDateOfBirthFocused(false);
        setIsNicFocused(false);
        setIsContactNumberFocused(false);
        setIsEmailFocused(false);
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);
    };

    

    // This function handles saving the user's signup information.
    const handleSaveSignup = async () => {
        // Create an object with the user's information.
        const data = {
          "firstName": firstName,
          "lastName": lastName,
          "gender": gender,
          "dateOfBirth": dateOfBirth,
          "nic": nic,
          "contactNumber": contactNumber,
          "email": email,
          "username": username,
          "password": password,
          "confirmPassword": confirmPassword,
          "isMainAdmin": isMainAdmin
        };
      
        try {
          // Call the Signup function with the data object.
          const response = await Signup(data);
          console.log(response);
          // Set the isSubmitted state to true or perform any other actions upon successful signup.
          setIsSubmitted(true);
        } catch (error) {
          console.log(error);
          // Handle any errors that occur during signup.
        }
      };
      
      // This function sends a POST request to the server to save the data.
      async function Signup(data) {
        const response = await saveData(saveURL, data);
        return response;
      }
      
      


    return (
        <div style={{ background: '#D0E7F8' }}>
            {isSubmitted ? (
                <div style={{ background: '#D0E7F8', padding: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h5" align="center">Thank you for your interest in becoming a member! We will review your application and inform you of your eligibility.</Typography>&nbsp;
                    <Button variant="contained" color="primary" onClick={handleReset}>
                        Go back
                    </Button>
                </div>


            ) : (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Paper elevation={20} style={paperStyle}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} style={{ textAlign: 'center' }}>
                                    <h2 style={headerStyle}>Sign Up</h2>
                                    <Typography variant='caption' gutterBottom color='#3f51b5'>Please fill this form to create an account !</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='First Name' placeholder="Enter first name"
                                    error={Boolean(errors.firstName)}
                                        helperText={errors.firstName}
                                        FormHelperTextProps={{
                                            style: errors.firstName ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.firstName ? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusFirstName,
                                            onBlur: handleBlur,
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.firstName ? (isFirstNameFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isFirstNameFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },
                                        }}
                                        onChange={handleFirstNameChange}
                                         />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Last Name' placeholder="Enter last name" style={{ marginTop: '-0.5px' }} error={Boolean(errors.lastName)}
                                        helperText={errors.lastName}
                                        FormHelperTextProps={{
                                            style: errors.lastName ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.lastName ? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusLastName,
                                            onBlur: handleBlur,
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.lastName ? (isLastNameFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isLastNameFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },

                                        }} onChange={handleLastNameChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl component="fieldset" fullWidth >
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender" value={gender}
                                            onChange={handleGenderChange} >
                                            <Grid container direction="row">
                                                <Grid item>
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                </Grid>
                                                <Grid item>
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                        {errors.gender && (
                                            <Typography color="#ff0000" variant="caption">
                                                {errors.gender}
                                            </Typography>)}
                                    </FormControl>&nbsp;
                                    <TextField fullWidth label='NIC Number' placeholder="Enter NIC Number" autoComplete='off' error={Boolean(errors.nic)}
                                        helperText={errors.nic}
                                        FormHelperTextProps={{
                                            style: errors.nic ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.nic ? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusNic,
                                            onBlur: handleBlur,
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.nic ? (isNicFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isNicFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },

                                        }} onChange={handleNicChange} />&nbsp;
                                    <TextField fullWidth label='E-mail' placeholder="Enter e-mail" error={Boolean(errors.email)}
                                        helperText={errors.email}
                                        FormHelperTextProps={{
                                            style: errors.email ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.email ? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusEmail,
                                            onBlur: handleBlur,
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.email ? (isEmailFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isEmailFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },

                                        }} onChange={handleEmailChange} />&nbsp;
                                    <TextField fullWidth label='Password' placeholder="Enter password"type={showPassword ? 'text' : 'password'} autoComplete='off' error={Boolean(errors.password)}
                                        helperText={errors.password}
                                        FormHelperTextProps={{
                                            style: errors.password ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.password ? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusPassword,
                                            onBlur: handleBlur,
                                            endAdornment: (
                                                <IconButton edge="end" onClick={togglePasswordVisibility}>
                                                </IconButton>
                                              ),
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.password ? (isPasswordFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isPasswordFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },

                                        }} onChange={handlePasswordChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Date of Birth' placeholder="YYYY-MM-DD   eg:1999-02-13" style={{ marginBottom: '10px', marginTop: '7px' }} autoComplete='off' error={Boolean(errors.dateOfBirth)}
                                        helperText={errors.dateOfBirth}
                                        FormHelperTextProps={{
                                            style: errors.dateOfBirth ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.dateOfBirth ? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusDateOfBirth,
                                            onBlur: handleBlur,
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.dateOfBirth ? (isDateOfBirthFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isDateOfBirthFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },
                                        }} onChange={handleDateOfBirthChange} />&nbsp;
                                    <TextField fullWidth label='Contact Number' placeholder="Enter contact number" error={Boolean(errors.contactNumber)}
                                        helperText={errors.contactNumber}
                                        FormHelperTextProps={{
                                            style: errors.contactNumber ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.contactNumber ? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusContactNumber,
                                            onBlur: handleBlur,
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.contactNumber ? (isContactNumberFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isContactNumberFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },
                                        }} onChange={handleContactNumberChange} />&nbsp;
                                    <TextField fullWidth label='Username' placeholder="Enter username" autoComplete='off' error={Boolean(errors.username)}
                                        helperText={errors.username}
                                        FormHelperTextProps={{
                                            style: errors.username ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.username? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusUsername,
                                            onBlur: handleBlur,
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.username ? (isUsernameFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isUsernameFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },
                                        }} onChange={handleUsernameChange} />&nbsp;
                                    <TextField fullWidth label='Confirm Password' placeholder="Enter password again"type={showPassword ? 'text' : 'password'} autoComplete='off' error={Boolean(errors.confirmPassword)}
                                        helperText={errors.confirmPassword}
                                        FormHelperTextProps={{
                                            style: errors.confirmPassword ? { color: '#ff0000' } : {}
                                        }}
                                        InputProps={{
                                            style: {
                                                color: 'initial',
                                                borderBottomColor: errors.confirmPassword ? '#ff0000' : 'initial',
                                            },
                                            onFocus: handleFocusConfirmPassword,
                                            onBlur: handleBlur,
                                            endAdornment: (
                                                <IconButton edge="end" onClick={togglePasswordVisibility}>
                                                </IconButton>
                                              ),
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: errors.confirmPassword ? (isConfirmPasswordFocused ? '#ff0000' : 'rgba(0, 0, 0, 0.54)') : (isConfirmPasswordFocused ? '#1976d2' : 'rgba(0, 0, 0, 0.54)')
                                            },
                                        }} onChange={handleConfirmPasswordChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <Button type='submit' variant='contained' color='primary' style={{ marginTop: '0.5px' }} onClick={handleSaveSignup}>Sign up</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Box>
            )}
        </div>
    )
}

export default Signup;