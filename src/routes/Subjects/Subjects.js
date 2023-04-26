/*
import {useState, useEffect} from 'react';
import './Subjects.css';
import { saveData } from '../../services/saveData';

//url for the saveData
const saveURL="http://localhost:8090/api/v1/user/saveSubject";

function App() {
  const [formVal, setFormVal] = useState([{subject:'', grade:''}])
  
  const addRow = () => {
    setFormVal([...formVal, {subject:'', grade:''}])
  }
  
  const onRemove=(i) => {
    const newForm = [...formVal]
    newForm.splice(i, 1)
    setFormVal(newForm)
  }
  
  const onHandle = (e, i) => {
    let newForm = [...formVal]
    newForm[i][e.target.name]= e.target.value
    setFormVal(newForm)
  }
  
  const formValidation=(formVal)=>{
    const data = [...formVal]
    let valid = true
    
    for (let index = 0; index < data.length; index++) {
      if(data[index].subject.trim() === "") {
        data[index].subjectCheck = "Subject name required"
        valid = false
      } else {
        data[index].subjectCheck = ""
      }

      if(data[index].grade.trim() === "") {
        data[index].gradeCheck = "Grade required"
        valid = false
      } else if(data[index].grade !== "10" && data[index].grade !== "11") {
        data[index].gradeCheck = "Invalid Grade"
        valid = false
      } else {
        data[index].gradeCheck = ""
      }
    }
    
    setFormVal(data)
    return valid
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitData", formVal)
    const errorRes = formValidation(formVal)
    console.log("errorRes", errorRes)
    if(errorRes) {
      // api call
      createSaveSubject();
      

    } else {
      // error msg

      console.log("Error");
    }
  }
    const createSaveSubject = () => {
      const subject = {
        "id": 2,
        "subjectname": formVal.subject,
        "grade": formVal.grade
      }
      saveSubject(subject)
    }
    async function saveSubject(data) {
      const result= await saveData(saveURL,data);
      console.log(result);
    }
    
    useEffect(() => {
      saveSubject();
    },[])
  
  
  return (
    <>
    <div className="App">
      <div className="form-container">
        <h2>Add a Subject</h2>
        <form onSubmit={onSubmit}>
          {formVal.map((item, i)=> (
            <div className="form-row" key={i}>
              <div className="form-group">
                <label>Subject Name</label>
                <input type="text" name="subject" value={item.subject || ""} onChange={(e)=> onHandle(e, i)}/>
                <div className="error-message">{item.subjectCheck}</div>
              </div>

              <div className="form-group">
                <label>Grade (10/11)</label>
                <input type="text" name="grade" value={item.grade || ""} onChange={(e)=>onHandle(e, i)}/>
                <div className="error-message">{item.gradeCheck}</div>
              </div>

              {
                i === 0 ? "" :  <button className="remove-btn" onClick={()=>onRemove(i)}>Remove</button>

              }
            </div>
          ))}
          <div className="form-actions">
            <button className="add-row-btn" onClick={addRow}>Add Subject</button>
            <button className="submit-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
*/
//react imports
import React from 'react';
import { useState, useEffect } from "react";

//component impots
import CustomEditButton from '../../components/ui/EditIconButton';
import CustomDeleteButton from '../../components/ui/DeleteIconButton';


//custom style imports
import { PageContainer } from '../Plans/styles/AddPlans.styles';

//data-grid imports
import { DataGrid } from '@mui/x-data-grid';


//mui imports
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

//reusable function imports
import { getData } from '../../services/getData';
import { handleEditClick2 } from '../../utils/EditIconBtnFunctions';

//icon imports
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SubjectPopup from './SubjectPopup';

//url for the saveData
const saveURL="http://localhost:8090/api/v1/user/saveSubject";

//columns for the data-grid
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Subject', width: 200 },
  { field: 'price', headerName: 'Grade', width: 200 },
  
  {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (cellValues) => {
          return (
              <>
                   <Box sx={{
                      mr: 1
                  }}>
                      <CustomEditButton onClick={() => {handleEditClick2()}}/>
                  </Box> 

                  <CustomDeleteButton />

              </>
          )
      }
  },
]

function Subjects () {
  const [rows, setRows] = useState([]);
  const [openPopup,setOpenPopup] = useState(false);

  const handleSubjectPopup = () => {
    setOpenPopup(true);
  }

  useEffect(()=>{
    getSubjects();
  },[])

  async function getSubjects(){
    setRows(await getData(saveURL));
  }
   
 return (
    <>
      <PageContainer>
            <Box sx={{mb:2}}>
            <Button variant='outlined' startIcon={<AddCircleIcon /> } onClick={handleSubjectPopup}>Add Subject</Button>
            </Box>
            {/* <PlanPopup open={openPopup} onClose={setOpenPopup}/> */}
            <SubjectPopup open={openPopup} onClose={setOpenPopup}/>
            <div style={{
                height: 400,
                width: '90%',

            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                /> 
            </div>
            </PageContainer>
    </>
  )
}

export default Subjects;


