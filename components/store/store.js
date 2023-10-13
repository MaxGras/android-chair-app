import { configureStore } from '@reduxjs/toolkit';
import chairReducer from "../features/chairSlice"
export default configureStore({
    reducer:{
        chairs: chairReducer,
       
    }
})

