import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

  const [data,setdata]=useState({'email':'','password':''})

  const navigate=useNavigate()
   
  const handlechange=(e)=> {
    setdata({...data,[e.target.name]:e.target.value})
  }
 
const handlelogin= async(e)=> {
e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/auth/AdminLogin',data)
    
      if(response.status === 201){
        localStorage.setItem('token',response.data.token)
        navigate('/admin')
      }
      
      }
      
     catch (error) {
      console.log(error.message)
    }
  }

  return (


    //all class and id of the admision page due to same UI
    <div className='Admision' >
      
<form className='Admision-form' onSubmit={handlelogin} >
  <h2>Admin Login Page</h2>
  
    <br />
  <label>Email:</label>
  <input type='email' name='email'required  placeholder='Enter Email ' onChange={handlechange} />
  <br />
  <label>Password:</label>
  <input type='password' name='password'required  placeholder='Enter Password'  onChange={handlechange} />
  <br />
  <button type='submit'>Login</button>
  <button type='reset'>Reset</button>
  <center><h4 className='ad-log'> No acount ? <Link to={'/Admision'} > <span id='gotoadmision'> Take Admission</span> </Link></h4></center>
</form>

<center><h4 className='ad-log'> Go to admin  <Link to={'/Admin'} > <span id='gotoadmision'> Take Admission</span> </Link></h4></center>



    </div>
  )
}
