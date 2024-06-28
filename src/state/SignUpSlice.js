import {createSlice} from "@reduxjs/toolkit";

const signUpSlice = createSlice({
    name: "sign-up",
    initialState: {},
    reducers: {
        handleClose: (state) => {
            return {
                ...state,
                open_dialog: false
            };
        },    
    },
})

export const {handleClose} = signUpSlice.actions

export default signUpSlice.reducer