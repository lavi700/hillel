import {createSlice } from "@reduxjs/toolkit";
import products_data from "../static/data/products_data";

const productSlice = createSlice({
    name: "product",
    initialState: {products: products_data},
    reducers: {
        add_1_amount: (state, action) => {
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        amount: product.amount + 1
                    };
                }
                return product;
            });
        
            return {
                ...state,
                products: updatedProducts
            };
        },
        subtract_1_amount: (state, action) => {
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload && product.amount > 0) {
                    return {
                        ...product,
                        amount: product.amount - 1
                    };
                }
                return product;
            });
        
            return {
                ...state,
                products: updatedProducts
            };
        },
        clear_cart: (state) => {
            const updatedProducts = state.products.map(product => {
                    return {
                        ...product,
                        amount: 0
                    };
            });
        
            return {
                ...state,
                products: updatedProducts
            };
        }, 
        remove_item: (state, action) => {
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        amount: 0
                    };
                }
                return product;
            });
        
            return {
                ...state,
                products: updatedProducts
            };
        },
        
    },
})

export const {add_1_amount, subtract_1_amount, clear_cart, remove_item} = productSlice.actions

export default productSlice.reducer