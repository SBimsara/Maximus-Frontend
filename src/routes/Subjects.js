import React from "react";
import { BsNewspaper } from "react-icons/bs";
import Navbar1 from "../components/Navbar1";

function Subjects() {
  return (
         

    <div className="subjects">
       <>
      <div className="subject">
                  <Navbar1 text="Subjects" />
       </div>
        </>
      <h1>Subjects</h1>
      <BsNewspaper className="page-icon" />


     
   
    </div>
  );
}

export default Subjects;
