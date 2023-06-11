import React from "react";
import "./Dashboard.css";
// import { PageContainer } from "../Plans/styles/Plans.styles";

import Contain from "./Userprofile/Contain"
import Navbar1 from "../../components/Navbar1";



export default function Dashboard() {


    
  return (
    <>
          
                <div className="contaner">
                <>
                <Navbar1 text= "Dashboard"/> 
                </>
              </div>
              <div className="dashboard">
                <div className="left"><b>Active users : 328</b></div>
                <div className="right"><b>Active admins : 3</b></div>
                
              </div>


              <div className="contaner">
                <>
                <Contain/> 
                </>
              </div>

             

         
        
              
    </>
  );
 }
