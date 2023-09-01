import React from "react";
import {
  NotificationsNone,
  Language,
  Settings,
  ChatBubble,
} from "@mui/icons-material";
import "./topnav.css";

function TopNav() {
  return (
    <div className="topnavContainer">
      <div className="topnavWrapper">
        <div className="topLeft">
          <span className="logo">AdminDash</span>
        </div>
        <div className="topRight">
          <div className="topnavIconContainer">
            <NotificationsNone className="topnavIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topnavIconContainer">
            <Language className="topnavIcon" />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topnavIconContainer">
            <Settings className="topnavIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topnavIconContainer">
            <ChatBubble className="topnavIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="internet issue"
            className="adminImg"
          />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
