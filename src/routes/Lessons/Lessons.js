// import {useState} from 'react';
// import './Lessons.css';

// function App() {
//   const [formVal, setFormVal] = useState([{subject:'', lesson: '', grade:''}])

//   const addRow = () => {
//     setFormVal([...formVal, {subject:'', lesson: '', grade:''}])
//   }

//   const onRemove = (i) => {
//     const newForm = [...formVal]
//     newForm.splice(i, 1)
//     setFormVal(newForm)
//   }

//   const onHandle = (e, i) => {
//     let newForm = [...formVal]
//     newForm[i][e.target.name]= e.target.value
//     setFormVal(newForm)
//   }

//   const formValidation = (formVal) => {
//     const data = [...formVal]
//     let valid = true

//     for (let index = 0; index < data.length; index++) {
//       if(data[index].subject.trim() === "") {
//         data[index].subjectCheck = "Subject name required"
//         valid = false
//       } else {
//         data[index].subjectCheck = ""
//       }

//       if(data[index].lesson.trim() === "") {
//         data[index].lessonCheck = "Lesson name required"
//         valid = false
//       } else {
//         data[index].lessonCheck = ""
//       }

//       if(data[index].grade.trim() === "") {
//         data[index].gradeCheck = "Grade required"
//         valid = false
//       } else if(data[index].grade !== "10" && data[index].grade !== "11") {
//         data[index].gradeCheck = "Invalid Grade"
//         valid = false
//       } else {
//         data[index].gradeCheck = ""
//       }
//     }

//     setFormVal(data)
//     return valid
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitData", formVal)
//     const errorRes = formValidation(formVal)
//     console.log("errorRes", errorRes)
//     if(errorRes) {
//       // api call
//     } else {
//       // error msg
//     }
//   }

//   return (
//     <div className="App">
//       <div className="form-container">
//         <h2>Add a Lesson</h2>
//         <form onSubmit={onSubmit}>
//           {formVal.map((item, i)=> (
//             <div className="form-row" key={i}>
//               <div className="form-group">
//                 <label>Subject Name</label>
//                 <input type="text" name="subject" value={item.subject || ""} onChange={(e)=> onHandle(e, i)}/>
//                 <div className="error-message">{item.subjectCheck}</div>
//               </div>

//               <div className="form-group lesson-group">
//                 <label>Lesson Name</label>
//                 <input type="text" name="lesson" value={item.lesson || ""} onChange={(e)=> onHandle(e, i)}/>
//                 <div className="error-message">{item.lessonCheck}</div>
//               </div>

//               <div className="form-group">
//                 <label>Grade (10/11)</label>
//                 <input type="text" name="grade" value={item.grade || ""} onChange={(e)=>onHandle(e, i)}/>
//                 <div className="error-message">{item.gradeCheck}</div>
//               </div>

//               {
//                 i === 0 ? "" : <button className="remove-btn" onClick={()=>onRemove(i)}>Remove</button>
//               }
//             </div>
//           ))}
//           <div className="form-actions">
//           <button className="add-row-btn" onClick={addRow}>Add Lesson</button>
//             <button className="submit-btn" type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";

import { useState, useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import CustomDeleteButton from "../../components/ui/DeleteIconButton";
import CustomEditButton from "../../components/ui/EditIconButton";

import { PageContainer } from "../Plans/styles/AddPlans.styles";
import { getData } from "../../services/getData";
import AddLessonsPopup from "./AddLessonspopup";
import { getDataById } from "../../services/getDataById";
import { deleteDatabyId } from "../../services/deleteDataById";

const getURL = "http://localhost:8080/api/v1/user/getLessons";
const getDataURL = "http://localhost:8080/api/v1/user/getLessonByLessonId/";
const deleteURL = "";

function Lessons() {
  const [rows, setRows] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [data, setData] = useState(null);

  //columns for the data-grid
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "lessonName", headerName: "Lesson", width: 200 },
    { field: "term", headerName: "Term", width: 200 },
    { field: "subjectname", headerName: "Subject", width: 200 },

    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <>
            <Box
              sx={{
                mr: 1,
              }}
            >
              <CustomEditButton
                onClick={() => {
                  handleEditLessonClick(cellValues.id);
                }}
              />
            </Box>
            <Box
              sx={{
                mr: 1,
              }}
            ></Box>

            <CustomDeleteButton onClick={() => {deleteDatabyId(deleteURL,cellValues.id)}} />
          </>
        );
      },
    },
  ];

  const handleEditLessonClick = (lessonId) => {
    getLessonById(lessonId);
    setOpenPopup(true);
  };

  async function getLessonById(lessonId) {
    const result = await getDataById(getDataURL, lessonId);
    setData(result);
  }

  useEffect(() => {
    getLessons();
  }, []);

  async function getLessons() {
    const result = await getData(getURL);
    setRows(result);
  }
  const handleAddLessonClick = () => {
    setOpenPopup(true);
  };

  return (
    <>
      <PageContainer>
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<AddCircleIcon />}
            onClick={handleAddLessonClick}
          >
            Add Lesson
          </Button>
        </Box>
        <AddLessonsPopup data={data} open={openPopup} onClose={setOpenPopup} />
        <div
          style={{
            height: 400,
            width: "90%",
          }}
        >
          <DataGrid rows={rows} columns={columns} />
        </div>
      </PageContainer>
    </>
  );
}

export default Lessons;
