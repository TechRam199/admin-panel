import React from "react";
import Style from "./Home.module.css";
import FeaterInfo from "../../FeaterInfo/FeaterInfo";
import Chart from "../../Chart/Chart";
import Widgitsm from "../../WidgetSm/Widgitsm";
import WidgetLg from "../../WidgetLg/WidgetLg";
import { useState, useMemo, useEffect } from "react";
import { userRequest } from "../../../RequestMethod";



function Home() {
  const [userStats , setUserState] = useState([])

const MONTH = useMemo(
  ()=>[
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[])




  useEffect(()=>{
const getStats = async()=>{
  try {
     const res = await userRequest.get("/users/userss/stats")
console.log(res.data,"resdata")
    res.data.map(item=>
      setUserState(prev=>[
        ...prev,
        {name:MONTH[item._id-1],"Active User":item.total}
      ])
    )
  } catch (error) {
    
  } 
}
getStats()
},[MONTH])

console.log(userStats,"userStates")




  
  return <div className={Style.Containor}>
   
<FeaterInfo/>
<Chart data={userStats} title={"User Anaylatic"} grid  dataKey={"Active User"}/>
<div className={Style.HomeWidget}>
<Widgitsm/>
<WidgetLg/>
</div>

  </div>;
}

export default Home;
