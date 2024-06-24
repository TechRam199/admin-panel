import React, { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Tablerows} from "../../Dummydata";
import { DeleteOutline } from "@material-ui/icons";

import {Link} from "react-router-dom";

function UserList1() {
 

    const [data, setdata] = useState(Tablerows)

    const handleDelete = (id)=>{
      setdata(data.filter((item)=>item.id!==id))  
    }


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user",headerName : "User", width: 200 , renderCell:(params)=>{
        console.log(params)
        return <div className="userListuser">
            <img  className="userListimg"src={params.row.avatar} alt="" width="50px" height="40px"/>
            {params.row.username}
        </div>
    }},
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "transctions",
      headerName: "Tranctions Volume", 
      width: 160,},
      {
field:"active",
headerName:"Active",
width:150,
renderCell:(params)=>{


    return (
      <>
      <Link to={"/user/"+ params.row.id}>
        <button className="userListEdit">Edit</button>
      </Link>
      <DeleteOutline
        className="userListDelete"
        onClick={() => handleDelete(params.row.id)}
      />
    </>
    )
}

      }
  ];

 
  return (
    <div className="userList">
      <DataGrid  rows={data} disableRowSelectionOnClick  columns={columns}  checkboxSelection
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize:3 },
                },
      
              }}
      />

    </div>
  );
}

export default UserList1;
