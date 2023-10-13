import {
    createEntityAdapter, createSlice, createAsyncThunk
} from '@reduxjs/toolkit'


const chairAdapt = createEntityAdapter({
    selectId: (products) => products.id

});
const initialState = chairAdapt.getInitialState({
    status: 'idle',
    error: null,
    sortingState: 'default'
});

const chairSlice = createSlice({
    name: "chairs",
    initialState,
    reducers: {
        deleteOne(state,action){

            const idDeleted = action.payload;
            chairAdapt.removeOne(state,idDeleted);
      
        },
        addOne(state,action){
           const newAdding = action.payload;
     
           chairAdapt.addOne(state,newAdding); 
        
        },
        editOne(state,action){
            const newEditing = action.payload;
            const idEdit = action.payload.id;
            
            chairAdapt.updateOne(state,{id:idEdit , changes: newEditing});
        },
        addSortingState(state,action){
            const newSortingState = action.payload;
            state.sortingState = newSortingState;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getProductsList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProductsList.fulfilled, (state, action) => {
                state.status = "succeeded"

                chairAdapt.upsertMany(state, action.payload)

            })
            .addCase(getProductsList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })

    }
});

export default chairSlice.reducer;

export const getProductsList = createAsyncThunk(
   
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://6525afeb67cfb1e59ce79c10.mockapi.io/chairs/');
        const products = await response.json();
       
        return products;
    }
);

export const {
    selectAll: selectAllChairss,
    selectById: selectChairById,
    selectIds: selectChairIds

} = chairAdapt.getSelectors(state => state.chairs);
export const {deleteOne,editOne,addOne,addSortingState} = chairSlice.actions;
