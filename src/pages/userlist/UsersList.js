import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { usersData } from "../../datafile/userData";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function UsersList() {
  const [data, setData] = useState(usersData);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user">
            <img
              src={params.row.avatar}
              alt="no internet"
              className="userImg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "email", width: 200 },
    {
      field: "status",
      headerName: "status",

      width: 90,
    },
    {
      field: "payment",
      headerName: "payments",
      width: 160,
    },
    {
      field: "action",
      headerName: "action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actionContainer">
            <Link to={"/user/" + params.row.id}>
              <button className="editUser">Edit</button>
            </Link>
            <DeleteForeverOutlined
              className="deletelist"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default UsersList;
