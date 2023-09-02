import axios from "axios";
//http://localhost:5000/api/products
const Base_URL = "https://ecom-backend-apis.onrender.com/api/";

const Token = () => {
  const persistData = JSON.parse(localStorage.getItem("persist:root"));
  if (persistData) {
    const currentUser = JSON.parse(persistData.user).currentUser;
    if (currentUser) return currentUser.accessToken;
    return null;
  }
  return null;
};

const result = Token();
console.log(result,"result")
// const Token =null ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//     .currentUser.accessToken: null



export const publicRequest = axios.create({
  baseURL: Base_URL, 
});

export const userRequest = axios.create({
  baseURL: Base_URL,
  headers:{
    token:`Bearer ${result}`,
  },
});
