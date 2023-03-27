import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import CustomEditButton from '../../components/ui/EditIconButton';
import CustomDeleteButton from '../../components/ui/DeleteIconButton';
import { deleteDatabyId } from '../../services/deleteDataById';
import { useState, useEffect } from "react";
const url3="";
const url1 = "http://localhost:8080/api/v1/user/getUsers";

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'address', headerName: 'Price', width: 200 },
    { field: 'address', headerName: 'Discount', width: 200 },
    { field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (cellValues) => {
        return(
          <CustomDeleteButton onClick={() => deletePlans(cellValues.id)}/>
          
        )
      }
      },
  ]

  export async function deletePlans(subId) {
    const result = await deleteDatabyId(url3,subId);
    (result) ? console.log("successfull"): console.log("error");
  }

export default function AddPlans() {

    const [rows, setRows] = useState([]);

    async function fetchPlans() {
        const result = await getData(url1);
        setRows(result);
      }

      useEffect(() => {
        
        fetchPlans();
    
      }, [])

  return (
    <>
    
        
        <div style={{ 
          height: 400, 
          width: '90%',
          

        }}>
      <DataGrid>
        rows={rows}
        columns={columns}
      </DataGrid>
      </div>
    </>
  )
}
