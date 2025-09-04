import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (data) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userid",data.user[0].userid)
    if(data.user[0].email=="admin07@gmail.com")
      localStorage.setItem("role", "admin");
    else
      localStorage.setItem("role", "user");
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/user/login",{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({
        email:email,
        password:password,
      })
    }).then((rawData)=>{
      return rawData.json()
    }).then((data)=>{
      // console.log(data)
      if(data.success){
        alert(data.message)
        handleLogin(data)
        navigate("/")
      }else{
        alert(data.message)
      }
    }).catch((err)=>{
      console.log(err)
      alert("Login failed")
    })
  }

  return (
    <div className='Login'>
      <form id='Login' onSubmit={handleSubmit}>
        <p className='title'>Login</p>
        <input 
          name='email'
          type='email'
          className='input'
          placeholder='Email'
          onChange={(e)=>setEmail(e.target.value)} 
          autoComplete="off"
        />
        <input 
          name='password' 
          type='password'
          className='input'
          placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)} 
          autoComplete='off'
        />
        <p className='account'>
          you have not account? &nbsp;
          <Link to="/SignUp">Sign Up</Link>
        </p>
        
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login