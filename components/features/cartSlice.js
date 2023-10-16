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
         
            const newState = state.filter(item => item.id !== itemId);
          return  newState;
        },
        setCount:(state,action)=>{
            const {id,count} = action.payload;
            const item = state.find(item => item.id === id);
            if(item)
            item.count = count;
            
        }
       
    }
})

export const { addOne, deleteOne,setCount } = cartSlice.actions;
export default cartSlice.reducer;