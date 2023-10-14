import { createSlice } from "@reduxjs/toolkit";

const initialState= []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addOne: (state,action)=>{
          
            state.push(action.payload);
         
        },
        deleteOne: (state, action) => {
            const itemId = action.payload;
            state.cartValue = state.cartValue.filter(item => item.id !== itemId);
        },
       
    }
})

export const { addOne, deleteOne } = cartSlice.actions;
export default cartSlice.reducer;