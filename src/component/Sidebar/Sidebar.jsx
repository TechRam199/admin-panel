import React from 'react'
import Style from "./Sidebar.module.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { QuestionAnswerOutlined, WorkHistoryOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={Style.containor}>
   <div className={Style.dashboard}>
<h4 className={Style.title}>Dashboard</h4>
<ul className={Style.SidebarList}>
    <Link to="/">
    <li className={`${Style.SidebarListitem } ${Style.active}`}>
        <LineStyleIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Home</span>
    </li>
    </Link>
    <li className={Style.SidebarListitem}>
        <TimelineIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Analytics</span>
    </li>
    <li className={Style.SidebarListitem}>
        <TrendingUpIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Sales</span>
    </li>
</ul>
 </div>


 <div className={Style.dashboard}>
<h4 className={Style.title}>Quick Menu</h4>
<ul className={Style.SidebarList}>
    <Link to="/user">
    <li className={`${Style.SidebarListitem } ${Style.active}`}>
        <Person2OutlinedIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>User</span>
    </li>
    </Link>
    <Link to="/product">   
     <li className={Style.SidebarListitem}>
        <Inventory2OutlinedIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Product</span>
    </li>
    </Link>

    <li className={Style.SidebarListitem}>
        <AttachMoneyOutlinedIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Transaction</span>
    </li>
    <li className={Style.SidebarListitem}>
        <EqualizerOutlinedIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Report</span>
    </li>
</ul>
 </div>

 <div className={Style.dashboard}>
<h4 className={Style.title}>Notification</h4>
<ul>
    <li  className={`${Style.SidebarListitem } ${Style.active}`}>
        <EmailOutlinedIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Email</span>
    </li>
    <li className={Style.SidebarListitem}>
        <DynamicFeedIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Feedback</span>
    </li>
    <li className={Style.SidebarListitem}>
        <ChatBubbleOutlineOutlinedIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Massege</span>
    </li>
</ul>
 </div>

 <div className={Style.dashboard}>
<h4 className={Style.title}>Staff</h4>
<ul className={Style.SidebarList}>
    <li className={`${Style.SidebarListitem } ${Style.active}`}>
        <WorkHistoryOutlined className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Manage</span>
    </li>
    <li className={Style.SidebarListitem}>
        <TimelineIcon className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Analytics</span>
    </li>
    <li className={Style.SidebarListitem}>
        <QuestionAnswerOutlined className={Style.SidebarIcon}/><span className={Style.SidebarItem}>Quality</span>
    </li>
</ul>
 </div>
    </div>
  )
}

export default Sidebar
