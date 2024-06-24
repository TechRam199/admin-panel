import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import Style from "./WidgetLg.module.css"
=======
import "./widgetLg.css"
>>>>>>> origin/main
import { userRequest } from '../../RequestMethod'
import { format } from 'timeago.js'

function WidgetLg() {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/main
    </div>
  )
}

<<<<<<< HEAD
export default WidgetLg
=======
export default WidgetLg 
 
>>>>>>> origin/main
