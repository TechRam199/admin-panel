import React, { useEffect } from 'react'
import Style from "./User.module.css"
import { DataGrid} from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch , useSelector } from 'react-redux';
import { Deleteuser, getuser1 } from '../../../Redux/user1Apicalls';

function User() {
 
  const dispatch = useDispatch()
  const users = useSelector(state=>state.user1.userslist)
  
console.log(users,"userrss")

  useEffect(()=>{
    getuser1(dispatch)
    },[dispatch])
    



 
  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'image', headerName: 'Username', width: 300, renderCell:(params)=>{
      return <>
      <div className={Style.profileImage}><img src={params.row.profileImage} width="50px" height="50px"  alt="" className={Style.image} />
      {params.row.username }
      </div>
    
      </>
    }},
    
    { field: 'email', headerName: 'Email', width: 150 },
 
    {
      field: 'fullName',
      headerName: 'Active',
      width: 150,
      renderCell :(params)=>{
        return  <>
        <Link to={`/user/${params.row._id}`}>
        <button className={Style.EditButton}>Edit</button>
        </Link>
<DeleteOutlinedIcon className={Style.DeleteButton} onClick={()=>{handleDelete(params.row._id)}}/>
        </>
      }
    },
 
  ];

  const handleDelete =(id)=>{
    Deleteuser(id,dispatch)
console.log("id",id)
  } 
  

  return (
    <div className={Style.Containor}>
            <DataGrid
        rows={users} columns={columns}
        getRowId={(row)=>row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
          
        }}
          pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        checkboxSelection
      />

      
    </div>
  )
}

export default User
