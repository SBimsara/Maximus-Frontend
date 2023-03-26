import React from "react";
import "./Dashboard.css";
import { PageContainer } from "../Plans/styles/Plans.styles";

import Contain from "./Userprofile/Contain"

//import { AiOutlineHome } from "react-icons/ai";

// function Dashboard() {
//   return (
//     <div className="home">
//       <h1>the dash boardss</h1>
//       {/* <AiOutlineHome className="page-icon" /> */}
//     </div>
//   );
// }

export default function Dashboard() {
  return (
    <>
          
      
              <div className="dashboard">
                <div className="left">Active users : 328</div>
                <div className="right">Active admins : 3</div>
                
              </div>


              <div className="contaner">
                <>
                <Contain/> 
                </>
              </div>
          
       
    </>
  )
}
