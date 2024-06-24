import React, { useState } from 'react'
import "./newProduct.css"
import app from '../../Firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addProduct } from '../../Redux/ApiCalls';
import { useDispatch } from 'react-redux';


function NewProduct() {

  const dispatch = useDispatch()
  const [input, setInput] = useState({})
  const [file, setFile] = useState(null)
  const  [category, setCategory] = useState(null)

const handleChange = (e)=>{
setInput((prev)=>{
  return {...prev,[e.target.name]:e.target.value}
}
)

}
const handleCategory = (e)=>{
setCategory(e.target.value.split(","))
console.log(category,"cat")
}

const handleClick = (e)=>{
e.preventDefault( )
const fileName = new Date().getTime()+ file.name;

console.log(file,"fileee")
const storage = getStorage( app);
  const StorageRef = ref(storage,fileName)
  const uploadTask = uploadBytesResumable(StorageRef, file)

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
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const product = {...input,downloadURL,category:category};
      addProduct(product ,dispatch)
    });
  }
);
}
console.log(file,"filetesttt")
  return (
    <div className='newproduct'>
       <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input name='file' type="file" id="file"onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" name='title'  placeholder="Apple Airpods"  onChange={handleChange}/>
        </div>

        <div className="addProductItem">
          <label>Description</label>
          <input type="text" name='desc' placeholder="Description..."  onChange={handleChange} />
        </div>

        <div className="addProductItem">
          <label>Price</label>
          <input type="number" name='price' placeholder="100..."  onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input type="text" name='category' placeholder="Jeans and Shirt..."   onChange={handleCategory}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select  name='isStock' onChange={handleChange}>
<option value="true">yes</option>
<option value="false">no</option>

          </select>
        </div>
      
        <button className="addProductButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  )
} 

export default NewProduct
