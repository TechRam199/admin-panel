<<<<<<< HEAD
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
=======
import React from "react";
import "./Sidebar.css";
import TimelineIcon from '@mui/icons-material/Timeline';

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">      
                  <li className="sidebarlistItem active">
              <LineStyleIcon className="sidebarIcon"/>
              Home
            </li>
            </Link>

            <li className="sidebarlistItem">
              <TimelineIcon  className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarlistItem">
              <TrendingUpIcon className="sidebarIcon"/>
              Sales 
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="Link">
            <li className="sidebarlistItem active">
              <Person2OutlinedIcon className="sidebarIcon" />
              User 
            </li>
            </Link>
            <Link to="/products" className="Link">
            <li className="sidebarlistItem">
              <StorefrontOutlinedIcon  className="sidebarIcon"/>
              Products
            </li>
            </Link>
            <li className="sidebarlistItem">
              <AttachMoneyOutlinedIcon className="sidebarIcon"/>
              Transactions
            </li>
            <li className="sidebarlistItem">
              <BarChartOutlinedIcon className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>      

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem active">
              <EmailOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarlistItem">
              <DynamicFeedOutlinedIcon  className="sidebarIcon"/>
              Feedback
            </li>
            <li className="sidebarlistItem">
              <ChatBubbleOutlineOutlinedIcon className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem active">
              <WorkOutlineOutlinedIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarlistItem">
              <TimelineIcon  className="sidebarIcon"/>
              Analytics
            </li>
            {/* <li className="sidebarlistItem">
              <ReportOutlinedIcon className="sidebarIcon"/>
              Reports 
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
>>>>>>> origin/main
