import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { handlePrice } from '../state/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SelectFilter(props) {
  const dispatch = useDispatch() 

  const handleChange = (event) => {
    dispatch(props.function(event.target.value))
  };

  const menuItems = props.menuItemList.map((item) => (
    <MenuItem value={item} sx={{fontSize: '12px'}}>{item}</MenuItem>
  ))

  return (
    <Box sx={{ width: '130px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selector}
          label={props.label}
          onChange={handleChange}
          sx={{fontSize: '12px', height: '28px'}}
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
}