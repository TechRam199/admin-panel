import React, { useState } from 'react'
import Style from "./NewProduct.module.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../Firebase';
import { AddProduct } from '../../../Redux/ApiCalls';
import { useDispatch, useSelector } from 'react-redux';



function Product1() {

  const {error , isSucess} = useSelector(state=>state.product)
  console.log(isSucess,"isSucessssd")
const [inputs , setinputs] = useState({})
const [cat, setcat] = useState([])
const [ file , setFile] = useState(null)

const dispatch = useDispatch()

const handleChange =(e)=>{
setinputs({...inputs ,[e.target.name] : e.target.value})
}
const hanndleCategory = (e)=>{
  setcat(e.target.value.split(","))
}

console.log(cat,"cat")

const handleClick = (e)=>{
e.preventDefault()

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
      const product = {...inputs , img:downloadURL,cat:cat};
      AddProduct(product, dispatch)


    });
  }
);

}




  return (
    <div className={Style.Containor}>
      <h3>New Product</h3> 
    <form action="" className={Style.formContainor}>
<div className={Style.addProductItem}>
  <label>Upload Image</label>
  <input type="file" onChange={(e)=>setFile(e.target.files[0])}  className={Style.value}/>
</div>

<div className={Style.addProductItem}>
  <label>Title</label>
  <input type="text" name='title' placeholder='John'  onChange={handleChange} className={Style.value}/>
</div>

<div className={Style.addProductItem}>
  <label>Descrption</label>
  <input type="text" name='desc'  placeholder='Description'  onChange={handleChange} className={Style.value}/>
</div>

<div className={Style.addProductItem}>
  <label>Price</label>
  <input type="number" name='price' placeholder='100'  onChange={handleChange}  className={Style.value}/>
</div>

<div className={Style.addProductItem}>
  <label>Category</label>
  <input type="text" name='cat'  placeholder='jeans and shirt'  onChange={hanndleCategory} className={Style.value}/>
</div>
<div className={Style.addProductItem}>
  <label>Stock</label>
  <select name="isStock" id=""  onChange={handleChange}>
<option value="yes">yes</option>
<option value="no">no</option>
</select>
</div>
<button className={Style.addProudctButton}  onClick={handleClick}>Create Now</button>


    </form>
    </div>
  )
}

export default Product1
