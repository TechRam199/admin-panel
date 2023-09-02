import React, { useState } from 'react'
import Style from "./EditUser.module.css"
import {Link, useLocation} from "react-router-dom"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PublishIcon from '@mui/icons-material/Publish';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../../user1RequestMethod';
import { updateuser1 } from '../../../Redux/user1Apicalls';
function EditUser() {
  const [file, setFile] = useState("")
 const [ username, setuserName] = useState("")
 const [ email, setEmail] = useState("")
 const [ password, setPassword] = useState("")
  const [inputs, setinputs] = useState({})
const dispatch = useDispatch()

  const loacation = useLocation()
  const ProductId = loacation.pathname.split("/")[2]

  const users = useSelector(state=>state.user1.userslist.find((item)=>item._id===ProductId))

console.log(users,"users")


const handleChange = (e)=>{
setinputs({...inputs, [e.target.name]:e.target.value})

}


  const handleUpdate = async (e) => {
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
      updateuser1(ProductId,dispatch,userdata)
    
    } catch (error) {
      console.error('Error:', error);
    }
  
  }



console.log(inputs,"ope")
  return (
    <div className={Style.Containor}>
    <div className={Style.EditItem}>
      <span className={Style.EditTitle}>Edit User </span>

      <Link to="/Newuser">
      <button className={Style.newuserButton}>Create</button>
      </Link>
    </div>

<div className={Style.UserUpdateContainor}>
<div className={Style.userDetailshow}>
  <div className={Style.usertitleitem}>
<img src={users.profileImage} alt="" className={Style.userImage} />
<div className={Style.usershowtoptitle}>
  <span className={Style.usertopShowname}>{users.username}</span>
  <span className={Style.usershowtoptitle}>Softwere Enginear</span>
</div>


</div>
<div className={Style.usershowList}>
<span className={Style.usershowtitle}> Account Detail</span>
<div className={Style.usershowListItem}>
<Person2OutlinedIcon className={Style.userShowIcon}/>  <span className={Style.usershowname} >{users.username} </span>
</div>
<div className={Style.usershowListItem}>
<CalendarMonthIcon className={Style.userShowIcon}/>  <span className={Style.usershowname} > 10.02.1999 not updated </span>
</div>


</div>

<div className={Style.usershowList}>
<span className={Style.usershowtitle}> Account Detail</span>
<div className={Style.usershowListItem}>
<LocalPhoneIcon className={Style.userShowIcon}/>  <span className={Style.usershowname} > 8630092575 not update </span>
</div>
<div className={Style.usershowListItem}>
<EmailIcon className={Style.userShowIcon}/>  <span className={Style.usershowname} > {users.email} </span>
</div>
<div className={Style.usershowListItem}>
<LocationOnIcon className={Style.userShowIcon}/>  <span className={Style.usershowname} > not update New York London 12211 </span>
</div>


</div>

</div>
<form className={Style.userupdateContainor}>
<div className={Style.userupdateLeft}> 
<span className={Style.userupdatetoptitle}> Update User </span>
<div className={Style.userupdateitem}>
<label className={Style.userUpdatename}>Username</label>
<input type="text" placeholder='Enter Your Username'name="username" className={Style.userUpdatetext} onChange={handleChange} />
</div>



<div className={Style.userupdateitem}>
<label className={Style.userUpdatename}> Email</label>
<input type="text" placeholder='Enter Your Email'name='email' className={Style.userUpdatetext}onChange={handleChange} />
</div>

<div className={Style.userupdateitem}>
<label className={Style.userUpdatename}>Password</label>
<input type="text"placeholder='not update' name="password"className={Style.userUpdatetext} onChange={handleChange} />
</div>

</div>
<div className={Style.userupdateright}>
<div className={Style.userupdateupload}>
<img src={users.profileImage} alt="" className={Style.uploadImage} />
<label htmlFor="file"><PublishIcon className={Style.uplodaIcon}/> </label>
<input type="file" id='file'style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>

</div>
<button className={Style.updateButton} onClick={handleUpdate}>Update Now</button>


</div>


</form>




</div>


    </div>
  )
}

export default EditUser
