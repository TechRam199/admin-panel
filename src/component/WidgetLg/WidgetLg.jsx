import React, { useEffect, useState } from 'react'
import "./widgetLg.css"
import { userRequest } from '../../RequestMethod'
import { format } from 'timeago.js'

function WidgetLg() {
  const [Orders,setOrders]= useState([])

  useEffect(()=>{
  const getOrders = async()=>{
  try {
    const res = await userRequest.get("/orders")
    setOrders(res.data)
  } catch (error) {
    
  }
  }
  getOrders()
  },[])
  
console.log(Orders,"orders")

const Button = ({type})=>{
return <button className={'widgetlgButton' + type} >{type}</button>
};

  return (
    <div className='widgetlg'>
   <h2 className="widgetlgTitle">Latest Transctions</h2>
   <table className="widgetlgTable">
    <tr className='widgetlgTr'> 
    <th className="widgetlgTh">Customer</th>
    <th className="widgetlgTh">Date</th>
    <th className="widgetlgTh">Amount</th>
    <th className="widgetlgTh">Status</th>
  
    </tr>
{
  Orders.map(order=>{
    return(

    <tr className="widgetlgTr" key={order._id}>
      <td className="widgetlgUser">
       
        <span className="widgetlgName">{order._id}</span>
      </td>
      <td className="widgetlgDate"> {format(order.createdAt)}</td>
      <td className="widgetlgAmount"> ${order.amount}</td>
      <td className="widgetlgStatus"> 
      <Button type={order.status}/>
      </td>
    </tr>
    )
  })
}

   </table>
    </div>
  )
}

export default WidgetLg 
 