
//react imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//component impots
import CustomDeleteButton from "../../components/ui/DeleteIconButton";
import CustomEditButton from "../../components/ui/EditIconButton";
import CustomViewButton from "../../components/ui/ViewIconButton";
import EditSubjectPopup from "./EditSubjectPopup";
import SubjectPopup from "./SubjectPopup";

//custom style imports
import { PageContainer } from "../Plans/styles/AddPlans.styles";

//data-grid imports
import { DataGrid } from "@mui/x-data-grid";

//mui imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

//api function imports
import { getData } from "../../services/getData";

//reusable function imports
import { viewLessons } from "../../utils/ViewIconBtnFunctions";
//icon imports
import AddCircleIcon from "@mui/icons-material/AddCircle";

import axios from "axios";

//url for the saveData
const getAllURL = "http://localhost:8090/subjects";
const saveURL = "http://localhost:8090/api/v1/user/saveSubject";
const subjectDelURL = "http://localhost:8090/subject/";
const getURL = "http://localhost:8090/subject/";

function Subjects() {
  const [rows, setRows] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [subjectData, setSubjectData] = useState(null);

  const [subjectId, setSubjectId] = useState(-1);

  const [isClicked, setIsClicked] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getSubjects();
  }, []);

  async function getSubjects() {
    const result = await getData(getAllURL);
    const rowsWithIds = result.map((row) => ({
      ...row,
      id: row.subject_id,
    }));
    console.log(result);
    setRows(rowsWithIds);
  }

  const deleteSubject = async (id) => {
    await axios.delete(`http://localhost:8090/subject/${id}`);
    getSubjects();
  };

  async function getSubjectById(id) {
    try {
      const data = await axios.get(`http://localhost:8090/subject/${id}`);
      setSubjectData(data);
      console.log(data);
      handleOpenEditPopup();
    } catch (error) {
      console.log(error);
    }
    // console.log(result);
  }

  const handleOpenEditPopup = (data) => {
    setSubjectData(data);
    setOpenEditPopup(true);
  };

  const handleSubjectPopup = () => {
    setOpenPopup(true);
  };

  //columns for the data-grid
  const columns = [
    { field: "subject_id", headerName: "ID", width: 100 },
    { field: "subject_name", headerName: "Subject", width: 200 },

    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        const { row } = params;
        return (
          <>
            <Box
              sx={{
                mr: 1,
              }}
            >
              <CustomEditButton
                onClick={() => {
                  handleOpenEditPopup(row);
                }}
              />
            </Box>
            <Box
              sx={{
                mr: 1,
              }}
            >
              <CustomViewButton onClick={viewLessons} />
            </Box>

            <CustomDeleteButton
              onClick={() => {
                deleteSubject(row.subject_id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <PageContainer>
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<AddCircleIcon />}
            onClick={handleSubjectPopup}
          >
            Add Subject
          </Button>
        </Box>
        {/* <PlanPopup open={openPopup} onClose={setOpenPopup}/> */}
        <SubjectPopup open={openPopup} onClose={setOpenPopup} />
        <EditSubjectPopup
          data={subjectData}
          open={openEditPopup}
          onClose={setOpenEditPopup}
        />
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

export default Subjects;
