import { publicRequest, userRequest } from "../RequestMethod";
import { AddProductFail,
  AddProductStart,
  AddProductSucess,
  DeleteProductFail,
  DeleteProductStart,
  DeleteProductSucess,
  getProductFail,
  getProductStart,
  getProductSucess,
  updateProductFail,
  updateProductStart,
  updateProductSucess,
} from "./ProductRedux";

import { loginStart, loginFail, loginSucess } from "./UserRedux";

export const login1 = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSucess(res.data));
  } catch (error) {
    dispatch(loginFail());
  }
};

// get Product
export const getProduct = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");

    dispatch(getProductSucess(res.data));
  } catch (error) {
    dispatch(getProductFail());
  }
};

export const DeleteProduct = async (id, dispatch) => {

   dispatch(DeleteProductStart())
  try {
      const res = await userRequest.delete(`/products/${id}`);
    dispatch(DeleteProductSucess(id));
  } catch (error) {
    dispatch(DeleteProductFail());
  }
};

// Add Product

export const AddProduct = async (product, dispatch) => {
  dispatch(AddProductStart())
 try {
     const res = await userRequest.post(`/products/`,product);
     console.log(res.data,"resdata")
   dispatch(AddProductSucess(res.data));
 } catch (error) {
   dispatch(AddProductFail());
 }
};


// Update Product 
export const updateProduct =async ( product,_id,dispatch)=>{
dispatch(updateProductStart())
try {
  const res = await userRequest.put(`/products/${_id}`,product)
  dispatch(updateProductSucess(product))
} catch (error) {
  dispatch(updateProductFail())
}
}