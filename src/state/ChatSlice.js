import {createSlice} from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {open_chat: false},
    reducers: {
        handleOpenChat: (state) => {
            return {
                ...state,
                open_chat: ! state.open_chat
            };
        },
        
        
    },
})

export const { handleOpenChat} = chatSlice.actions

export default chatSlice.reducer