import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  
  return (


    //all class and id of the admision page due to same UI
    <div className='Admision' >
      
<form className='Admision-form' action='#' >
  <h2>Student Login Page</h2>
  
    <br />
  <label>Student Id:</label>
  <input type='text' name='student_id'required  placeholder='Enter Student Id ' />
  <br />
  <label>Password:</label>
  <input type='password' name='password'required  placeholder='Enter Password' />
  <br />
  <button type='submit'>Login</button>
  <button type='reset'>Reset</button>
  <center><h4 className='ad-log'> No acount ? <Link to={'/Admision'} > <span id='gotoadmision'> Take Admission</span> </Link></h4></center>
</form>

<center><h4 className='ad-log'> Go to admin  <Link to={'/Admin'} > <span id='gotoadmision'> Take Admission</span> </Link></h4></center>



    </div>
  )
}
