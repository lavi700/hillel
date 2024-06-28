import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './ProductSlice'
import cartReucer from './CartSlice'
import contactReducer from './ContactSlice'
import filterReducer from './FilterSlice'
import chatReducer from './ChatSlice'


const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
    reducer: {
        product: persistedReducer,
        cart: cartReucer, 
        contact: contactReducer,
        filter: filterReducer,
        chat: chatReducer
    }
})

const persistor = persistStore(store);

export { store, persistor };