import React from "react";
import { useState, useEffect } from "react";
import { BsNewspaper } from "react-icons/bs";

import "./styles/Plans.style.css"

//Material UI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//Bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown';

//Material UI Icon imports
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import axios from "axios";

import DeleteButton from "./styles/DeleteButton";





function Plans() {

  const [plans, setPlans] = useState([]);
  const[subs,setSubs] = useState([]);

  const[pName,setpName] = useState("");
  const[pPrice,setpPrice] = useState("");
  const[pDiscount,setpDiscount] = useState("");

  const [isDisabled,setisDisabled]=React.useState(true);

  useEffect(() => {
    loadPlans();
    loadSubs();
    fetchPlan();
  }, [])

  const loadPlans = async () => {
    const plResult = await axios.get("http://localhost:8080/api/v1/user/getUsers");
    setPlans(plResult.data);
  }

  const fetchPlan = async (planId) => {
    setisDisabled(false);

    const pidResult=await axios.get(`http://localhost:8080/api/v1/user/getUserById/${planId}`);
    
    
    setpName(pidResult.data.name);
    setpPrice(pidResult.data.price);
    setpDiscount(pidResult.data.discount);
  }
  
  const loadSubs = async () => {
    const subResult = await axios.get("http://localhost:8080/api/v1/user/getUsers");
    setSubs(subResult.data);
  }

  return (
    <>
      <div className="page-container">
        <div className="plan-detail-container">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="plan-dropdown">
            Select Plan
          </Dropdown.Toggle>

          <Dropdown.Menu>
          {plans.map((plan, index) => {
                  return (
                    <Dropdown.Item onClick={() => fetchPlan(plan.id)}>{plan.name}</Dropdown.Item>
                  );
                })}
            
          </Dropdown.Menu>
        </Dropdown>

        <TextField 
          id="plan-name" 
          label="Name" 
          variant="outlined" 
          size="small" 
          disabled={isDisabled} 
          value={pName}
          sx={{
            mt:2
          }}
        /><br/>

        <TextField 
          id="plan-price" 
          label="Price" 
          variant="outlined" 
          size="small" 
          disabled={isDisabled} 
          value={pPrice}
          sx={{
            mt:1.5
          }}
        /><br/>

        <TextField 
          id="plan-discount" 
          label="Discount" 
          variant="outlined" 
          size="small" 
          disabled={isDisabled} 
          value={pDiscount}
          sx={{
            mt:1.5
          }}
        /><br/>
        </div>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AddCircleIcon/>}
          sx={{
            mt:1
          }}
          
        >
          Add Subject
        </Button>
        
        <div className="table-container">


          <table className="table">
            <thead>
              <tr>
                <th scope="col">SID</th>
                <th scope="col">Subject</th>
                <th scope="col">Grade</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            {plans && plans.length > 0 ? (
              <tbody className="table-group-divider">
                {subs.map((sub, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{sub.name}</td>
                      <td>{sub.price}</td>
                      <td>{sub.discount}</td>
                      <td><DeleteButton/></td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody className="table-group-divider">
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}


export default Plans;
