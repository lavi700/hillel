import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { handleFoodType, } from '../state/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function FoodTypeFilter() {
  const dispatch = useDispatch() 

  const foodType = useSelector((state) => state.filter.food_type)

  const handleChange = (event) => {
    dispatch(handleFoodType(event.target.value))
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Food Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={foodType}
          label="Food Type"
          onChange={handleChange}
        >
          <MenuItem value='all'>all</MenuItem>
          <MenuItem value='meat'>meat</MenuItem>
          <MenuItem value='fish'>fish</MenuItem>
          <MenuItem value='vegi'>vegi</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}