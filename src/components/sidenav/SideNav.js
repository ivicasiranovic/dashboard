import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Paid,
  Assessment,
  Inventory,
  Email,
  Grading,
  ChatBubble,
  ManageAccounts,
  Analytics,
  Report,
} from "@mui/icons-material";
import "./sidenav.css";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="sideNavContainer">
      <div className="sideNavWrapper">
        <div className="sidenavMenu">
          <h3 className="sideNavTitle">Dashboard</h3>
          <ul className="sideNavList">
            <Link to="./">
              <li className="sidenavListItem">
                <LineStyle className="sideNavIcon" />
                Home
              </li>
            </Link>
            <li className="sidenavListItem">
              <Timeline className="sideNavIcon" />
              Analytics
            </li>
            <li className="sidenavListItem">
              <TrendingUp className="sideNavIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidenavMenu">
          <h3 className="sideNavTitle">Admin menu</h3>
          <ul className="sideNavList">
            <Link to="/userList">
              <li className="sidenavListItem">
                <Person className="sideNavIcon" />
                Users
              </li>
            </Link>
            <Link to="/productList">
              <li className="sidenavListItem">
                <Paid className="sideNavIcon" />
                Products
              </li>
            </Link>
            <li className="sidenavListItem">
              <Assessment className="sideNavIcon" />
              Report
            </li>
            <li className="sidenavListItem">
              <Inventory className="sideNavIcon" />
              Transaction
            </li>
          </ul>
        </div>

        <div className="sidenavMenu">
          <h3 className="sideNavTitle">Notifications</h3>
          <ul className="sideNavList">
            <li className="sidenavListItem">
              <Email className="sideNavIcon" />
              Email
            </li>
            <li className="sidenavListItem">
              <ChatBubble className="sideNavIcon" />
              Messages
            </li>
            <li className="sidenavListItem">
              <Grading className="sideNavIcon" />
              Manage
            </li>
          </ul>
        </div>

        <div className="sidenavMenu">
          <h3 className="sideNavTitle">Our Staffs</h3>
          <ul className="sideNavList">
            <li className="sidenavListItem">
              <ManageAccounts className="sideNavIcon" />
              Manage
            </li>
            <li className="sidenavListItem">
              <Analytics className="sideNavIcon" />
              Analytics
            </li>
            <li className="sidenavListItem">
              <Report className="sideNavIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
