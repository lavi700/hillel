import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: { open_drawer: false },
  reducers: {
    toggleDrawer: (state, action) => {
      const open = action.payload;
      if (open) {
        return { ...state, open_drawer: true };
      } else {
        return { ...state, open_drawer: false };
      }
    },
  },
});

export const { toggleDrawer } = contactSlice.actions;

export default contactSlice.reducer;
