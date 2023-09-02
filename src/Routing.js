import React, { useEffect, useState } from 'react'
import Topbar from "./component/Topbar/Topbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from "./component/Pages/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import NewProduct from "./component/Pages/NewProduct/NewProduct"
import Product from "./component/Pages/Product/Product";
import User from "./component/Pages/User/User";
import EditProduct from "./component/Pages/EditProduct/EditProduct";
import EditUser from "./component/Pages/EditUser/EditUser";
import Newuser from "./component/Pages/Newuser/Newuser";
import Login from "./component/Pages/Login/Login";
import LoginType from './component/Pages/LoginType/LoginType';
import { userRequest } from './RequestMethod';

function Routing() {



  return (
    <div>
    
    <Topbar/>
   <div className="containor">
<Sidebar/>
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/user" element={<User/>}/> 
  <Route exact path="/Newuser" element={<Newuser/>}/>
  <Route exact path="/user/:id" element={<EditUser/>}/>
  <Route exact path="/Product" element={<Product/>}/>
  <Route exact path="/Product/:id" element={<EditProduct/>}/>
  <Route exact path="/NewProduct" element={<NewProduct/>}/>
  <Route exact path="/Login" element={<Login/>}/>
  <Route exact path="/LoginType" element={<LoginType/>}/>
  </Routes>
 </div>
 </div>
  )
}

export default Routing
