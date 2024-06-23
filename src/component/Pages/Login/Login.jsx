import React from 'react'
import Style from "./Login.module.css"
import {useState} from "react"
import { login1 } from '../../../Redux/ApiCalls'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const dispatch = useDispatch()
const {error}= useSelector(state=>state.user)

console.log(error , "error")
const handleLogin = (e)=>{
e.preventDefault()
login1(dispatch,{username,password})
}

  return (
    <div className={Style.Containor}>
      <h2>Login Pages</h2>
      <div className={Style.loginContainor}>
<div className={Style.loginitem}>
<label > User Name :</label>
<input type="text"  onChange={(e)=>{setusername(e.target.value)}}/>
</div>
<div className={Style.loginitem}>
<label > Passwrod :</label>
<input type="password" onChange={(e)=>setpassword(e.target.value)}/>
</div>
<button className={Style.login} onClick={handleLogin}>Login</button>
{ error && <h5 style={{color:"red"}}>something Went Wrong</h5>}
</div>

    </div>
  )
}

export default Login
