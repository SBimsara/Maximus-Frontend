import React from "react";
import { useState, useEffect } from "react";
import { BsNewspaper } from "react-icons/bs";



//Material UI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

import { DataGrid } from '@mui/x-data-grid';

//Bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown';

//Material UI Icon imports
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

//importing services
import { getData } from "../../services/getData";
import { getDataById } from "../../services/getDataById.js";

import { pid } from "./AddPlans";

// import "./styles/Plans.style.css";
import CustomDeleteButton from "../../components/ui/DeleteIconButton";
import {handleDeleteClick1} from "../../utils/DeleteIconBtnFunctions";
import { 
  DataGridColumnContainer, 
  DataGridContainer, 
  PageContainer, 
  PlanButtonContainer, 
  PlanContainer, 
  PlanContentContainer 
        } from "./styles/PlanDetails.styles.js";

import Popup from "./Popup";
import { deleteDatabyId } from "../../services/deleteDataById";
import { handleEditClick1 } from "../../utils/EditIconBtnFunctions";
import { updateData } from "../../services/updateData";

const url1 = "http://localhost:8080/api/v1/plan/getAllPlans";
const url2 = "http://localhost:8080/api/v1/plan/getPlanById/";
const url3= "http://localhost:8080/api/v1/plan/updatePlan";

//columns for the data grid
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Subject', width: 300 },
  { field: 'address', headerName: 'Grade', width: 300 },
  { field: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell: (cellValues) => {
      return(
        <CustomDeleteButton onClick={() => deleteSubjects(cellValues.id)}/>
      )
    }
    },
]

  

export async function deleteSubjects(subId) {
  const result = await deleteDatabyId(url3,subId);
  (result) ? console.log("successfull"): console.log("error");
}



function Plans(props) {

  const [rows, setRows] = useState([]);

  const [plans, setPlans] = useState([]);

  //use states for the mui textfield values
  const [pName, setpName] = useState("");
  const [pPrice, setpPrice] = useState("");
  const [pDiscount, setpDiscount] = useState("");

  //use states for the mui textfield "saved" values
  const [savedPName, setSavedPName] = useState("");
  const [savedPPrice, setSavedPPrice] = useState("");
  const [savedPDiscount, setSavedPDiscount] = useState("");
  
  //use state to control the mui textfield disabled state
  const [isDisabled, setisDisabled] = useState(true);

  const [delState,setdelState] = useState(false);

  const [openPopup,setOpenPopup] = useState(false);

  // use state to change the readOnly state in mui textfield
  const [isReadOnly, setIsReadOnly] = useState(false);

  // use state to control the disabled state of mui button(save)
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  // use state to control the disabled state of mui button(reset)
  const [isResetDisabled, setIsResetDisabled] = useState(true);

  //functions to get data for the data-grid
  async function fetchSubjects() {
    const result = await getData(url1);
    setRows(result);
  }

  // function to set data in the textfields
  async function fetchPlanDetails() {
    setisDisabled(false);
    
    
    console.log(pid);
    const result = await getDataById(url2, pid);
    console.log(result);
    setpName(result.name);
    setpPrice(result.price);
    setpDiscount(result.discount);

    setSavedPName(result.name);
    setSavedPPrice(result.price);
    setSavedPDiscount(result.discount);
  }

  //function to get data for the dropdown button
  async function fetchPlans() {
    const result = await getData(url1);
    setPlans(result);
  }

  //function to update data
  async function updatePlan(data) {
    const result = await updateData(url3,data);
    (result)? console.log("successfull") : console.log("error");
  }
  useEffect(() => {
    fetchSubjects();
    fetchPlans();

    updateData();
    fetchPlanDetails();
    
    
    
  }, [])

  const handleAddSubjectsClick = () => {
    setOpenPopup(true);
  }

  const editCilck = () => {
    setIsReadOnly(false);
    console.log("eroor")
  }
  
  const handleNameChange = (event) => {
      setpName(event.target.value);
      setIsSaveDisabled(false);
      setIsResetDisabled(false);
  }

  const handlePriceChange = (event) => {
    setpPrice(event.target.value);
    setIsSaveDisabled(false);
    setIsResetDisabled(false);
  }

  const handleDiscountChange = (event) => {
    setpDiscount(event.target.value);
    setIsSaveDisabled(false);
    setIsResetDisabled(false);
  }

  const handleSaveCilck = () => {
    const data = {
    "id" : pid,
    "name" : pName,
    "price" : pPrice,
    "discount" : pDiscount
    };
    updatePlan(data);
  }

  const handleResetClick = () => {
    setpName(savedPName);
    setpPrice(savedPPrice);
    setpDiscount(savedPDiscount);
  }



  return (
    <>
      <PageContainer>
        <PlanContainer>
          <PlanContentContainer>
          {/* <Dropdown>
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
          </Dropdown>  */}
          
      

          <TextField
            id="plan-name"
            label="Name"
            variant="outlined"
            size="small"

            disabled={isDisabled}
            value= {pName}
            onChange = {handleNameChange}
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
            onChange = {handlePriceChange}
            
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
            onChange = {handleDiscountChange}
            sx={{
              mt: 1.5
            }}
          /><br />
          </PlanContentContainer>
          <PlanButtonContainer>
            <Button 
              variant="contained"
              disableElevation
              disabled = {isSaveDisabled}
              onClick={handleSaveCilck}
            >
              Save</Button>

            <Button 
            variant="contained"
            disableElevation
            sx={{
              marginLeft:"10px"
            }}
            disabled = {isResetDisabled}
              onClick = {handleResetClick}
            >
            Reset</Button>

          </PlanButtonContainer>
          
        </PlanContainer>
        

        

        
          <DataGridContainer>
            <Box sx={{
              ml:98,
              mb:3,
            }}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddCircleIcon />}
              sx={{
                mt: 1

              }}
              onClick={handleAddSubjectsClick}
            >
              Add Subject
        </Button>
        <Popup open={openPopup} onClose={setOpenPopup}/>
        
            </Box>
        
            <div style={{ 
              height: 400, 
              width: '90%',
              

            }}>
              <DataGrid
               
                rows={rows}

                columns={columns}
                
                
                
              // pageSize={3}
              // rowsPerPageOptions={[3]}
              // checkboxSelection
              
              />
            </div>
            
          
            </DataGridContainer>
            </PageContainer>
    </>
  );
}


export default Plans;

