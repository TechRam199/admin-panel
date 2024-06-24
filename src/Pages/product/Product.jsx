import React from 'react'
import "./product.css"
import { Link, useLocation } from 'react-router-dom'
import Chart from '../../component/Chart/Chart'
import { productData} from '../../Dummydata'
import { Publish } from '@mui/icons-material'
import { useSelector } from 'react-redux'

function Product() {
const location = useLocation()
const productId = location.pathname.split("/")[2];
const product = useSelector((state)=>state.product.products.find((product)=>product._id===productId))
 
  return (
    <div className='product'>
    <div className="productListContainor">
        <h1 className="productTitle">Product</h1>
        <Link to="/NewProduct">
        <button className="productAddbutton">Create</button>
        </Link>
    </div>
    <div className="productTop">
        <div className="producttopLeft">
        <Chart data={productData} dataKey="sales" title="Sales Performance"/>
        </div>
        <div className="producttopRight">
            <div className="productInfotop">
                <img src={product.img} className="productInfoImage"/>
                 <span className="productName"> {product.title} </span>
            </div>
            <div className="productInfoBottom">
                <div className="productinfoItem">
                    <span className="productInfoKey">id</span>
                    <span className="productInfovalue">{product._id}</span>
                </div>
                <div className="productinfoItem">
                    <span className="productInfoKey">Sales</span>
                    <span className="productInfovalue">120</span>
                </div>
               
                <div className="productinfoItem">
                    <span className="productInfoKey">in stock</span>
                    <span className="productInfovalue">{product.isStock}</span>
                </div>
            </div>
        </div>
    </div>
    <div className="productBottom">
<form className="productForm">

<div className="productformLeft">
<label > Product Name</label>
<input type='text' placeholder={product.title}/>
<label > Product Description</label>
<input type='text' placeholder={product.desc}/>
<label > Product Price</label>
<input type='text' placeholder={product.price}/>
<label>in Stock</label>
<select id='isstock' name='isstock'>
    <option value="true">Yes</option>
    <option value="false">No</option>
</select> 
</div>
<div className="productformRight">
    <img src={product.img} alt="" className="productUploadimg" />
    <label for="file">
        <Publish className='productupload'/>
    </label>
    <input type="file" id="file" style={{display:"none"}} />
    <button className="productButton">Update Now</button>
</div>


</form>


    </div>
    </div>
  )
}

export default Product
