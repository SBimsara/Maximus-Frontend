// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Divider from '@mui/material/Divider';

// import CloseButton from "./CloseButton";

// export default function PopupForm() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>
//           Subject Form
//           <CloseButton
//             onClick={handleClose}
//           >
//           </CloseButton>
          
//         </DialogTitle>
        
//         <Divider/>
//         <DialogContent>
//           <DialogContentText>
//           </DialogContentText>

//           <TextField
//           id="outlined-select-grade"
//           select
//           label="Select"
//           defaultValue=""
//           helperText="Please select your grade"
//         >
//           {/* {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))} */}
//         </TextField>

//         <TextField
//           id="outlined-select-subject"
//           select
//           label="Select"
//           defaultValue=""
//           helperText="Please select your subject"

//           sx={{
//             ml:5
//           }}
//         >
//           {/* {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))} */}
//         </TextField>

//         </DialogContent>
//         <DialogActions>
          
//           <Button onClick={handleClose}>Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import CloseButton from "./CloseButton";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';



export default function PopupForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Subject Form
        </DialogTitle>
        <CloseButton onClick={handleClose} />
        <Divider/>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>

          <TextField
          id="outlined-select-grade"
          select
          label="Select"
          defaultValue=""
          helperText="Please select your grade"
        >
          {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </TextField>

        <TextField
          id="outlined-select-subject"
          select
          label="Select"
          defaultValue=""
          helperText="Please select your subject"

          sx={{
            ml:5
          }}
        >
          {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </TextField>

        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
