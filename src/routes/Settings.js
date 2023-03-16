import React from "react";
import { BsNewspaper } from "react-icons/bs";

import CustomDeleteButton from "../components/ui/DeleteButton";
import {handleDeleteClick1} from "../utils/DeleteButtonFunctions";
import CustomCancelButton from "../components/form/CancelButton";
import CustomEditButton from "../components/ui/EditButton";


function Settings() {
  return (
    <div className="settings">
      <CustomDeleteButton onClick={handleDeleteClick1}/>
      <CustomCancelButton onClick={handleDeleteClick1}/>
      <CustomEditButton/>
      
    </div>
  );
}

export default Settings;
