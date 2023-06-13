import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import CustomCancelButton from "../../components/form/CancelButton";

import { useEffect, useState } from "react";
import { saveData } from "../../services/saveData";

const saveURL = "http://localhost:8090/subject";

export default function SubjectPopup(props) {
  const { open, onClose } = props;

  const [subject, setSubject] = useState("");
  // const [grade, setGrade] = useState("");

  const handleClose = () => {
    onClose(false);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  // const handleGradeChange = (event) => {
  //   setGrade(event.target.value);
  // };

  const handleConfirmClick = () => {
    const data = {
      // subject_id: 0,
      subject_name: subject,
      // grade: grade,
    };
    saveSubject(data);
  };

  async function saveSubject(data) {
    const result = await saveData(saveURL, data);
    console.log(result);
  }

  useEffect(() => {
    saveSubject();
  }, []);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          Add Subject
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
            Please enter details to add a new subject.
          </DialogContentText>

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
              sx={{ mt: 2 }}
              onChange={handleSubjectChange}
            />
            {/* <TextField
              id="outlined-basic"
              label="Grade"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={handleGradeChange}
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
            onClick={() => {
              handleClose();
              handleConfirmClick();
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
