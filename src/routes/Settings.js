import React from "react";
import { BsNewspaper } from "react-icons/bs";

import CustomDeleteButton from "./styles/DeleteButton";
import {handleDeleteClick1} from "./styles/DeleteButtonFunctions";
import CustomCancelButton from "./styles/CancelButton";


function Settings() {
  return (
    <div className="settings">
      <CustomDeleteButton onClick={handleDeleteClick1}/>
      <CustomCancelButton onClick={handleDeleteClick1}/>
      
    </div>
  );
}

export default Settings;
