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
