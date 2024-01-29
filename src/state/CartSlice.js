import {createSlice} from "@reduxjs/toolkit";
import products_data from "../static/data/products_data";
const cartSlice = createSlice({
    name: "cart",
    initialState: {open_dialog: false},
    reducers: {
        handleClose: (state) => {
            return {
                ...state,
                open_dialog: false
            };
        },
        handleOpen: (state) => {
            return {
                ...state,
                open_dialog: true
            };
        },
        
    },
})

export const {handleClose, handleOpen} = cartSlice.actions

export default cartSlice.reducer