import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import CircularProgress from '@mui/joy/CircularProgress';
import Button from '@mui/material/Button';
import axios from 'axios'
import './Admision.css'
import { FaRupeeSign } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
export default function Admision() {
const [classs,setclasss]=useState('')
const[course,setcourse]=useState('')
const[isloading,setloading]=useState(false)

let fee=''
const[studentdata,setstudentdata]=useState({
  FullName:'',FatherName:'',DOB:'',SchoolName:'',Class:'',Year:'',ModeOfPayment:'Monthly',Mobile:'',Email:'',Address:'',Password:'',
})





let name,value;

let handledata=(e)=>{
e.preventDefault();
name=e.target.name
value=e.target.value
setstudentdata({...studentdata,[name]:value})
console.log(studentdata)
}
const Handlesubmit=(event)=>{
  event.preventDefault();
  setloading(true);
  const mid=Math.floor(Math.random()*9999)
  studentdata.TotalFee=fee;
  studentdata.StudentId=`iva${mid}`
  axios.post("https://inspiredvisiontrust-backend-production.up.railway.app/admision",JSON.stringify(studentdata),{
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(res=>{
    toast.success("Congrastulation , Your Admision is Completed !");
    setloading(false)
    Navigate('/login') 
  })

  .catch(err=>{
    toast.error(err.
      response.data)
  setloading(false)}
  )
}




// this is for class 1 upto 4
if((classs=='1'|| classs=='2' || classs=='3' || classs=='4' ) && course=='Monthly'){ fee='500'}
else if((classs=='1' || classs=='2' || classs=='3' || classs=='4') && course=='Quarterly'){fee='1400'}
else if((classs=='1' || classs=='2' || classs=='3' || classs=='4')&& course=='HalfYearly'){fee='2600'}
else if((classs=='1' || classs=='2' || classs=='3' || classs=='4') && course=='Yearly'){fee='5000'}

// this is for class 5 upto 8
else if((classs=='5' || classs=='6' || classs=='7' || classs=='8') && course=='Monthly'){fee='600'}
else if((classs=='5' || classs=='6' || classs=='7' || classs=='8') && course=='Quarterly'){fee='1700'}
else if((classs=='5' || classs=='6' || classs=='7' || classs=='8')&& course=='HalfYearly'){fee='3300'}
else if((classs=='5' || classs=='6' || classs=='7' || classs=='8')&& course=='Yearly'){fee='6000'}

//  this is for class 9 upto 10
else if((classs=='9' || classs=='10') && course=='Monthly'){fee='700'}
else if((classs=='9' || classs=='10') && course=='Quarterly'){fee='2000'}
else if((classs=='9' || classs=='10')&& course=='HalfYearly'){fee='3900'}
else if((classs=='9' || classs=='10')&& course=='Yearly'){fee='7700'}
//  this is for  sainik school and navodaya and  netarhat  class 6 
else if((classs=='navoday_netarhat_6' || classs=='sainik_school_6') && course=='Monthly'){fee='1000'}
else if((classs=='navoday_netarhat_6' || classs=='sainik_school_6') && course=='Quarterly'){fee='2800'}
else if((classs=='navoday_netarhat_6' || classs=='sainik_school_6')&& course=='HalfYearly'){fee='5400'}
else if((classs=='navoday_netarhat_6' || classs=='sainik_school_6')&& course=='Yearly'){fee='10500'}
//  this is for  sainik school and navodaya and  netarhat  class 9 and chbs/chgs
else if((classs=='navoday_netarhat_9' || classs=='sainik_school_9' || classs=="CHBS/CHGS") && course=='Monthly'){fee='1500'}
else if((classs=='navoday_netarhat_9' || classs=='sainik_school_9' || classs=="CHBS/CHGS") && course=='Quarterly'){fee='4200'}
else if((classs=='navoday_netarhat_9' || classs=='sainik_school_9' || classs=="CHBS/CHGS")&& course=='HalfYearly'){fee='8000'}
else if((classs=='navoday_netarhat_9' || classs=='sainik_school_9' || classs=="CHBS/CHGS")&& course=='Yearly'){fee='15000'}
//  this is for polyttechnic
else if((classs=='p' )&& course=='Monthly'){fee='1200'}
else if((classs=='p' )&& course=='Quarterly'){fee='3500'}
else if((classs=='p' )&& course=='HalfYearly'){fee='6500'}
else if((classs=='p' )&& course=='Yearly'){fee='12000'}

// without duration by default 

else if((classs=='1'|| classs=='2' || classs=='3' || classs=='4' ) ){ fee='500'}
else if((classs=='5' || classs=='6' || classs=='7' || classs=='8') ){fee='600'}
else if((classs=='9' || classs=='10') ){fee='700'}
else if((classs=='navoday_netarhat_6' || classs=='sainik_school_6')){fee='1000'}
else if((classs=='navoday_netarhat_9' || classs=='sainik_school_9' || classs=="CHBS/CHGS")){fee='1500'}
else if((classs=='p')){fee='1200'} 


return (
<div className='Admision' >
<form className='Admision-form' onSubmit={Handlesubmit}  >
  <h2>Admision Form</h2>
  <label>Full Name:</label>
  <input type='text' onChange={e=>setstudentdata({...studentdata,FullName:e.target.value})} name='FullName' placeholder='Enter Full Name'  value={studentdata.FullName} required   />
  <br />
  <label>Father's Name:</label>
  <input type='text' onChange={e=>setstudentdata({...studentdata,FatherName:e.target.value})} value={studentdata.FatherName} name='FatherName'required  placeholder='Enter Father Name' />
  <br />
  <label>Date of Birth:</label>
  <input type='date' required name='DOB'onChange={handledata} value={studentdata.DOB}  />
  <br />
  <label>School Name:</label>
  <input type='text'  value={studentdata.SchoolName} name='SchoolName' onChange={handledata}required  placeholder='Enter School Name' />
  <br />
<div className="class-div">
<label>Sesion Year:</label>

<select name='Year'required  onChange={handledata} onClick={(e)=>setclasss(e.target.value) } >
  <option value='none1' >Select Class</option>
  <option value='2025'>2025</option>
  <option value='2026'>2026</option>
  <option value='2027'>2027</option>
  <option value='2028'>2028</option>
</select>

</div>
<br />
  <div className="class-div">
<label>Class:</label>
<select name='Class'required  onChange={handledata} onClick={(e)=>setclasss(e.target.value) } >
  <option value='none1' >Select Class</option>
  <option value='1'>Class 1</option>
  <option value='2'>Class 2</option>
  <option value='3'>Class 3</option>
  <option value='4'>Class 4</option>
  <option value='5'>Class 5</option>
  <option value='6'>Class 6</option>
  <option value='7'>Class 7</option>
  <option value='8'>Class 8</option>
  <option value='9'>Class 9</option>
  <option value='10'>Class 10</option>
  <option value="sainik_school_6">Sainik School class 6 </option>
  <option value="sainik_school_9">Sainik School class 9 </option>
  <option value="navoday_netarhat_6">Netarhat/Navoday class 6 </option>
  <option value="navoday_netarhat_9">Navoday class 9 </option>
  <option value="CHBS/CHGS">CHBS/CHGS </option>
  <option value="p">Polytechnic</option>
</select>

</div>

<br />
  

<div className="class-div">
<label htmlFor="">Mode of Payment :</label>
<select name='ModeOfPayment' required onChange={handledata} onClick={(e)=>setcourse(e.target.value)} >
  <option value='Monthly'>Select</option>
  
  <option value="Monthly">Monthly</option>
  <option value="Quarterly">Quarterly</option>
  <option value="HalfYearly">Half Yearly</option>
  <option value="Yearly">Yearly</option>
</select>
</div>

<div className='total-fee'><span>Total Fee</span>   <span id='money'>{fee} / <FaRupeeSign/></span></div>


<br />



  <br />
  <label>Mobile:</label>
  <input type='text' onChange={handledata} name='Mobile'required  placeholder='Enter Mobile Number' />
  <br />
  <label>Email:</label>
  <input type='Email' name='Email'required onChange={handledata}  placeholder='Enter Email' />
  <br />
  <label>Address:</label>
  <textarea rows="3"  name="Address" placeholder="Enter Address" onChange={handledata}></textarea>
  <br />
  <label>Create Password:</label>
  <input type="password" name='Password' onChange={handledata} placeholder='Create a Strong Password for Login  ' />
  <br />
  <center><Button type='submit'  color='primary' style={{backgroundColor:'green',fontStyle:'bold',fontSize:'medium',lineHeight:'3',width:'100%'}} variant='contained'>{isloading==true ?  <CircularProgress size={'sm'} /> :''} Take Admision </Button>
  </center>
  <center><h4 className='ad-log'> Taked Admision ? <Link to={'/Student-Login'}> <span id='gotoadmision'>  Login</span> </Link></h4></center>

</form>

<ToastContainer />

    </div>
  )
}
