import React from "react";

import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const PageContainer = styled(Box)(({theme}) => ({
    backgroundColor:"#e3f2fd",
    alignContent:"center",
    justifyContent:"center",
}))

export const DataGridContainer = styled(Box)(({theme}) => ({
    backgroundColor:"#fff",
    display:"flex",
    justifyContent:"center",
    width:"80%",
    height:"100%",
    padding:"20px",
    
    marginLeft:"245px",
    marginRight:"auto"
    
}))

export const DataGridColumnContainer = styled(Box)(({theme}) => ({
    backgroundColor:"#e3f2fd",
    color:"#1976d2"
}))