import React from "react";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

import CustomCancelButton from "../../components/form/CancelButton";
import { getDataById } from "../../services/getDataById";
import { updateData } from "../../services/updateData";

const getURL = "http://localhost:8080/api/v1/user/getUserBySubjectId/";
const updateURL = "http://localhost:8080/api/v1/user/updateSubject";

export default function EditSubjectPopup(props) {
  const { data, open, onClose } = props;

  //use state for mui text field values
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");

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

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
    setIsDisabled(false);
  };

  const handleReset = () => {
    setSubject(savedSubject);
    setGrade(savedGrade);
  };

  const handleSave = () => {
    handleClose();
    const updateData = {
      id: data.id,
      subjectname: subject,
      grade: grade,
    };
    updateSubject(updateData);
  };

  async function updateSubject(data) {
    const reply = await updateData(updateURL, data);
    reply ? console.log("Success") : console.log("Error");
  }

  useEffect(() => {
    console.log(data);
    //set the values of subject and grade
    if (open) {
      setSubject(data.subjectname);
      setGrade(data.grade);
      setSavedSubject(data.subjectname);
      setSavedGrade(data.grade);
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

            <TextField
              id="outlined-basic"
              label="Grade"
              variant="outlined"
              value={grade}
              onChange={handleGradeChange}
              sx={{ mt: 2 }}
            />
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
