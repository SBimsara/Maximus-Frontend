import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import CustomEditButton from '../../components/ui/EditIconButton';
import CustomDeleteButton from '../../components/ui/DeleteIconButton';
import { deleteDatabyId } from '../../services/deleteDataById';
import { useState, useEffect } from "react";

import { getData } from '../../services/getData';

import Box from "@mui/material/Box";
import { useHref } from 'react-router-dom';
import { Button } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import PlanPopup from './PlanPopup';
import { handleEditClick2 } from '../../utils/EditIconBtnFunctions';

import { PageContainer } from './styles/AddPlans.styles';

import Plans from './PlanDetails';
import ActionAlerts from '../../components/ui/actionAlerts';


//url for the deleteDataById service
const delURL = "http://localhost:8080/api/v1/plan/deletePlan/";

//url for the getData service
const getAllURL = "http://localhost:8080/api/v1/plan/getAllPlans";

//columns for the data-grid
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 },
    { field: 'discount', headerName: 'Discount', width: 200 },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (cellValues) => {
            return (
                <>
                    <Box sx={{
                        mr: 1
                    }}>
                        <CustomEditButton onClick={() => {handleEditClick2(); setPid(cellValues.id)}}/>
                    </Box>

                    <CustomDeleteButton onClick={() => deletePlans(cellValues.id)} />

                </>
            )
        }
    },
]


// // variable to store plan Id
export let pid = 5 ;



// setter function for the pid variable
export const setPid = (newPid) => {
  console.log(newPid);
  pid = newPid;
}




// // exporting pid
// export {pid};

// const variant = "filled";
// const buttonTitle = "UNDO";
// const alertMsg = "This is a success alert — check it out!";
// const severity = "error";


// delete api call
export async function deletePlans(subId) {
    const result = await deleteDatabyId(delURL, subId);
    // {(result) 
    // ? <ActionAlerts variant={variant} buttonTitle={buttonTitle} alertMsg={alertMsg} severity={severity}/>
    // : console.log("error")}
}

export default function AddPlans() {

    const [rows, setRows] = useState([]);
    const [openPopup,setOpenPopup] = useState(false);

    async function fetchPlans() {
        const result = await getData(getAllURL);
        setRows(result);
        //console.log(rows);
    }

    useEffect(() => {

        fetchPlans();

    }, [])

    const handleAddPlanClick = () => {
        setOpenPopup(true);
      }



    return (
        <>
        <PageContainer>
            <Box sx={{mb:2}}>
            <Button variant='outlined' startIcon={<AddCircleIcon /> } onClick={handleAddPlanClick}>Add Plan</Button>
            </Box>
            <PlanPopup open={openPopup} onClose={setOpenPopup}/>
            <div style={{
                height: 400,
                width: '90%',

            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                /> 
            </div>
            </PageContainer>
        </>
    )
}
