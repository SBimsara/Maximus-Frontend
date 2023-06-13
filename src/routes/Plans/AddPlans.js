import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import CustomEditButton from "../../components/ui/EditIconButton";
import CustomDeleteButton from "../../components/ui/DeleteIconButton";
import { deleteDatabyId } from "../../services/deleteDataById";
import { useState, useEffect } from "react";

import { getData } from "../../services/getData";

import Box from "@mui/material/Box";
import { Link, useHref } from "react-router-dom";
import { Button } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import PlanPopup from "./PlanPopup";
import { handleEditClick2 } from "../../utils/EditIconBtnFunctions";

import { PageContainer } from "./styles/AddPlans.styles";

import Plans from "./PlanDetails";
import ActionAlerts from "../../components/ui/actionAlerts";

import { useLocation } from "react-router-dom";
import Navbar1 from '../../components/Navbar1';


//url for the deleteDataById service
const delURL = "http://localhost:8080/api/v1/plan/deletePlan/";

//url for the getData service
const getAllURL = "http://localhost:8080/api/v1/plan/getAllPlans";

// // variable to store plan Id
export let pid = 17;


export default function AddPlans() {
  const [rows, setRows] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const [planID, setPlanID] = useState(0);
  const [clicked, setClicked] = useState(false);

  //use state for datagrid refresh
  const [refreshGrid, setRefreshGrid] = useState(true);

  //const history = useHistory();

  //columns for the data-grid
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "discount", headerName: "Discount", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (cellValues) => {
        return (
          <>
            <Box
              sx={{
                mr: 1,
              }}
            >
              <CustomEditButton
                onClick={() => {
                  handleEditBtnClick(cellValues.id);
                }}
              />
            </Box>

            <CustomDeleteButton onClick={() => deletePlans(cellValues.id)} />
          </>
        );
      },
    },
  ];

  async function deletePlans(subId) {
    const result = await deleteDatabyId(delURL, subId);
    if (result.code == "00") {
      console.log("successful");
      setRefreshGrid(true);
    } else {
      console.log("error");
    }
  }
  async function fetchPlans() {
    const result = await getData(getAllURL);
    console.log(result);
    setRows(result.content);
    setRefreshGrid(false);
    //console.log(rows);
  }

  useEffect(() => {
    fetchPlans();
  }, [refreshGrid]);

  const handleAddPlanClick = () => {
    setOpenPopup(true);
  };

  const handleEditBtnClick = (id) => {
    setPlanID(id);

    // window.location.replace("/planDe");
    //window.history.pushState(null, null, '/planDe');
    setClicked(true);
    //window.location.href="./planDe";
  };

  if (clicked == false) {
    return (
      <>
        <PageContainer>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              startIcon={<AddCircleIcon />}
              onClick={handleAddPlanClick}
            >
              Add Plan
            </Button>
          </Box>
          <PlanPopup open={openPopup} onClose={setOpenPopup} />
          <div
            style={{
              height: 400,
              width: "90%",
            }}
          >
            <DataGrid rows={rows} columns={columns} />
          </div>
        </PageContainer>
      </>
    );
  } else {
    return (
      <>
        <Plans pid={planID} />;
      </>
    );
  }
}
