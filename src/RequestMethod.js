import axios from "axios";

const Base_URL = "https://ecom-backend-apis.onrender.com/api";

const newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2U3N2M5OTkxZjkzOGE1NWNjOTY4NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTI1MjkwMCwiZXhwIjoxNjkxNTEyMTAwfQ.vyfur4ypvSo8wT59CIFJUUbGp_atmX42feN8vCWMmjA"

const Token = () => {
  try {
    const persistData = JSON.parse(localStorage.getItem("persist:root"));
   
    const currentUser = JSON.parse(persistData.user).currentUser.accessToken;
     
    return currentUser
  } catch (error) {
    // Handle the error here or return a default value if something goes wrong
    console.error("Error parsing token:", error);
    return null; // Or you can return a default token value here
  }
};


const result = Token()
console.log(result,"result")
// const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// .currentUser
// ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//     .currentUser.accessToken 
// : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//     .currentUser;



//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjJhNzkxNDFlMTczZTUzOWJmNWUxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTQzNjA0NSwiZXhwIjoxNjg5Njk1MjQ1fQ.OfsIjCj8jA9-8DlK6dwIWjMyezT21J-xw86ICQtU0Is"

// console.log(localStorage.getItem("persist:root"));
export const publicRequest = axios.create({
  baseURL: Base_URL,
});

export const userRequest = axios.create({
  baseURL: Base_URL,
  headers:{
    token:`Bearer ${result}`,
  },
});

