import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice'
import cartReucer from './CartSlice'
import contactReducer from './ContactSlice'
import filterReducer from './FilterSlice'

export  const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReucer, 
        contact: contactReducer,
        filter: filterReducer,
    }
})