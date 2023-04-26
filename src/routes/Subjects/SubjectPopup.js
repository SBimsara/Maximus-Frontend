

import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import CustomCancelButton from '../../components/form/CancelButton';

export default function SubjectPopup(props) {
    const { open, onClose } = props;


    const handleClose = () => {
        onClose(false);
      };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
          Add Subject
          <Box sx={{
            flexGrow: 1, display: 'flex', justifyContent: 'flex-end',
          }}>

            <CustomCancelButton  onClick={handleClose}/>
          </Box>

        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please enter details to add a new subject.
          </DialogContentText>

          <Box sx={{
            display: "flex",
            flexDirection: 'column'
          }}>
            <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{ mt: 2 }}  />
            <TextField id="outlined-basic" label="Grade" variant="outlined" sx={{ mt: 2 }} />
            
            
          </Box>



        </DialogContent>
        <DialogActions sx={{ mr: 2 }}>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#e0e0e0",
              color: "#000",
              '&:hover': {
                backgroundColor: "#bdbdbd",
                color: "#000",
              }
            }}>Cancel</Button>
          <Button variant="contained" disableElevation onClick={() => { handleClose(); }}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
