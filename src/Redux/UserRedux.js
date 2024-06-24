import { createSlice } from "@reduxjs/toolkit";

// Login Start with self
const  userSlice = createSlice({
    name:"user",
    initialState:{
        error : false,
        isFatching : false,
     currentUser :null,
    },
    reducers:{
       loginStart : (state)=>{

state.isFatching = true
       },
       loginSucess : (state, action)=>{
state.isFatching = false
state.currentUser = action.payload

       },
 loginFail :(state)=>{
state.error = true   
state.isFatching = false
       },
       logout :(state)=>{
state.currentUser = null
state.error = false
       },
       
    },
   
});


export const {loginFail,logout, loginStart,loginSucess} = userSlice.actions
export default userSlice.reducer
