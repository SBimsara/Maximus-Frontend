import React from "react";
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

import { useState, useEffect } from "react";
import { saveData } from "../../services/saveData";

//url for the saveData
const saveURL = "http://localhost:8080/api/v1/plan/savePlan";

export default function PlanPopup(props) {
  const { open, onClose } = props;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [discount, setDiscount] = useState(null);

  const [nameHelperText, setNameHelperText] = useState("");
  const [priceHelperText, setPriceHelperText] = useState("");
  const [discountHelperText, setDiscountHelperText] = useState("");

  const [isNameError, setIsNameError] = useState(false);
  const [isPriceError, setIsPriceError] = useState(false);
  const [isDiscountError, setIsDiscountError] = useState(false);

  const handleClose = () => {
    setIsNameError(false);
    setIsPriceError(false);
    setIsDiscountError(false);
    setNameHelperText("");
    setPriceHelperText("");
    setDiscountHelperText("");
    onClose(false);
  };

  const handleNameChange = (event) => {
    const valn = event.target.value;
    setName(valn);
  };

  const handlePriceChange = (event) => {
    const valp = event.target.value;

    //change price in use state
    setPrice(valp);
  };
  const handleDiscountChange = (event) => {
    const vald = event.target.value;
    setDiscount(vald);
  };

  const nameValidation = () => {
    if (name === "") {
      setIsNameError(true);
      setNameHelperText("This field is required");
      return false; // name is not error free
    } else {
      setIsNameError(false);
      setNameHelperText("");
      return true; //name is error free
    }
  };

  const priceValidation = () => {
    if (price === null) {
      setIsPriceError(true);
      setPriceHelperText("This field is required");
      return false;
    } else if (/[a-zA-Z]/.test(price)) {
      setIsPriceError(true);
      setPriceHelperText("Please do not enter characters");
      return false;
    } else if (price < 0) {
      setIsPriceError(true);
      setPriceHelperText("Please restrict your inputs into positive numbers");
      return false;
    } else {
      setIsPriceError(false);
      setPriceHelperText("");
      return true;
    }
  };

  const discountValidation = () => {
    if (discount === null) {
      setIsPriceError(true);
      setDiscountHelperText("This field is required");
      return false;
    } else if (/[a-zA-Z]/.test(discount)) {
      setIsPriceError(true);
      setDiscountHelperText("Please restrict your input to Integers or floats");
      return false;
    } else if (discount < 0 || discount > 1) {
      setIsDiscountError(true);
      setDiscountHelperText("Discount should be between 0 and 1");
      return false;
    } else {
      setIsDiscountError(false);
      setDiscountHelperText("");
      return true;
    }
  };

  const handleConfirmClick = () => {
    // setIsNameError(true);
    // setIsPriceError(true);
    // setIsDiscountError(true);

    // setNameHelperText("");
    // setPriceHelperText("");
    // setDiscountHelperText("");

    let isNameErrorFree = nameValidation();
    let isPriceErrorFree = priceValidation();
    let isDiscountErrorFree = discountValidation();

    console.log(isNameError, isPriceError, isDiscountError);

    if (isNameErrorFree && isPriceErrorFree && isDiscountErrorFree) {
      const data = {
        name: name,
        price: price,
        discount: discount,
      };

      async function savePlanData() {
        try {
          const result = await saveData(saveURL, data);
          console.log(result);
          handleClose();
        } catch (error) {
          console.log(error);
        }
      }

      savePlanData(data);
    }
  };

  // useEffect(() => {

  // }, [, isNameError, isPriceError, isDiscountError]);

  //
  //
  //

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          Add Plan
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
            Please enter details to create a new plan.
          </DialogContentText>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              error={isNameError}
              helperText={nameHelperText}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={handleNameChange}
            />
            <TextField
              error={isPriceError}
              helperText={priceHelperText}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={handlePriceChange}
            />
            <TextField
              error={isDiscountError}
              helperText={discountHelperText}
              id="outlined-basic"
              label="Discount"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={handleDiscountChange}
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
            onClick={() => {
              handleConfirmClick();
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
