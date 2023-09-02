import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products:[],
    isFatching: false,
    error: false,
    isSucess : false,
   
  },
  reducers: {
    // Get All Data
   getProductStart :(state)=>{
    state.isFatching = true
    state.error = false
   },
    getProductSucess :(state,action)=>{
    state.isFatching = true;
    state.products= action.payload ; 
   },
   getProductFail:(state)=>{
state.isFatching = false;
state.error = true
},

// Delete Product
DeleteProductStart :(state)=>{
  state.isFatching = true
  state.error = false
 },
DeleteProductSucess :(state,action)=>{
  state.isFatching = true;
 state.products = state.products.filter((item)=>item._id!==action.payload)
   },

  DeleteProductFail:(state)=>{
state.isFatching = false;
state.error = true
 },
// add Product
AddProductStart :(state)=>{
  state.error = false
  state.isFatching = true;
},
AddProductSucess :(state,action)=>{
state.isFatching = true;
state.isSucess = true;
alert("Sucessfully added")
state.products.push(action.payload)
},
AddProductFail:(state)=>{
  state.isFatching = false;
  state.error =  true;
},

// update Product 
updateProductStart :(state)=>{
  state.error = false
  state.isFatching = true;
},
updateProductSucess :(state,action)=>{
  state.isFatching = true; 
  // console.log(state.products,"products")
 
  state.products[state.products.findIndex((item)=>item._id === action.payload._id)] = action.payload;
  },        
updateProductFail:(state)=>{
  state.isFatching = false;
  state.error =  true;
}
  
  }
});

export const {getProductFail, AddProductFail,AddProductStart,AddProductSucess, getProductStart, getProductSucess,DeleteProductFail, DeleteProductSucess , DeleteProductStart , updateProductFail, updateProductStart,updateProductSucess} = productSlice.actions;
export default productSlice.reducer

