import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Admin_Login() {
  
  return (


    //all class and id of the admision page due to same UI
    <div className='Admision' >
      
<form className='Admision-form' action='#' >
  <h2>Admin Login Page</h2>
  
    <br />
  <label>Student Id:</label>
  <input type='text' name='Admin_id'required  placeholder='Enter Admin Id ' />
  <br />
  <label>Password:</label>
  <input type='password' name='password'required  placeholder='Enter Password' />
  <br />
  <button type='submit'>Login</button>
  <button type='reset'>Reset</button>
  <center><h5> No acount ? <Link to={'Academy/Coaching/Admision'}> <span id='gotoadmision'>Take Admission</span></Link> </h5></center>
</form>




    </div>
  )
}
