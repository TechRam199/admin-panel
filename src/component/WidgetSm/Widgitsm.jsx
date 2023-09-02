import React from 'react'
import Style from "./WidgetSm.module.css"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function Widgitsm() {

const data = [
     { id:1, name: "Ram Sharma", image:"https://m.media-amazon.com/images/I/716N7ay-YOL._SX679_.jpg" },
    { id: 2, name: "Bhanu Sharma", image: "https://m.media-amazon.com/images/I/716N7ay-YOL._SX679_.jpg"}, 
    { id:3, name: "Ram Sharma", image:"https://m.media-amazon.com/images/I/716N7ay-YOL._SX679_.jpg" },
    { id: 4, name: "Bhanu Sharma", image: "https://m.media-amazon.com/images/I/716N7ay-YOL._SX679_.jpg"}, 
    { id:5, name: "Ram Sharma", image:"https://m.media-amazon.com/images/I/716N7ay-YOL._SX679_.jpg" },
    { id: 6, name: "Bhanu Sharma", image: "https://m.media-amazon.com/images/I/716N7ay-YOL._SX679_.jpg"}, 

]


  return (
    <div className={Style.Containor}>
        <span className={Style.WidgetListTitle}>New Join Member</span>

{
    data.map((item)=>{
        return (
            <ul className={Style.WidgetListItem}>
<img src={item.image}alt="" className={Style.WidgetImage} />

<div className={Style.WidgetTitle}>
    <span className={Style.WidgetTitle}>{item.name}</span>
    </div>
    <button className={Style.WidgetListButton}><VisibilityOutlinedIcon className={Style.VisibleIcon}/>Display</button>
</ul>

      )})
}

   
    </div>
  )
}

export default Widgitsm
