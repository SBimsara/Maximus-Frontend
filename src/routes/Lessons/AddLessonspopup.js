import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
import { saveData } from "../../services/saveData";

const saveURL = "http://localhost:8080/api/v1/user/saveLesson";

function AddLessonsPopup(props) {
  const { data, open, onClose } = props;

  const [lessonName, setLessonName] = useState("");
  const [term, setTerm] = useState(-1);

  const [savedLessonName, setSavedLessonName] = useState("");
  const [savedTerm, setSavedTerm] = useState(-1);

  const [isNameError, setIsNameError] = useState(false);
  const [isTermError, setIsTermError] = useState(false);

  const [shouldRenderButton, setShouldRenderButton] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [nameHelperText, setNameHelperText] = useState("helperText");

  const handleClose = () => {
    setIsNameError(false);
    setNameHelperText("helperText");
    setIsTermError(false);

    setLessonName("");
    setTerm(-1);

    setSavedLessonName("");
    setSavedTerm(-1);

    setShouldRenderButton(false);

    setIsEdit(false);

    onClose(false);
  };

  const handleConfirm = () => {
    if (lessonName === "") {
      setIsNameError(true);
      setNameHelperText("Field cannot be left empty");
    } else {
      setIsNameError(false);
      setNameHelperText("helperText");
    }

    if (term === -1) {
      setIsTermError(true);
    } else {
      setIsTermError(false);
    }

    if (isNameError && isTermError) {
      console.log("access");
      const data = {
        lessonName: lessonName,
        term: term,
      };
      saveLesson(data);
      handleClose();
    }
  };

  async function saveLesson(data) {
    const result = await saveData(saveURL, data);
    console.log(result);
  }

  const handleNameChange = (event) => {
    setLessonName(event.target.value);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    if (data != null) {
      setShouldRenderButton(true);
      setIsEdit(true);
      setLessonName(data.lessonName);
      setTerm(data.term);
    } else {
      setShouldRenderButton(false);
      setIsEdit(false);
    }
  }, [data]);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          {isEdit ? "Edit Lesson" : "Create Lesson"}
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
            Please enter details to create a new lesson.
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
              value={lessonName}
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
              <InputLabel id="demo-select-small-label">Term</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={data != null ? term : undefined}
                label="Age*"
                onChange={handleTermChange}
              >
                <MenuItem value={-1}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Term 1</MenuItem>
                <MenuItem value={2}>Term 2</MenuItem>
                <MenuItem value={3}>Term 3</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
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
