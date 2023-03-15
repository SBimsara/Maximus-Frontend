import React from "react";
import { useState, useEffect } from "react";
import { BsNewspaper } from "react-icons/bs";



//Material UI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

import {DataGrid} from '@mui/x-data-grid';

//Bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown';

//Material UI Icon imports
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import axios from "axios";

import DeleteButton from "./styles/DeleteButton";

import "./styles/Plans.style.css";

//columns for the data grid
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Subject', width: 130 },
  { field: 'address', headerName: 'Grade', width: 130 },
]

function Plans() {

  const [plans, setPlans] = useState([]);
  const[subs,setSubs] = useState([]);

  const[pName,setpName] = useState("");
  const[pPrice,setpPrice] = useState("");
  const[pDiscount,setpDiscount] = useState("");

  const [rows, setRows] = useState([]);

  const [isDisabled,setisDisabled]=useState(true);

  useEffect(() => {
    loadPlans();
    loadSubs();
    fetchPlan();
  }, [])

  //function to load all the data
  const loadPlans = async () => {
    const plResult = await axios.get("http://localhost:8080/api/v1/user/getUsers");
    setPlans(plResult.data);
  }
  //function to load data to the dropdown
  const fetchPlan = async (planId) => {
    setisDisabled(false);

    const pidResult=await axios.get(`http://localhost:8080/api/v1/user/getUserById/${planId}`);
    // setSubs(pidResult)
    
    setpName(pidResult.data.name);
    setpPrice(pidResult.data.price);
    setpDiscount(pidResult.data.discount);
  }
  
  // function to load data to the data grid
  const loadSubs = async () => {
    const subResult = await axios.get("http://localhost:8080/api/v1/user/getUsers");
    setRows(subResult.data);
    console.log(subResult.data);
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
          // color="success"
          startIcon={<AddCircleIcon/>}
          sx={{
            mt:1
          }}
        >
          Add Subject
        </Button>
        
        {/* <div className="table-container">


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
        </div> */}

        <div>
          <Container>
          <div style={{ height: 400, width: '80%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              //pageSize={5}
              //rowsPerPageOptions={[5]}
              // checkboxSelection
            />
          </div>
          </Container>
        </div>
      </div>
    </>
  );
}


export default Plans;
