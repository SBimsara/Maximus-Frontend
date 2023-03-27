import * as React from 'react';
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

//importing services
import { getData } from '../../services/getData';
import CustomDropdown from '../../components/form/CustomDropdown';

//api links
const url1="http://localhost:8080/api/v1/plan/getAllPlans";
const url2="http://localhost:8080/api/v1/user/getUsers";



export default function Popup(props) {
//  const [open, setOpen] = useState(state);
  
  

//  const handleClickOpen = () => {
//    setOpen();
//  };

const { open, onClose } = props;

const handleClose = () => {
  onClose(false);
};

//  const [age, setAge] = useState('');

const [grade,setGrade] = useState([]);
const [subject,setSubject] = useState([]);

  const handleSubChange = (event) => {
    setSubject(event.target.ariaValueNow);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  async function getSubjects () {
    const result = await getData(url1);
    setSubject(result);
  }

  async function getGrades () {
    const result = await getData(url2);
    setGrade(result);
  }

  useEffect(() => {
    getSubjects();
    getGrades();
  },[])

  const handleSelectedSubject = (data1) => {
    console.log(data1);
  }

  const handleSelectedGrade = (data2) => {
    console.log(data2);

  }

  const handleConfirm = () => {
    
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
        Add Subjects
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
          {/*<Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={subject}
          defaultValue=""
          label="subject"
          onChange={handleSubChange}
          displayEmpty
        >
          <MenuItem value="" disabled>select a Subject</MenuItem>
          {subject.map((data) => {
            return(
              <MenuItem key={data.id} value={data.id}>{data.name}</MenuItem>
            );
          })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> 
        </Select>*/}

        {/* <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={grade}
          label="Grade"
          onChange={handleGradeChange}
          sx={{
            ml:5
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
        {/* <TextField
          label="Select your Subject"
          value={subject}
          onChange={handleSubChange}
          select
          SelectProps={{native:true}}
        >
          {subject.map((data) => {
            return(
              <option key={data.id} value={data.id}>{data.name}</option>
            );
          })}
          
            
        </TextField> */}
        <Box sx={{
          display:"flex"
        }}>
          <CustomDropdown topic={"Select a Subject"} url={url2} onSelect={handleSelectedSubject}/>

          <CustomDropdown topic={"Select a Grade"} url={url2} onSelect={handleSelectedGrade}/>
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
          <Button  onClick={handleConfirm} variant="contained">Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

