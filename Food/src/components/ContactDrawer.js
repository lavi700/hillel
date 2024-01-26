import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { toggleDrawer } from '../state/ContactSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import '../styles/ContactDrawer.css'

export default function ContactDrawer() {
   const dispatch = useDispatch() 
   const open = useSelector((state) => state.contact.open_drawer)


  return (
    <div>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => dispatch(toggleDrawer(false))}
      >
        <div 
        onClick={() => dispatch(toggleDrawer(false))}
        onKeyDown={() => dispatch(toggleDrawer(false))}
        style={{display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center'}}>
        <h5 className='contact-details'>email: lavivi700@gmail.com</h5>
        <h5 className='contact-details'>phone number: 052-2798805</h5>
        <h5 className='contact-details'>address: Kedumim Hashaked 2</h5>
      </div>
      </Drawer>
    </div>
  );
}
