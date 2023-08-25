import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser:null,
    isFatching: false,
    error: false,
    logoutAction :null
   
  },
  reducers: {
   loginStart :(state)=>{
    state.isFatching = true
   },
    loginSuccess :(state,action)=>{
    state.isFatching = false;
    state.currentUser= action.payload
   },
   logoutAction:(state)=>{
state.isFatching = false;
state.currentUser = null

   },
   loginFailure :(state)=>{
    state.isFatching = false;
    state.error = true;
   },
  },
});

export const { loginStart,loginSuccess,loginFailure, logoutAction } = userSlice.actions;
export default userSlice.reducer;
