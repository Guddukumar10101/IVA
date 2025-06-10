import React, { useState } from 'react'
import './Student-Dashbord.css'
import { FaUserTie } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

import { Link } from 'react-router-dom';
import logo from './../../../../assets/logo.png'
import { TiThMenu } from "react-icons/ti";
export default function Student_Dashbord() {


  const [openmenu, setmenubar] = useState(true)
  return (
    <div className="Student-Dashbord">
      <div className="navbar">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="heading">INSPIRED VISION ACADEMY </div>
        <div className="menuicon"><TiThMenu onClick={() => setmenubar(!openmenu)} /></div>
        <div className="navlinks">
          <ul>
            <li><Link >Home</Link></li>
            <li><Link >About</Link></li>
            <li><Link >Gallery</Link></li>
            <li><Link >Faculty  </Link></li>
            <div className="admision-login"><div><FaUserTie className='usericon' /></div>
          <div className="admisionlogin"><div><Link>Admission</Link></div><h4>/</h4><div><Link>login</Link></div></div></div>
     
          </ul>
        </div>
         </div>
      {
        openmenu == true ? <div className="menubar">
          <center><div className='closeicon'><IoCloseCircle onClick={()=>setmenubar(!openmenu)}/></div></center>
          <ul>
            <li><Link >Home</Link></li><hr />
            <li><Link >About</Link></li><hr />
            <li><Link >Gallery</Link></li><hr />
            <li><Link >Faculty  </Link></li><hr />
          </ul><hr />
          <div className="menu-admision-login">
          <div><Link to={'/Academy/Coaching/Admision'}>Admission</Link></div><div><FaUserTie className='usericon' /></div><div><Link to={'/Academy/Coaching/Student-Login'}>login</Link></div></div></div>
       : ''
      }




    </div>


  )
}


