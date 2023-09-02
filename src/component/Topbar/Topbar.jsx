import React from 'react'
import Style from "./topbar.module.css"
import { CiSettings ,CiBellOn ,CiGlobe } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/UserRedux';


const Topbar = () => {

const dispatch = useDispatch()
const handleLogout = ()=>{
dispatch(logout())
}

  return (
    <div className={Style.containor}>
     <div className={Style.left}>
<h2 className={Style.title}> lammadin</h2>

     </div>

     <div className={Style.right}>
     <div className={Style.topIcon}>
<CiBellOn/>
 <span className={Style.badgeContent} > 4</span>  
</div>

<div className={Style.topIcon}>
<CiGlobe/>
 <span className={Style.badgeContent} > 4</span>  
</div>


<div className={Style.topIcon}>
<CiSettings/>
 
</div>
<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className={Style.profileimag} />

<button className={Style.logoutButton} onClick={handleLogout}>Logout</button>
     </div>
    </div>
  )
}

export default Topbar
