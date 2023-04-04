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
import { saveData } from '../../services/saveData';




//url for the saveData
const saveURL="http://localhost:8080/api/v1/plan/savePlan";

export default function PlanPopup(props) {

    const { open, onClose } = props;
    
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [discount,setDiscount] = useState("");



    const handleClose = () => {
      onClose(false);
    };


const handleNameChange = (event) => {
  const valn = event.target.value;

  setName(valn);
}    
    
const handlePriceChange =(event) => {
    const valp = event.target.value;

    priceValidation(valp);
    setPrice(valp);
}
const handleDiscountChange =(event) => {
    const vald = event.target.value;
    setDiscount(vald);
}

const handleConfirmClick = () => {
  const data = {
    "id":1,
    "name":name,
    "price":price,
    "discount":discount
  };
  savePlan(data);
}
async function savePlan(data) {
  const result= await saveData(saveURL,data);
  console.log(result);
}

useEffect(() => {
  savePlan();
},[]) 

const priceValidation = (val) => {
  {(isNumeric(val))
  ?console.log("numeric")
  :console.log("Not a numeric")}
}

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center'}}>
        Add Plan
          <Box sx={{
            flexGrow: 1, display: 'flex', justifyContent: 'flex-end',
          }}>
            
            <CustomCancelButton onClick={handleClose}/>
          </Box>
          
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText>
            Please enter details to create a new plan.
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
        <DialogActions sx={{mr:2}}>
          <Button 
          onClick={handleClose} 
          variant="contained" 
          disableElevation
          sx={{
            backgroundColor:"#e0e0e0",
            color:"#000",
            '&:hover':{
              backgroundColor:"#bdbdbd",
              color:"#000",
            }
            }}>Cancel</Button>
          <Button variant="contained" disableElevation onClick={() => { handleConfirmClick(); handleClose();}}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
