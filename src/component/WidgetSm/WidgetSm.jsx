import React, { useEffect, useState } from "react";
import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from "../../RequestMethod";

function WidgetSm() {
const [users,setuser] = useState([])

useEffect(()=>{
const getuser = async()=>{
try {
  const res = await userRequest.get("users/?new=true")
  setuser(res.data)
} catch (error) {
  
}
}
getuser()
},[])

console.log(users,"user tesrr")
  return (
    <div className="widgetSm">
      <span className="widgetsmTitle">New Join Member </span>
      <ul className="widgetsmList">
       {
        users.map(user=>{
          return(
<li className="widgetListItem">
        <img src={user.img || "https://m.media-amazon.com/images/I/517ANUK5-XL._AC_UL480_FMwebp_QL65_.jpg" } className="widgetsmImg" />
          <div className="widgetsmUser">
            <span className="widgetsmUsername">{user.username}</span>
            {/* <span className="widgetsmUserTitle"> SoftWere Engg</span> */}
          </div>
          <button className="widgetsmButton"><VisibilityIcon className="widgetsmIcon" />
          Display
          </button>
        </li>
  )})
}

      </ul>
    </div>
  );
}

export default WidgetSm;
