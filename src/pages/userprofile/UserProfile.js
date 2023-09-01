import React from "react";
import "./userprofile.css";
import {
  PermIdentity,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="profileTopContainer">
      <div className="profileTitleContainer">
        <h1 className="profileTitle">Edit Profile</h1>
        <Link to="/createuser">
          <button className="profileAddButton">Create User</button>
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileShow">
          <div className="profileShowTop">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="no internet"
              className="profileShowImg"
            />
            <div className="profileDetails">
              <span className="myProfileName">Behorst Vnobek</span>
              <span className="myProfileTitle">React Dev</span>
            </div>
          </div>
          <div className="profileShowBottom">
            <span className="profileShowTitle">Acount Details</span>
            <div className="profileShowInfo">
              <PermIdentity className="profileShowIcon" />
              <span className="profileShowInfoTitle">Behorst</span>
            </div>
            <div className="profileShowInfo">
              <CalendarToday className="profileShowIcon" />
              <span className="profileShowInfoTitle">08.08.2023</span>
            </div>
            <div className="profileShowInfo">
              <PhoneAndroid className="profileShowIcon" />
              <span className="profileShowInfoTitle">+14 56 44</span>
            </div>
            <div className="profileShowInfo">
              <MailOutline className="profileShowIcon" />
              <span className="profileShowInfoTitle">behorst@gmail.com</span>
            </div>
            <div className="profileShowInfo">
              <LocationSearching className="profileShowIcon" />
              <span className="profileShowInfoTitle">Mogadishu</span>
            </div>
          </div>
        </div>

        <div className="profileUpdate">
          <span className="profileUpdateTitle">Edit</span>
          <form className="profileUpdateForm">
            <div className="profileUpdateLeft">
              <div className="profileUpdateItem">
                <label>profile name</label>
                <input
                  type="text"
                  placeholder="behorst"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>full name</label>
                <input
                  type="text"
                  placeholder="behorst"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>email</label>
                <input
                  type="text"
                  placeholder="behorst"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>phone</label>
                <input
                  type="text"
                  placeholder="behorst"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>address</label>
                <input
                  type="text"
                  placeholder="behorst"
                  className="profileUpdateInput"
                />
              </div>
            </div>

            <div className="profileUpdateRight">
              <div className="profileUpdateUpload">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="no internet"
                  className="profileUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="profileUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="profileUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
