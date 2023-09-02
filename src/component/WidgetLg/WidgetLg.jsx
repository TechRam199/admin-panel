import React, { useEffect, useState } from 'react'
import Style from "./WidgetLg.module.css"
import { userRequest } from '../../RequestMethod'
import { format } from 'timeago.js'

function WidgetLg() {
  const [order, setorder] = useState([])

  useEffect(()=>{
    const getOrder =async ()=>{
  const res =await userRequest.get("/orders")
 
  setorder(res.data)
    }

    getOrder()
  },[])
  
  
  


  return (
    <div className={Style.Containor}>
      <span className={Style.WidgetListTitle}>Latest Transction</span>

      <table  className={Style.WidgetTable} >
<tr >
<th>Customer ID</th>
<th>Date</th>
<th>Amount</th>
<th>Status</th>

</tr>
{
  order.map((item)=>{
  return  <>
  <tr>
<td>{item._id}</td>
<td>{format(item.createdAt)}</td>
<td>{item.amount}</td>
<td><button className={Style.btn}>{item.status}</button></td>
</tr>
  
</>
  })



}





      </table>

 <table>



 </table>
    </div>
  )
}

export default WidgetLg
