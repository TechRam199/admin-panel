import { publicRequest } from "../user1RequestMethod";
import {
  Adduser1Fail,
  Adduser1Start,
  Adduser1Sucess,
  Deleteuser1Fail,
  Deleteuser1Start,
  Deleteuser1Sucess,
  getuser1Fail,
  getuser1Start,
  getuser1Sucess,
  updateuser1Fail,
  updateuser1Start,
  updateuser1Sucess,
} from "./user1Redux";



// get Product
export const getuser1 = async (dispatch) => {
  dispatch(getuser1Start());
  try {
    const res = await publicRequest.get("/users");

    dispatch(getuser1Sucess(res.data));
  } catch (error) {
    dispatch(getuser1Fail());
  }
};

export const Deleteuser = async (id, dispatch) => {
  console.log(id,"deleteuser")

   dispatch(Deleteuser1Start())
  try {
      // const res = await publicRequest.delete(`/users/${id}`);
    dispatch(Deleteuser1Sucess(id));
  } catch (error) {
    dispatch(Deleteuser1Fail());
  }
};

// Add Product

export const adduser1 = async (userdata, dispatch) => {
  dispatch(Adduser1Start())
 try {
     const res = await publicRequest.post(`/auth/register`,userdata);
     console.log(res.data,"resdata")
   dispatch(Adduser1Sucess(userdata));
 } catch (error) {
   dispatch(Adduser1Fail());
 }
};


// Update Product 
export const updateuser1 =async (_id,dispatch, userdata)=>{
dispatch(updateuser1Start())
try {
  const res = await publicRequest.put(`/users/${_id}`,userdata)
  dispatch(updateuser1Sucess(userdata))
} catch (error) {
  dispatch(updateuser1Fail())
}
}