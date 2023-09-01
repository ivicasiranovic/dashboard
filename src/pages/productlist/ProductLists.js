import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteForeverOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { productData } from "../../datafile/productData";
import "./productlist.css";

function ProductList() {
  const [data, setData] = useState(productData);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "products",
      headerName: "products",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              src={params.row.img}
              alt="no internet"
              className="productListImg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "stock", headerName: "stock", width: 200 },
    {
      field: "status",
      headerName: "status",

      width: 90,
    },
    {
      field: "price",
      headerName: "price",
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
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteForeverOutlined
              className="productDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productListContainer">
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

export default ProductList;
