import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";


const user1Slice = createSlice({
  name: "user1",
  initialState: {
    userslist:[],
    isFatching: false,
    error: false,
    isSucess : false,
   
  },
  reducers: {
    // Get All Data
   getuser1Start :(state)=>{
    state.isFatching = true
    state.error = false
   },
    getuser1Sucess :(state,action)=>{
    state.isFatching = true;
    state.userslist= action.payload
  
   
   },
   getuser1Fail:(state)=>{
state.isFatching = false;
state.error = true
},

// Delete user1
Deleteuser1Start :(state)=>{
  state.isFatching = true
  state.error = false
 },
Deleteuser1Sucess :(state,action)=>{
  state.isFatching = true;
  console.log(state.userslist,"deleteaction")
 state.userslist = state.userslist.filter((item)=>item._id!==action.payload)
   },

  Deleteuser1Fail:(state)=>{
state.isFatching = false;
state.error = true
 },
// add user1
Adduser1Start :(state)=>{
  state.error = false
  state.isFatching = true;
},
Adduser1Sucess :(state,action)=>{
state.isFatching = true;
alert("Sucessfully added")
state.userslist.push(action.payload)
},
Adduser1Fail:(state)=>{
  state.isFatching = false;
  state.error =  true;
},

// update user1 
updateuser1Start :(state)=>{
  state.error = false
  state.isFatching = true;
},
updateuser1Sucess :(state,action)=>{
  state.isFatching = true; 
  // console.log(state.user1s,"user1s")
 
  state.user1[state.user1.findIndex((item)=>item._id === action.payload._id)] = action.payload;
  },        
updateuser1Fail:(state)=>{
  state.isFatching = false;
  state.error =  true;
}
  
  }
});

export const {getuser1Fail, Adduser1Fail,Adduser1Start,Adduser1Sucess, getuser1Start, getuser1Sucess,Deleteuser1Fail, Deleteuser1Sucess , Deleteuser1Start , updateuser1Fail, updateuser1Start,updateuser1Sucess} = user1Slice.actions;
export default user1Slice.reducer

