import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import CustomCancelButton from "../../components/form/CancelButton";

const saveURL = "http://localhost:8090/lesson";
const updateURL = "http://localhost:8090/lesson/";

function AddLessonsPopup(props) {
  const {
    data,
    open,
    onClose,
    onSelectedSubject,
    onSelectedGrade,
    onSelectedTerm,
    selectedSubjectName,
    selectedGradeName,
    selectedTermName,
  } = props;

  const [lessonName, setLessonName] = useState("");
  const [grade, setGrade] = useState([]);
  const [subject, setSubject] = useState([]);
  const [term, setTerm] = useState([]);

  const [selectedGradeId, setSelectedGradeId] = useState("");
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [selectedTermId, setSelectedTermId] = useState("");

  useEffect(() => {
    loadGrades();
    loadSubjects();
    loadTerms();
  }, []);

  const loadGrades = async () => {
    try {
      const result = await axios.get("http://localhost:8090/grades");
      setGrade(result.data);
    } catch (error) {
      console.error("Failed to load grades:", error);
    }
  };
  const loadSubjects = async () => {
    try {
      const result = await axios.get("http://localhost:8090/subjects");
      setSubject(result.data);
    } catch (error) {
      console.error("Failed to load subjects:", error);
    }
  };
  const loadTerms = async () => {
    try {
      const result = await axios.get("http://localhost:8090/terms");
      console.log(result.data);
      setTerm(result.data);
    } catch (error) {
      console.error("Failed to load terms:", error);
    }
  };

  const handleGradeChange = (event) => {
    const selectedGradeId = event.target.value;
    setSelectedGradeId(selectedGradeId);
    onSelectedGrade(selectedGradeId, event.target.textContent);
  };
  const handleSubjectChange = (event) => {
    const selectedsubjectId = event.target.value;
    setSelectedSubjectId(selectedsubjectId);
    onSelectedSubject(selectedsubjectId, event.target.textContent);
  };
  const handleTermChange = (event) => {
    const selectedTermId = event.target.value;
    setSelectedTermId(selectedTermId);
    onSelectedTerm(selectedTermId, event.target.textContent);
  };

  const [savedLessonName, setSavedLessonName] = useState("");
  const [savedTerm, setSavedTerm] = useState("");

  const [isNameError, setIsNameError] = useState(false);
  const [isTermError, setIsTermError] = useState(false);

  const [shouldRenderButton, setShouldRenderButton] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [nameHelperText, setNameHelperText] = useState("helperText");

  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setIsNameError(false);
    setIsTermError(false);

    setLessonName("");
    setSelectedGradeId("");
    setSelectedSubjectId("");
    setSelectedTermId("");
    // setTerm([0]);
    window.location.reload();
    onClose(false);
  };

  const handleNameChange = (event) => {
    setLessonName(event.target.value);
  };

  // const handleTermChange = (event) => {
  //   setTerm(event.target.value);
  // };

  const handleConfirm = async (e) => {
    e.preventDefault();
    // const selectedGradeElement = document.getElementById("grade");
    // const selectedSubjectElement = document.getElementById("subject");
    // const selectedTermElement = document.getElementById("term");

    if (
      !lessonName &&
      !selectedGradeId &&
      !selectedSubjectId &&
      !selectedTermId
    ) {
      // const selectedGradeId = selectedGradeElement.value;
      // const selectedSubjectId = selectedSubjectElement.value;
      // const selectedTermId = selectedTermElement.value;

      setIsNameError(!lessonName);
      setNameHelperText(!lessonName ? "Lesson name is required" : "helperText");

      return;
    }
    try {
      if (data) {
        const updatedLesson = {
          lesson_id: data.id,
          lesson_name: lessonName,
          grade: {
            grade_id: selectedGradeId,
          },
          subject: {
            subject_id: selectedSubjectId,
          },
          term: {
            term_id: selectedTermId,
          },
        };
        await axios.put(`${updateURL}${data.lesson_id}`, updatedLesson);
        console.log("Lesson updated successfully");

        handleClose();
        window.location.reload();
      } else {
        const newLesson = {
          lesson_name: lessonName,
          grade: {
            grade_id: selectedGradeId,
          },
          subject: {
            subject_id: selectedSubjectId,
          },
          term: {
            term_id: selectedTermId,
          },
        };
        const result = await axios.post(saveURL, newLesson);
        console.log("Lesson added successfully", result.data);
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to add/update lesson data:", error);
      setErrorMessage("*required");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          {data ? "Edit Lesson" : "Add Lesson"}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CustomCancelButton onClick={handleClose} />
          </Box>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please enter details to {data ? "edit Lesson" : "add Lesson"}.
          </DialogContentText>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={lessonName || ""}
              error={isNameError}
              helperText={nameHelperText}
              onChange={handleNameChange}
              sx={{
                mt: 2,
                "& .MuiFormHelperText-root": {
                  visibility:
                    nameHelperText === "helperText" ? "hidden" : "visible",
                  //height: nameHelperText ? "1rem" : 0,
                  // marginTop: nameHelperText ? "0.5rem" : 0,
                },
              }}
            />
            <FormControl fullWidth sx={{ mt: 0.8 }} error={isTermError}>
              <InputLabel id="grade-label">Grade</InputLabel>
              <Select
                labelId="grade-label"
                id="grade"
                value={selectedGradeId || ""}
                label="Grade*"
                onChange={handleGradeChange}
                required={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {grade.map((grade) => (
                  <MenuItem key={grade.grade_id} value={grade.grade_id}>
                    {grade.grade_name}
                  </MenuItem>
                ))}
              </Select>
              {errorMessage && (
                <FormHelperText className="space">
                  {errorMessage}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mt: 0.8 }} error={isTermError}>
              <InputLabel id="subject-label">Subject</InputLabel>
              <Select
                labelId="subject-label"
                id="subject"
                value={selectedSubjectId || ""}
                label="Subject*"
                onChange={handleSubjectChange}
                required={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {subject.map((subject) => (
                  <MenuItem key={subject.subject_id} value={subject.subject_id}>
                    {subject.subject_name}
                  </MenuItem>
                ))}
              </Select>
              {errorMessage && (
                <FormHelperText className="space">
                  {errorMessage}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mt: 0.8 }} error={isTermError}>
              <InputLabel id="term-label">Term</InputLabel>
              <Select
                labelId="term-label"
                id="term"
                value={selectedTermId || ""}
                label="Term*"
                onChange={handleTermChange}
                required={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {term.map((term) => (
                  <MenuItem key={term.term_id} value={term.term_id}>
                    {term.term_name}
                  </MenuItem>
                ))}
              </Select>
              {errorMessage && (
                <FormHelperText className="space">
                  {errorMessage}
                </FormHelperText>
              )}
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              backgroundColor: "#e0e0e0",
              color: "#000",
              "&:hover": {
                backgroundColor: "#bdbdbd",
                color: "#000",
              },
            }}
          >
            Cancel
          </Button>
          {shouldRenderButton && <Button variant="contained">Reset</Button>}
          <Button variant="contained" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddLessonsPopup;
