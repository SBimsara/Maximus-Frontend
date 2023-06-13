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

import { useState, useEffect } from "react";

//importing services
import { getData } from '../../services/getData';
import CustomDropdown from '../../components/form/CustomDropdown';
import { saveData } from '../../services/saveData';



import axios from "axios";

//api links
const url1 = "http://localhost:8080/api/v1/plan/getAllPlans";
const url2 = "http://localhost:8080/api/v1/user/getUsers";

const getALLSubjects = "http://localhost:8080/api/v1/user/getSubjects";



export default function Popup(props) {
  //  const [open, setOpen] = useState(state);



  //  const handleClickOpen = () => {
  //    setOpen();
  //  };

  const { pid,open, onClose } = props;

  const handleClose = () => {
    onClose(false);
  };

  //  const [age, setAge] = useState('');

  const [grade, setGrade] = useState([]);
  const [subjectID, setSubjectID] = useState(-1);

  // const handleSubChange = (event) => {
  //   setSubject(event.target.ariaValueNow);
  // };

  // const handleGradeChange = (event) => {
  //   setGrade(event.target.value);
  // };

  async function getSubjects() {
    const result = await getData(getALLSubjects);
    console.log(result)
    //setSubject(result.content.subjectname);
  }

  async function getGrades() {
    const result = await getData(url2);
    setGrade(result.content);
  }

  useEffect(() => {
    getSubjects();
    getGrades();
  }, [])

  const handleSelectedSubject = (data1) => {
    setSubjectID(data1.id);

    console.log(data1.id);
    console.log(pid);

  }

  async function addNewSubject (){
    const result = await axios.put(`http://localhost:8080/api/v1/plan/addSubject/plans/${pid}/subjects/${subjectID}`);
    console.log(result);
  }

  const handleSelectedGrade = (data2) => {
    setGrade(data2.name);
    console.log(grade);

  }

  const handleConfirm = () => {
    
  }

  // function to add subjects to the plan
  async function addSubject(subData) {
    const result = await saveData(url2, subData);
    console.log(result);
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

            <CustomCancelButton onClick={handleClose} />
          </Box>

        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please select a subject and a grade to add a subject.
          </DialogContentText>

          <Box sx={{
            display: "flex"
          }}>
            <CustomDropdown topic={"Select a Subject"} url={getALLSubjects} onSelect={handleSelectedSubject} />

            {/* <CustomDropdown topic={"Select a Grade"} url={url1} onSelect={handleSelectedGrade} /> */}
          </Box>



        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"

            sx={{
              backgroundColor: "#e0e0e0",
              color: "#000",
              '&:hover': {
                backgroundColor: "#bdbdbd",
                color: "#000",
              }
            }}>Cancel</Button>
          <Button onClick={addNewSubject} variant="contained">Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
