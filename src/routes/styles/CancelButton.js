import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';

import { alpha, styled } from '@mui/material/styles';

const CancelButton = styled(IconButton)(({theme})=>({
    backgroundColor: "#f7abab",
    color: theme.palette.error.light,
    borderRadius:4,
    height:40,
    width:40,

    '&:hover':{
        color:"#fff",
        backgroundColor: theme.palette.error.light
    },

    '&:active':{
        color:"#fff",
        backgroundColor: theme.palette.error.light
    }
    
}))


export default function CustomCancelButton({onClick}) { 
  return (  
    <>
    
    <CancelButton onClick={onClick}>X</CancelButton>
    </>
  );
}