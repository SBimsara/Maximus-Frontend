import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import CustomButton from "./styles/CustomButton";
import DeleteButton from "./styles/DeleteButton";
import CloseButton from "./styles/CloseButton";

function Settings() {
  return (
    <div className="settings">
      
      {/* <CustomButton>Click Me</CustomButton> */}
      <DeleteButton/>
      <CloseButton></CloseButton>
      <CustomButton/>
      
    </div>
  );
}

export default Settings;
