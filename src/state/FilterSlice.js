import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { food_type: 'all', price: 'No Filter' },
  reducers: {
    handleFoodType: (state, action) => {
      return {...state, food_type: action.payload}
    },
    handlePrice: (state, action) => {
        return {...state, price: action.payload}
      },
  },
});

export const { handleFoodType, handlePrice } = filterSlice.actions;

export default filterSlice.reducer;