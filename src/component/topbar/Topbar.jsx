import React, { useState } from 'react'
import "./topbar.css";
import useEffect from "react"
import Login from '../../Pages/Login/Login';
import { Link, Navigate, Redirect, useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { logoutAction } from "../../Redux/UserRedux";
import { useDispatch } from "react-redux";
function Topbar() {
 
// sessionStorage.setItem('name',' Ram Sharma')
sessionStorage.getItem('name')
const dispatch = useDispatch()
const navigate = useNavigate()
//   console.log(window,"winsodow")



  const handlelogout = ()=>{
dispatch(logoutAction())
  }
  // useEffect(()=>{
  //   if(!localStorage.getItem("_id")){
  //     Navigate("/Login")
  //     }
  // },[])
  const errormsg = "age is less the 18 years"

const  [error , seterror] = useState(false)



const hanleChange = (e)=>{
 const age = e.target.value;

 if(age<18){ 

  seterror(true)
}
else{
 seterror(false)
}
}


  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="top-left">
          {/* <input type='number'  name='age'onChange={hanleChange}/>
          {
            error ? errormsg : "not valid"
          } */}

          <span className="logo"> lamaadin</span>
        </div>
        <div className="topright">
          <div className="topbarIconsContainor">
            <NotificationsNoneIcon />
            <span className="topIconbadge">2</span>
          
          </div>
          <div className="topbarIconsContainor">
            <LanguageIcon/>
            <span className="topIconbadge">2</span>
          
          </div>
          <div className="topbarIconsContainor">
            <SettingsIcon />
          </div>
          <img src="https://m.media-amazon.com/images/I/61GGs6fK69L._UY879_.jpg" alt="not found" className="topAvatar" />
         <Link to="/Login">
          <button className="loginButton" >Login</button>
          </Link>
          <button className="logoutButton" onClick={handlelogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
