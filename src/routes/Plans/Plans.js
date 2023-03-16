import React from "react";
import { useState, useEffect } from "react";
import { BsNewspaper } from "react-icons/bs";



//Material UI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

import { DataGrid } from '@mui/x-data-grid';

//Bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown';

//Material UI Icon imports
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

//importing services
import { getData } from "../../services/getData";
import { getDataById } from "../../services/getDataById.js";


import "./styles/Plans.style.css";
import CustomDeleteButton from "../../components/ui/DeleteButton";
import {handleDeleteClick1} from "../../utils/DeleteButtonFunctions";

//columns for the data grid
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Subject', width: 130 },
  { field: 'address', headerName: 'Grade', width: 130 },
  { field: 'actions',
    headerName: 'Actions',
    width: 70,
    renderCell: (cellValues) => {
      return(
        <CustomDeleteButton onClick={handleDeleteClick1}/>
      )
    }
    },
]

function Plans() {

  const [rows, setRows] = useState([]);

  const [plans, setPlans] = useState([]);
  const [pName, setpName] = useState("");
  const [pPrice, setpPrice] = useState("");
  const [pDiscount, setpDiscount] = useState("");

  const [isDisabled, setisDisabled] = useState(true);

  const url1 = "http://localhost:8080/api/v1/user/getUsers";



  async function fetchSubjects() {
    const result = await getData(url1);
    setRows(result);
  }

  async function fetchPlanDetails(planId) {
    setisDisabled(false);

    const result = await getDataById(url1, planId);
    setpName(result.name);
    setpPrice(result.price);
    setpDiscount(result.discount);
  }

  async function fetchPlans() {
    const result = await getData(url1);
    setPlans(result);
  }

  useEffect(() => {
    fetchSubjects();
    fetchPlans();

    if (plans.length > 0) {
      fetchPlanDetails(plans[0].id);
    }
  }, [])


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
                  <Dropdown.Item onClick={() => fetchPlanDetails(plan.id)}>{plan.name}</Dropdown.Item>
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
              mt: 2
            }}
          /><br />

          <TextField
            id="plan-price"
            label="Price"
            variant="outlined"
            size="small"
            disabled={isDisabled}
            value={pPrice}
            sx={{
              mt: 1.5
            }}
          /><br />

          <TextField
            id="plan-discount"
            label="Discount"
            variant="outlined"
            size="small"
            disabled={isDisabled}
            value={pDiscount}
            sx={{
              mt: 1.5
            }}
          /><br />
        </div>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddCircleIcon />}
          sx={{
            mt: 1
          }}
        >
          Add Subject
        </Button>

        

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