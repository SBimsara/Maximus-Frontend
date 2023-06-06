

import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import AddBoxIcon from '@mui/icons-material/AddBox';

import { alpha, styled } from '@mui/material/styles';

const ViewIconButton = styled(IconButton)(({theme}) => ({
backgroundColor: "#c0c7f0",
  color: theme.palette.primary.light,
  borderRadius: 4,

  '&:hover': {
    color: "#fff",
    backgroundColor: theme.palette.primary.light
  },

  '&:active': {
    color: "#fff",
    backgroundColor: theme.palette.primary.light
  }

}))
export default function CustomViewButton({onClick}) {
  return (
    <>
      <ViewIconButton>
        {<AddBoxIcon/>}
      </ViewIconButton>
    </>
  )
}
