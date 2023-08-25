import React from "react";
import "./user.css";
import {Link} from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Phone, Publish } from "@mui/icons-material";
function User() {
  console.log("user component rendered!");
  return (
    <div className="user">
      <div className="userTitleContainor">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddbutton">Create</button>
        </Link>
      </div>
      <div className="userContainor">
        <div className="userShow">
<div className="userShowtop">
  <img src= "https://m.media-amazon.com/images/I/51aK1+PtcqL._UX679_.jpg" alt="" className="userShowImage" />

  <div className="userShowtopTitle">
    <span className="userShowuserName">Allen Kray</span>
    <span className="userShowusertitle">Soft Enginner</span>
  </div>
</div>
<div className="userShowBottom">
<span className="usertitleBottom">Account  Detail</span>
  
  <div className="userInfo">
  <PersonIcon className="userShowIcon"/>
  <span className="userShowuserInfo">Ramchandra Sharma</span>
</div>

<div className="userInfo">
  <CalendarMonthIcon className="userShowIcon"/>
  <span className="userShowuserInfo">10.12.2024</span>
</div>
<span className="usertitleBottom">Contact Detail</span>
<div className="userInfo">
  
  <Phone className="userShowIcon"/>
  <span className="userShowuserInfo">8859363257</span>
</div>
<div className="userInfo">
  <EmailIcon className="userShowIcon"/>
  <span className="userShowuserInfo">sram855449@gmail.com</span>
</div>
<div className="userInfo">
  <LocationOnIcon className="userShowIcon"/>
  <span className="userShowuserInfo">New Yourk || India</span>
</div>

</div>
  </div>
        <div className="userUpdate">
<span className="userUpdateTitle">Edit Data</span>
<form className="userUpdateForm">
<div className="userupdateLeft">
  <div className="userUpdateitem">
    <lable>Username</lable>
    <input type="text" placeholder="enter  your name " className="userupdateInput"/>
  </div>
  <div className="userUpdateitem">
    <lable>Full Name</lable>
    <input type="text" placeholder="enter  your name " className="userupdateInput"/>
  </div>
  <div className="userUpdateitem">
    <lable>Email</lable>
    <input type="text" placeholder="enter  your name " className="userupdateInput"/>
  </div>
  <div className="userUpdateitem">
    <lable>Phone</lable>
    <input type="text" placeholder="enter  your name " className="userupdateInput"/>
  </div>
  <div className="userUpdateitem">
    <lable>Address</lable>
    <input type="text" placeholder="enter  your name " className="userupdateInput"/>
  </div>
</div>
<div className="userupdateRight">

<div className="userupdateUpload">

  <img src="https://rukminim2.flixcart.com/image/832/832/l20rma80/fabric/v/z/e/yes-2-35-m-unstitched-2-10m-grey-dm1-58-anand-original-imagdgffzhfeymcn.jpeg?q=70" alt="" className="userupdateImage" />
  <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
  <input type="file" id="file" style={{display:"none"}}/>
</div>
<button className="userUpdateButton">Update Now</button>
</div>
</form>
        </div>
      </div>
    </div>
  );
}

export default User;
