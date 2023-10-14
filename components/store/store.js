import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cartSlice"
import chairReducer from "../features/chairSlice"
export default configureStore({
    reducer:{
        chairs: chairReducer,
        cart: cartReducer
    }
})

