import React from 'react'
import Style from "./Product.module.css"
import { rows } from '../../../DummyData'
import {Link} from "react-router-dom"
import {useEffect} from "react"

import { DataGrid} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector , useDispatch } from 'react-redux';
import { DeleteProduct, DelteProduct, getProduct } from '../../../Redux/ApiCalls'

function Product() {
const dispatch = useDispatch()
const products = useSelector(state=>state.product.products)

useEffect(() => {
  console.log("ProductTest")
  getProduct(dispatch);
}, []); 


const handleDelete = (id) => {
  DeleteProduct(id, dispatch)
 };




    const columns = [
        { field: '_id', headerName: 'ID', width: 220},
        { field: 'img', headerName: 'Products', width: 250 , renderCell:(params)=>{
       
          return  <div className={Style.ProductListItem}>
<img src={params.row.img} alt="" width="50px" height="50px" className={Style.ProductImage} />
{params.row.title}

          </div>
        } },
          
        // { field: 'email', headerName: 'email', width: 130 },
        { field: 'stock', headerName: 'Stock', width: 120 },
        {
          field: 'price',
          headerName: 'price',
          width:150,
        },
   
        {
          field : "Action",
          headerName:"Active",
          width:200,
          renderCell : (params)=>{
            return <>
         <Link to={`/Product/${params.row._id}`}>
            <button className={Style.EditButton}>Edit</button>
            </Link>
            <DeleteIcon className={Style.DeleteButton} onClick={()=> handleDelete(params.row._id)}/>
            </>
          }
        }
      ];
      


  return (
    <div  className={Style.Containor}>

      <h2>ProductList</h2>

      <DataGrid  rows={products}columns={columns}
        getRowId={(row)=>row._id}
      initialState={{pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
    //  disableRowSelectionOnClick 
       checkboxSelection/>  


    </div>
  )
}

export default Product
