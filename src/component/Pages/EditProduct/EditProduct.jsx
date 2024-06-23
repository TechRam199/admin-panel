import React from 'react'
import {useState} from "react"
import Style from "./EditProduct.module.css"
import Chart from '../../Chart/Chart'
import { Link, useLocation } from 'react-router-dom';
import PublishIcon from '@mui/icons-material/Publish';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../Firebase';
import { updateProduct } from '../../../Redux/ApiCalls';


function EditProduct(_id) {
  const [file , setFile] = useState(null)
  const [editProduct, seteditProdut] = useState({})

  const dispatch= useDispatch()
const location = useLocation()
const  productId = location.pathname.split("/")[2]
const product = useSelector((state)=>state.product.products.find((item)=>item._id===productId))




const handleChange= (e )=>{
seteditProdut({...editProduct , [e.target.name]:e.target.value})

}


  const handleupdate = (_id)=>{
  
  console.log("checkk",_id)
    const fileName = new Date().getTime()+file.name;
    const storage = getStorage(app)
    const storageRef = ref(storage,fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
            default:
        }
      },  
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         
          const product = {...editProduct , img:downloadURL , _id:_id};
       
          updateProduct(product,_id ,dispatch)
          console.log(_id,"testProduct")
    
    
        });
      }
    );
    
    }


     const  productData = [
      {
        name: "January",
        "sales": 10000,
      },
      {
        name: "February",
        "sales": 5000,
      },
      {
        name: "Mrach",
        "sales": 1000,
      },
     
     
    ];
    

  return (
    <div className={Style.Containor}>
    <div className={Style.topProduct}>
    <h2 className={Style.topProductTitle}>Product </h2>
    <Link to="/LoginType">
<button className={Style.productButton}> Login Type</button>
</Link>

    <Link to="/NewProduct">
    <button className={Style.produyctButton}>Create</button>
    </Link>
    </div>

  <div className={Style.middleProduct}>
<div className={Style.middleProductLeft}>
<Chart data={productData} dataKey="sales" title="Sales Performance"/>
  
  </div>
<div className={Style.middleProductright}>
<div className={Style.Producttitle}>
<img src={product.img} alt="" className={Style.productImage} />
<span>{product.title}</span>
</div>
<div className={Style.ProductInfo}>
<span className={Style.Producttext}> Id : </span>
<span className={Style.Productvalue}>{product._id} </span>
</div>
<div className={Style.ProductInfo}>
<span className={Style.Producttext}>  Sale : </span>
<span className={Style.Productvalue}> 13 </span>
</div>

<div className={Style.ProductInfo}>
<span className={Style.Producttext}> In Stock : </span>
<span className={Style.Productvalue}> 12234356 </span>
</div>
</div>

      
    </div>

<div className={Style.ProductBottom}>
<div className={Style.ProductBottomLeft}>
<span className={Style.ProductBottomText}> Product Name</span>
<input className={Style.ProductBottomvalue} name='title' placeholder={product.title} onChange={handleChange}></input>
<span className={Style.ProductBottomText}> Product Desc</span>
<input className={Style.ProductBottomvalue} placeholder={product.desc} name='desc' onChange={handleChange}></input>

<span className={Style.ProductBottomText}> Product Price</span>
<input className={Style.ProductBottomvalue} name='price' placeholder={product.price} onChange={handleChange}></input>

<span className={Style.ProductBottomText}>Stock </span>
<select name="isstock" id="" className={Style.isstock} onChange={handleChange}>
  <option value="true"> yes</option>
  <option value="false"> No</option>
</select>

</div>
<div className={Style.ProductBottomLeft}>
<div className={Style.ProductBottomupload}>
<label htmlFor="file"> <PublishIcon/></label>
<input type="file" name='file' id='file' style={{display:"none"}}  onChange={(e)=>setFile(e.target.files[0])} />
</div>
<button className={Style.productButton} onClick={()=>handleupdate(product._id)}> Update Now </button>


  
</div>




</div>

    </div>
  )
}

export default EditProduct
