import React from "react";
import "./membersWidget.css";
import { Visibility } from "@mui/icons-material";

function MembersWidget() {
  return (
    <div className="membersWidgetContainer">
      <span className="membersWidgetTitle">Newly Joined Members</span>
      <ul className="memberWidgetList">
        <li className="memberWidgetListItem">
          <img
            src="images/members/thom.jpg"
            alt="internet issues"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUserName">Thom Smith</span>
            <span className="memberWidgetUserTitle">React Dev</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>

        <li className="memberWidgetListItem">
          <img
            src="images/members/admin1.jpg"
            alt="internet issues"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUserName">Hela Swong</span>
            <span className="memberWidgetUserTitle">React Dev</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>

        <li className="memberWidgetListItem">
          <img
            src="images/members/ehiz.jpg"
            alt="internet issues"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUserName">Wire Graten</span>
            <span className="memberWidgetUserTitle">JS Dev</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>

        <li className="memberWidgetListItem">
          <img
            src="images/members/lady.jpg"
            alt="internet issues"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUserName">Canera Hypod</span>
            <span className="memberWidgetUserTitle">Python Dev</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>

        <li className="memberWidgetListItem">
          <img
            src="images/members/man.jpg"
            alt="internet issues"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUserName">Vehora Derylov</span>
            <span className="memberWidgetUserTitle">C++ Dev</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MembersWidget;
