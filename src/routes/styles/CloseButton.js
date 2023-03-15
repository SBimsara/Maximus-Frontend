import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';

import { alpha, styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const CloseButton = styled(IconButton)(({theme})=>({
    backgroundColor: "#f7abab",
    color: theme.palette.error.light,
    borderRadius:4,
    width:28,
    height:28,

    '&:hover':{
        color:"#fff",
        backgroundColor: theme.palette.error.light
    },

    '&:active':{
        color:"#fff",
        backgroundColor: theme.palette.error.light
    }

    
}))
export default function ButtonCustomization() {
  
  
  return (
    <>
    
    <CloseButton>
      {<CloseIcon/>}
    </CloseButton>
    
    </>
  );
}