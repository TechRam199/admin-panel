import React from 'react'
import {useState} from "react"
import Style from "./Newuser.module.css"
import { uploadFile } from '../../../user1RequestMethod';
import { adduser1 } from '../../../Redux/user1Apicalls';
import { useDispatch } from 'react-redux';

function Newuser() {
  const dispatch = useDispatch()
  const [file, setFile] = useState("")
  const [username , setusername] = useState("")
  const [password , setpassword] = useState("")
  const [email , setemail] = useState("")
  const [_id, set_id] = useState("")

  const [inputs, setinputs] = useState({})

const handleChange = (e)=>{
  setinputs({...inputs, [e.target.name]: e.target.value})
}
console.log(inputs,"inlputes")

  const handleUpdate = async (e) =>{
    e.preventDefault();
  
    async function someOtherFunction() {
      try {
        const downloadURL = await uploadFile(file);
        return downloadURL;
      } catch (error) {
        // Handle error if needed
        throw error; // Throw the error to propagate it up the chain
      }
    }
  
    try {
      const imageURL = await someOtherFunction();
      const userdata = {...inputs,profileImage:imageURL}
   console.log(userdata,"test")
      adduser1(userdata ,dispatch)
    
    } catch (error) {
      console.error('Error:', error);
    }
  
  }




  return (
    <div className={Style.Containor}>
      <span className={Style.newusertopTitle}> New User Create</span>

      <div className={Style.newuserItem}>
<label htmlFor='file' className={Style.newusertitle}>Upload File </label>
<input type="file"  className={Style.newusertext} onChange={(e)=>setFile(e.target.files[0])} />
</div>

      <div className={Style.newuserform}>
<div className={Style.newuserItem}>
<label className={Style.newusertitle}>UserName </label>
<input type="text" placeholder='John' name='username' className={Style.newusertext} onChange={handleChange} />
</div>
<div className={Style.newuserItem}>
<label className={Style.newusertitle}>Password </label>
<input type="text" placeholder='John Kreain' name='password' className={Style.newusertext} onChange={handleChange}  />
</div>

<div className={Style.newuserItem}>
<label className={Style.newusertitle}>Email </label>
<input type="email" placeholder='John@gmail.com' name='email' className={Style.newusertext} onChange={handleChange}/>
</div>

<div className={Style.newuserItem}>
<label className={Style.newusertitle}>Password </label>
<input type="text" placeholder='password' name='_id' className={Style.newusertext}onChange={handleChange}  />
</div>

<div className={Style.newuserItem}>
<label className={Style.newusertitle}>Phone </label>
<input type="text" placeholder='8126623232' className={Style.newusertext} />
</div>

<div className={Style.newuserItem}>
<label className={Style.newusertitle}>Address </label>
<input type="text" placeholder='New York Delhi' className={Style.newusertext} />
</div>

<div className={Style.newuserItem}>
<label className={Style.newusertitle}>Gender </label>
<div className={Style.newuserGender}>
<input type="radio" id='male' value="male"/>
<label htmlFor="male"> Male</label>

<input type="radio" id='female' value="female"/>
<label htmlFor="female"> Female</label>

<input type="radio" id='other' value="other"/>
<label htmlFor="other"> other</label>

</div>
</div> 

<div className={Style.newuserItem}>
<label className={Style.newusertitle}>Active </label>
<select name="" id="">
<option value="No">NO</option>
<option value="Yes">Yes</option>

</select>
</div>
<button  className={Style.newuserbutton} onClick={handleUpdate}>Create Now</button>


      </div>
    </div>
  )
}

export default Newuser
