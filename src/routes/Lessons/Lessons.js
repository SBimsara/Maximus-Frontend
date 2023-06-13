import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import CustomDeleteButton from "../../components/ui/DeleteIconButton";
import CustomEditButton from "../../components/ui/EditIconButton";

import { getData } from "../../services/getData";
import { getDataById } from "../../services/getDataById";
import { PageContainer } from "../Plans/styles/AddPlans.styles";
import AddLessonsPopup from "./AddLessonspopup";

const getURL = "http://localhost:8090/getalllessons";
const getDataURL = "http://localhost:8090/lesson/";
const deleteURL = "";

function Lessons() {
  const [rows, setRows] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [data, setData] = useState(null);

  const [selectedSubjectName, setSelectedSubjectName] = useState("");
  const [selectedGradeName, setSelectedGradeName] = useState("");
  const [selectedTermName, setSelectedTermName] = useState("");

  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [selectedGradeId, setSelectedGradeId] = useState("");
  const [selectedTermId, setSelectedTermId] = useState("");

  const handleEditLessonClick = async (id) => {
    const result = await getDataById(getDataURL, id);
    setData(result);
    setOpenPopup(true);
  };

  async function getLessonById(lessonId) {
    const result = await getDataById(getDataURL, lessonId);
    setData(result);
    return result;
  }

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getLessonById(id);
    }
    getLessons();
  }, [id]);

  const deleteLesson = async (id) => {
    await axios.delete(`http://localhost:8090/lesson/${id}`);
    getLessons();
  };

  async function getLessons() {
    const result = await getData(getURL);
    const rowsWithIds = result.map((row) => ({
      ...row,
      id: row.lesson_id,
      subject_name: row.subject.subject_name,
      grade_name: row.grade.grade_name,
      term_name: row.term.term_name,
    }));
    setRows(rowsWithIds);
  }
  const handleAddLessonClick = (
    selectedSubjectId,
    selectedSubjectName,
    selectedGradeId,
    selectedGradeName,
    selectedTermId,
    selectedTermName
  ) => {
    if (data) {
      setOpenPopup(true);
    } else {
      setData(null);
      setOpenPopup(true);
      setSelectedSubjectId(selectedSubjectId);
      setSelectedSubjectName(selectedSubjectName);
      setSelectedGradeId(selectedGradeId);
      setSelectedGradeName(selectedGradeName);
      setSelectedTermId(selectedTermId);
      setSelectedTermName(selectedTermName);
    }
  };

  //columns for the data-grid
  const columns = [
    { field: "lesson_id", headerName: "ID", width: 100 },
    { field: "lesson_name", headerName: "Lesson", width: 200 },
    {
      field: "grade_name",
      headerName: "Grade",
      width: 200,
      valueGetter: (params) => params.row.grade.grade_name,
    },
    {
      field: "subject_name",
      headerName: "Subject",
      width: 200,
      valueGetter: (params) => params.row.subject.subject_name,
    },
    {
      field: "term_id",
      headerName: "Term",
      width: 200,
      valueGetter: (params) => params.row.term.term_name,
    },

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
                  handleEditLessonClick(row.lesson_id);
                }}
              />
            </Box>
            <Box
              sx={{
                mr: 1,
              }}
            ></Box>

            <CustomDeleteButton
              onClick={() => {
                deleteLesson(row.lesson_id);
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
            onClick={handleAddLessonClick}
          >
            Add Lesson
          </Button>
        </Box>
        <AddLessonsPopup
          data={data}
          open={openPopup}
          onClose={setOpenPopup}
          onSelectedSubject={handleAddLessonClick}
          onSelectedGrade={handleAddLessonClick}
          onSelectedTerm={handleAddLessonClick}
          selectedSubjectName={selectedSubjectName}
          selectedGradeName={selectedGradeName}
          selectedTermName={selectedTermName}
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

export default Lessons;
