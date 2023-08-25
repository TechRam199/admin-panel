import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products:[],
    isFatching: false,
    error: false,
   
  },
  reducers: {
    // Get All Data
   getProductStart :(state)=>{
    state.isFatching = true
    state.error = false
   },
    getProductSucess :(state,action)=>{
    state.isFatching = true;
    state.products= action.payload
   },
   getProductFail:(state)=>{
state.isFatching = false;
state.error = true
},
// Deletet All Data
DeleteProductStart :(state)=>{
    state.isFatching = true
    state.error = false
   },
    DeleteProductSucess :(state,action)=>{
    state.isFatching = true;
    state.products.splice(
    state.products.findIndex((item)=>item._id===action.payload),1
    )                       
   },
    DeleteProductFail:(state)=>{
state.isFatching = false;
state.error = true

   },
   // Update Data 
UpdateProductStart :(state)=>{
    state.isFatching = true
    state.error = false
   },
    UpdateProductSucess :(state,action)=>{
    state.isFatching = true;
    state.products[
         state.products.findIndex((item)=>item._id===action.payload.id)
        ] = action.payload.products                
   },
   UpdateProductFail:(state)=>{
state.isFatching = false;
state.error = true

   },

   // add Data
   addProductStart :(state)=>{
    state.isFatching = true
    state.error = false
   },
    addProductSucess :(state,action)=>{
    state.isFatching = true;
    state.products.push(action.payload)
   },
   addProductFail:(state)=>{
state.isFatching = false;
state.error = true

   },

 },
  
});

export const { getProductFail,getProductStart,getProductSucess , DeleteProductFail, DeleteProductSucess,DeleteProductStart , UpdateProductFail, UpdateProductStart, UpdateProductSucess, addProductFail, addProductSucess,addProductStart} = productSlice.actions;
export default productSlice.reducer;
 