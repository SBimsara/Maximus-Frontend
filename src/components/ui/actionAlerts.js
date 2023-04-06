import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function ActionAlerts() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
     const variant = "filled";
     const buttonTitle = "UNDO";
     const alertMsg = "This is a success alert — check it out!";
     const severity = "error";

        return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                
            >

                <Stack sx={{ width: '100%' }} spacing={2}>
                    
                    <Alert
                    variant={variant}
                    severity = {severity} 
                    onClose={() => { }}
                        action={
                            <Button color="inherit" size="small">
                                {buttonTitle}
                            </Button>
                        }
                    >
                        {alertMsg}
                    </Alert>
                </Stack>

            </Dialog>
        </>

    );
}