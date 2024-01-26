import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { clear_cart } from '../state/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import ClearCartDialog from './Cart/ClearCartDialog';
import { handleClose, handleOpen } from '../state/CartSlice';
import '../styles/MenuBottomNevigation.css'


const MenuBottomNavigation = () => {
  const openCartDialog = useSelector((state) => state.cart.open_dialog)  
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1000,
        boxShadow: 5 // Adjust the value based on your needs
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{display: 'flex', gap: '17px', alignItems: 'center'}}
      >
       <button className='clear-cart-button' onClick={() => dispatch(handleOpen())}>Clear Cart</button>
       <NavLink className='view-cart-button' to="/cart">View Cart</NavLink>
      </BottomNavigation>
      <ClearCartDialog open={openCartDialog}/>

    </Box>
  );
};

export default MenuBottomNavigation;
