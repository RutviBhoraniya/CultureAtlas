import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [contry,setContry] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name && email && password && confirmPassword && contry){
      if(password==confirmPassword){
        fetch("https://cultureatlas-6v1m.onrender.com/user/signUp",{
          method:"POST",
          headers: {"Content-Type": "application/json"},
          body:JSON.stringify({
            username:name,
            email:email,
            password:password,
            contry:contry
          })
        }).then((rawData)=>{
          return rawData.json()
        }).then((data)=>{
          // console.log(data)
          if(data.success){
            alert(`${data.message} \n Your userId is ${data.user.userid}`)
            navigate("/Login")
          }else{
            alert(data.message)
          }
        }).catch((err)=>{
          console.log(err)
          alert("failed to create account")
        })
      }else{
        alert("password and Confirm Password not matched")
      }
    }else{
      alert("Please Enter all Details")
    }
  }

  return (
    <div className='SignUp'>
      <form id='signUp' onSubmit={handleSubmit}>
        <p>Sign Up</p>
        <input 
          name='name'
          type='text' 
          className='input'
          placeholder='Name'
          onChange={(e)=>setName(e.target.value)} 
          autoComplete='off'
        />
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
        <input 
          name='confirmPassword' 
          type='password'
          className='input'
          placeholder='Confirm Password'
          onChange={(e)=>setConfirmPassword(e.target.value)}
          autoComplete='off'
        />
        <input 
          name='contry' 
          type='contry'
          className='input'
          placeholder='Contry'
          onChange={(e)=>setContry(e.target.value)} 
          autoComplete='off'
        />
        <p>
          already have account? &nbsp;
          <Link to="/Login">Click here</Link>
        </p>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp