import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';

import { alpha, styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  // padding:"6px 12px",
  // fontSize: 15,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  borderRadius: 4,
  height:40,
  boxShadow: `0px 3psx 5px ${alpha(theme.palette.primary.main, 0.3)}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: `0px 3px 5px ${alpha(theme.palette.primary.main, 0.5)}`,
  },
  '&:active': {
    backgroundColor: theme.palette.primary.light,
    boxShadow: `0px 3px 5px ${alpha(theme.palette.primary.main, 0.7)}`,
  },
    
}));


export default function ButtonCustomization() {
  return (
    <>
    <CustomButton variant="contained">Custom</CustomButton>
    </>
  );
}