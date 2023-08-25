import React, { useState } from "react";
import "./productlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { productRows } from "../../Dummydata";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { DeleteProduct, getProduct  } from "../../Redux/ApiCalls";
import { useDispatch , useSelector } from "react-redux";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.product.products)
console.log(products,"products") 

  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
   DeleteProduct(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
         field: "product",
      headerName: "products",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListitem">
            <img
              className="productListimg"
              src={params.row.img}
              alt=""
              width="50px"
              height="40px"
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "isStock", headerName: "Stock", width: 100 },

    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "active",
      headerName: "Active",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/"+ params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableRowSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </div>
   );
}

export default ProductList;
