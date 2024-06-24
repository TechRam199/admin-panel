import React from 'react'
import "./newuser.css"

function newUser() {
  return (
    <div className='newuser'>
      <h1 className="newUserTitle">New User Create</h1>
      <form className="NewuserForm">
<div className="newUserItem">
  <label> User Name</label>
  <input type='text' placeholder='Jon'></input>
</div>
<div className="newUserItem">
  <label> Full Name</label>
  <input type='text' placeholder='Jon Smaith'></input>
</div>

<div className="newUserItem">
  <label>Email</label>
  <input type='email' placeholder='Jon@gmail.com'></input>
</div>

<div className="newUserItem">
  <label> Password</label>
  <input type='password' placeholder='43543'></input>
</div>

<div className="newUserItem">
  <label>Phone</label>
  <input type='text' placeholder='+ 91 2424 343 232'></input>
</div>

<div className="newUserItem">
  <label>Address</label>
  <input type='text' placeholder='New York India'></input>
</div>

<div className="newUserItem">
<label>Gender</label>
  <div className="newUserGender">
   <input type='radio'name='gender' id='male' value="male"></input>
  <label for='male'> Male</label>
  
<input type='radio'name='gender' id='female' value="female"></input>
  <label for='female'> Female</label>

  <input type='radio'name='gender' id='other' value="other"></input>
  <label for='other'>Other</label>
</div>
</div> 
<div className="newUserItem">
<label>Active</label>

<select className='newuserSelect' name='active' id='active'>
<option value="yes">Yes</option>
<option value="no">No</option>

</select>
</div>


<button className="newUserButton">Create Now</button>



    </form>

     </div>
  )
}

export default newUser
