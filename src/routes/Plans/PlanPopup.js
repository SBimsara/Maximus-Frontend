import React from 'react'
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

import {useState,useEffect} from "react";

export default function PlanPopup(props) {

    const { open, onClose } = props;
    


const handleClose = () => {
  onClose(false);
};

const handleNameChange = (e) => {
    const val= e.target.value;
    console.log(val);
}
const handlePriceChange =(e) => {
    const val= e.target.value;
    console.log(val);
}
const handleDiscountChange =(e) => {
    const val= e.target.value;
    console.log(val);
}
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
        Add Plan
          <Box sx={{
            flexGrow: 1, display: 'flex', justifyContent: 'flex-end'
          }}>
            
            <CustomCancelButton onClick={handleClose}/>
          </Box>
          
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText>
            Please select a subject and a grade to add a subject.
          </DialogContentText>
          
        <Box sx={{
            display:"flex",
            flexDirection: 'column'
        }}>
          <TextField id="outlined-basic" label="Name" variant="outlined" sx={{mt:2}} onChange={handleNameChange}/>
          <TextField id="outlined-basic" label="Price" variant="outlined" sx={{mt:2}} onChange={handlePriceChange}/>
          <TextField id="outlined-basic" label="Discount" variant="outlined" sx={{mt:2}} onChange={handleDiscountChange}/>
        </Box>
        


        </DialogContent>
        <DialogActions>
          <Button 
          onClick={handleClose} 
          variant="contained" 
          sx={{
            backgroundColor:"#e0e0e0",
            color:"#000",
            '&:hover':{
              backgroundColor:"#bdbdbd",
              color:"#000",
            }
            }}>Cancel</Button>
          <Button   variant="contained">Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
