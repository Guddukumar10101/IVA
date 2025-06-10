import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";
import './Navbar.css'
import '../../style.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'

export const Navbar = () => {

    const [dropdownAcademy, setdropdownAcademy] = useState(false)
    const [dropdownSocialWork, setdropdownSocialWork] = useState(false)
    const [menubar, setmenubar] = useState(false)

let x=<div className="divmenu">this is </div>

    return (<>
        <div className='navbar'>

            <div className="logo"><img src={logo} alt="" /></div>
            <div className='heading'> INSPIRED VISION TRUST </div>

            <div className="navitems">
                <li onClick={() => setdropdownAcademy(false) & setdropdownSocialWork(false)}> <Link to={'/'}>Home </Link></li>
                <li onAbort={() => setdropdownAcademy(false)} onClick={() => setdropdownAcademy(!dropdownAcademy) & setdropdownSocialWork(false)}><span >Academy <IoMdArrowDropdown className='dropdown' /> {dropdownAcademy == true ? <div className="dropdownitems">
                    <li onClick={() => alert("Not Available faciality")}> <Link >Play School</Link> </li>
                    <hr />
                    <li> <Link to={'/Academy/Coaching'}>Coaching</Link> </li><hr />
                    <li> <Link > Skill Development</Link> </li>
                </div> : ""}
                </span> </li>
                <li onClick={() => setdropdownSocialWork(!dropdownSocialWork) & setdropdownAcademy(false)}><span >Social Work <IoMdArrowDropdown className='dropdown' />{dropdownSocialWork == true ? <div className="dropdownitems">
                    <li> <Link>Women Empowerment</Link> </li>
                    <hr />
                    <li> <Link>Training</Link> </li><hr />
                    <li> <Link>Agriculture</Link> </li>
                </div> : ""}
                </span></li>
                <li onClick={() => setdropdownAcademy(false) & setdropdownSocialWork(false)}> <Link> signup/login </Link></li>

            </div>
            <div className='menubaricon'> <TfiMenu onClick={() => setmenubar(!menubar)} /></div>

            {
                menubar == true ?

                    <div className=" menubar">
                        <li onClick={() => setdropdownAcademy(false) & setdropdownSocialWork(false)}> <Link to={'/'}>Home</Link> </li>
                        <hr />
                        <li onAbort={() => setdropdownAcademy(false)} onClick={() => setdropdownAcademy(!dropdownAcademy) & setdropdownSocialWork(false)}><span >Academy <IoMdArrowDropdown className='menudropdown' /> {dropdownAcademy == true ? <div className="menudropdownitems">
                    <li onClick={() => alert("Not Available faciality")}> <Link >Play School</Link> </li>
                    <hr />
                    <li> <Link to={'/Academy/Coaching'}>Coaching</Link> </li><hr />
                    <li> <Link > Skill Development</Link> </li>
                </div> : ""}
                </span> </li>
                  
                    
                    
                        <hr />
                        <li onClick={() => setdropdownSocialWork(!dropdownSocialWork) & setdropdownAcademy(false)}><span >Social Work <IoMdArrowDropdown className='menudropdown' />{dropdownSocialWork == true ? <div className="menudropdownitems">
                    <li> <Link>Women Empowerment</Link> </li>
                    <hr />
                    <li> <Link>Training</Link> </li><hr />
                    <li> <Link>Agriculture</Link> </li>
                </div> : ""}
                </span></li>

                    </div> : ""}



            {/* -----------------small screen view----------------- */}









        </div></>
    )
}
