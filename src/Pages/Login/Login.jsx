import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Loginfirst } from '../../Redux/ApiCalls'


const Login = () => {
  const dispatch = useDispatch()

const [username, setusername] = useState("")
const [password, setpassword] = useState("")


const handleLogin =(e)=>{
e.preventDefault()
Loginfirst(dispatch,{username,password})
}

  return (
    <div className='login'>
     <div className="loginTitle"><h1>Login Page.. </h1></div>
<div className="loginContainor">


        <span> User Name</span>
<input type='text' placeholder='Enter your Name ' onChange={(e)=>setusername(e.target.value)}></input>

<span className="pass">Enter your Password</span>
<input type='password'placeholder='Enetr your password' onChange={(e)=>setpassword(e.target.value)}/>
<button className="loginButton1" onClick={handleLogin}>Login Now</button>
{/* <Link to="/prodchart">
<button className="loginButton1">Go to Data</button>
</Link> */}
</div>

    </div>
  )
}

export default Login
