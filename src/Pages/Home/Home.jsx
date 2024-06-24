import React, { useMemo, useState,useEffect } from 'react'

import "./Home.css"
import FeaterInfo from '../../component/FeaterInfo/FeaterInfo'
import Chart from '../../component/Chart/Chart'
import WidgetLg from '../../component/WidgetLg/WidgetLg'
import WidgetSm from '../../component/WidgetSm/WidgetSm'

import { userRequest } from '../../RequestMethod'
import axios from 'axios'



function Home(props) {
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
  return (
    <div className='home'>
      <FeaterInfo/>
      <Chart data={userStats} title={"User Anaylatic"} grid  dataKey={"Active User"}/>
      <div className="homeWidgets">

    <WidgetSm/>
 <WidgetLg/>  
  
      </div>
    </div>
  )
 }

export default Home
