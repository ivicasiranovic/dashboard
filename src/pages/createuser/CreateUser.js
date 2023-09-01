import React from "react";
import "./createuser.css";

function CreateUser() {
  return (
    <div className="createUserContainer">
      <h1 className="newUserTitle">New User</h1>
      <form className="createUserForm">
        <div className="newUserItem">
          <label>User Name</label>
          <input type="text" placeholder="Disy" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Daisy Dominic" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="daisy@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="text" placeholder="******" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+14 663 777" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Bangkock" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <input type="text" placeholder="Daisy" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label for="male">Female</label>
            <input type="radio" name="gender" id="other" />
            <label for="male">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
