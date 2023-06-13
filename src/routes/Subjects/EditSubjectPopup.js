import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import axios from "axios";
import CustomCancelButton from "../../components/form/CancelButton";

const getURL = "http://localhost:8090/api/v1/user/getUserBySubjectId/";
const updateURL = "http://localhost:8090/subject/";

export default function EditSubjectPopup(props) {
  const { data, open, onClose } = props;

  //use state for mui text field values
  const [subject, setSubject] = useState("");
  // const [grade, setGrade] = useState("");

  //use satte for mui test field 'saved' values
  const [savedSubject, setSavedSubject] = useState("");
  const [savedGrade, setSavedGrade] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  const handleClose = () => {
    console.log(data);
    onClose(false);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    setIsDisabled(false);
  };

  // const handleGradeChange = (event) => {
  //   setGrade(event.target.value);
  //   setIsDisabled(false);
  // };

  const handleReset = () => {
    setSubject(savedSubject);
    // setGrade(savedGrade);
  };

  const handleSave = async () => {
    handleClose();
    const updateData = {
      subject_name: subject,
      // grade: grade,
    };
    await updateSubject(data.subject_id, updateData);
  };

  const updateSubject = async (id, updateData) => {
    await axios.put(`${updateURL}${id}`, updateData);
    console.log("Successfully updated subject");
  };

  useEffect(() => {
    console.log(data);
    //set the values of subject and grade
    if (open) {
      setSubject(data.subject_name);
      // setGrade(data.grade);
      setSavedSubject(data.subject_name);
      // setSavedGrade(data.grade);
    }
  }, [open, data]);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          Edit Subject Details
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
          <DialogContentText></DialogContentText>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              value={subject}
              onChange={handleSubjectChange}
              sx={{ mt: 2 }}
            />

            {/* <TextField
              id="outlined-basic"
              label="Grade"
              variant="outlined"
              value={grade}
              onChange={handleGradeChange}
              sx={{ mt: 2 }}
            /> */}
          </Box>
        </DialogContent>
        <DialogActions sx={{ mr: 2 }}>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
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

          <Button
            variant="contained"
            disableElevation
            disabled={isDisabled}
            onClick={() => {
              handleReset();
            }}
          >
            Reset
          </Button>

          <Button
            variant="contained"
            disableElevation
            disabled={isDisabled}
            onClick={() => {
              handleSave();
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
