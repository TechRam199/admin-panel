import User from "../Pages/User/User";
import { loginFailure, loginStart, loginSuccess } from "./UserRedux.js";
import { publicRequest, userRequest } from "../RequestMethod";
import { DeleteProductFail, DeleteProductStart, DeleteProductSucess, UpdateProductFail, UpdateProductStart, UpdateProductSucess, addProductFail, addProductStart, addProductSucess, getProductFail, getProductStart, getProductSucess } from "./productRedux";

export const Loginfirst = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProduct = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await userRequest.get("/products");
    dispatch(getProductSucess(res.data));
  } catch (error) {
    dispatch(getProductFail());
  }
};


export const DeleteProduct = async (id,dispatch) => {
  dispatch(DeleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(DeleteProductSucess(id));
  } catch (error) {
    dispatch(DeleteProductFail());
  }
};
//update
export const updateProduct = async (id, product,dispatch) => {
  dispatch(UpdateProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(UpdateProductSucess({id, product}));
  } catch (error) {
    dispatch(UpdateProductFail());
  }
};

//Add
export const addProduct = async (product,dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`,product);
    dispatch(addProductSucess(res.data));
  } catch (error) {
    dispatch(addProductFail());
  }
};