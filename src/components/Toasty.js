import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';



import MuiAlert from '@material-ui/lab/Alert';

export default function Toasty({open, onClose, severity, text}) {
  

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose()
  };

  

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={handleClose}
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
        <MuiAlert  elevation={6}  variant="filled" severity={severity} >
          {text}
        </MuiAlert>
        </Snackbar>
    </div>
  );
}