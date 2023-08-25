import React, { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  Switch,
  useNavigate,
} from "react-router-dom";
import UserList1 from "./Pages/UserList/UserList1";
import User from "./Pages/User/User";
import NewUser1 from "./Pages/newUser/NewUser1";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
import ProdChart from "./component/ProdChart/ProdChart";
import { useSelector } from "react-redux";

const LamaRouting = () =>   {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <HashRouter baseName="/">{ user?<LoggedInRoutes /> :<Login/>} </HashRouter>
    </div>
  );
};

const LoggedInRoutes = () => {
 
  return (
    <>
      <Topbar />
      <div className="containor">
        <Sidebar />
        <Routes>
          <Route exact path="/" Component={Home} Login={<Login />} />
          <Route exact path="/users" Component={UserList1} />
          <Route exact path="/user/:userId" Component={User} />
          <Route path="/NewUser" Component={NewUser1} />
              <Route exact path="/products" Component={ProductList} />
              <Route exact path="/product/:productId" Component={Product} />
              <Route path="/newproduct" Component={NewProduct} />
              <Route path="/Login" Component={Login} />
              <Route path="/prodchart" Component={ProdChart} />
            
        
        </Routes>
      </div>
    </>
  );
};

export default LamaRouting;
