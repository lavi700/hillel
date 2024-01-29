import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { handleClose } from '../../state/CartSlice';
import { useDispatch } from 'react-redux';
import { clear_cart } from '../../state/ProductSlice';
import { CssBaseline } from '@mui/material';

export default function ClearCartDialog(props) {
  const dispatch = useDispatch()

  function handleAgree(){
    dispatch(clear_cart());
    dispatch(handleClose());
  }

  return (
    <>
    <CssBaseline />
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={() => dispatch(handleClose())}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to clear the cart?"}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(handleClose())}>No</Button>
          <Button onClick={handleAgree} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </>
  );
}