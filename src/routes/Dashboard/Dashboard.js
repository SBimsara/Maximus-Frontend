import React, { useEffect, useState } from "react";
import "./Dashboard.css";
// import { PageContainer } from "../Plans/styles/Plans.styles";

import Contain from "./Userprofile/Contain"
import Navbar1 from "../../components/Navbar1";
import { getData } from "../../services/getData";















export default function Dashboard() {

  const [adminCount,setAdminCount] = useState();

  useEffect(()=>{
    async function getAdminCount(){
    const response = await getData('http://localhost:8080/api/v1/admin/getAdminCount');
    setAdminCount(response);
    }
    getAdminCount();
  },[])
  

    
  return (
    <>
          
                <div className="contaner">
                <>
                <Navbar1 text= "Dashboard"/> 
                </>
              </div>
              <div className="dashboard">
                <div className="left"><b>Registered Admins : {adminCount}</b></div>
                <div className="right"><b>Registered Users: 30</b></div>
                
              </div>


              <div className="contaner">
                <>
                <Contain/> 
                </>
              </div>

             

         
        
              
    </>
  );
 }
