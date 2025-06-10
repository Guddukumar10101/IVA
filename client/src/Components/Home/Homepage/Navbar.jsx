import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";
import './Navbar.css'

import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'

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













// // import necessary icons and components
// import React, { useState, useRef, useEffect } from 'react';
// import './Navbar.css'
// import { IoIosArrowDropdownCircle } from "react-icons/io";
// import { FaHome } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
// import { GiTeacher } from "react-icons/gi";
// import { GrGallery } from "react-icons/gr";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { FaUserTie } from "react-icons/fa";
// import { IoCloseCircle } from "react-icons/io5";
// import { Link, Outlet } from 'react-router-dom';
// import logo from './../../../assets/logo.png'
// import { TiThMenu } from "react-icons/ti"
// import { Footer } from '../../Footer/Footer';

// // define the Navbar component
// export default function Navbar() {
//   // define the state for menu items
//   const [menuItems, setMenuItems] = useState([
//     { id: 1, name: 'Home', link: '/Academy/Coaching/', icon: <FaHome /> },
//     { id: 2, name: 'Academy', link: '', icon: <IoMdInformationCircleOutline />, submenu: [
//       { id: 21, name: 'Coaching', link: '/Academy/Coaching/' },
//       { id: 22, name: 'Play School', link: 'PlaySchool' },
//       { id: 23, name: 'Skill Development', link: 'WomenEmpowerment' }
//     ] },
//     { id: 3, name: 'Social Work', link: '', icon: <IoMdInformationCircleOutline />, submenu: [
//       { id: 31, name: 'Agriculture', link: '' },
//       { id: 32, name: 'Tranining', link: 'PlaySchool' },
//       { id: 33, name: 'Women-Empowerment', link: 'WomenEmpowerment' }
//     ] },
    
//   ])

//   // define the state for open menu and submenu
//   const [openmenu, setmenubar] = useState(false)
//   const [openSubmenu, setOpenSubmenu] = useState({})

//   // define the ref for menu bar
//   const refone = useRef(null)

//   // add event listener for click outside the menu bar
//   useEffect(() => {
//     document.addEventListener("click", handclickOutsided, true)
//   }, [])

//   // handle click outside the menu bar
//   const handclickOutsided = (e) => {
//     if (!refone.current.contains(e.target)) {
//       setmenubar(false)
//       setOpenSubmenu({})
//     }
//   }

//   // handle submenu click
//   const handleSubmenu = (id) => {
//     setOpenSubmenu(prevState => ({ ...prevState, [id]: !prevState[id] }))
//   }

//   // handle menu click
//   const handleMenu = () => {
//     setmenubar(!openmenu)
//   }

//   return (
//     <div className="Student-Dashbord">
//       <div className="navbar">
//         <div className="logo"><img src={logo} alt="" /></div>
//         <div className="heading">INSPIRED VISION TRUST </div>
//         <div className="menuicon"><TiThMenu onClick={handleMenu} /></div>
//         <div className="navlinks">
//           <ul>
//             {menuItems.map(item => (
//               <li key={item.id}>
//                 <Link to={item.link}>
//                   <span>{item.icon}</span>
//                   <span>{item.name}</span>
//                 </Link>
//                 {item.submenu && (
//                   <span onClick={() => handleSubmenu(item.id)} onMouseOver={() => handleSubmenu(item.id)}> <IoIosArrowDropdownCircle /></span>
//                 )}
//                 {item.submenu && openSubmenu[item.id] && (
//                   <ul className="dropdown-content" ref={refone}>
//                     {item.submenu.map(subitem => (
//                       <li key={subitem.id}><Link to={subitem.link}>{subitem.name}</Link></li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {
//         openmenu == true ? <div className="menubar" ref={refone}>
//           <center><div className='closeicon'><IoCloseCircle onClick={handleMenu} /></div></center>
//           <ul>
//             {menuItems.map(item => (
//               <React.Fragment key={item.id}>
//                 <Link to={item.link}>
//                   <li onClick={handleMenu}></li>
//                   {item.icon}
//                   {item.name}
//                 </Link>
//                 {item.submenu && (
//                   <ul className="dropdown-content">
//                     {item.submenu.map(subitem => (
//                       <li key={subitem.id}><Link to={subitem.link}>{subitem.name}</Link></li>
//                     ))}
//                   </ul>
//                 )}
//                 <hr />
//               </React.Fragment>
//             ))}
//           </ul>
//         </div>
//           : ''
//       }
//       <Outlet />

//       <Footer />
//     </div>
//   )
// }











// import React, { useState, useRef, useEffect } from 'react';
// import './Navbar.css'
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// import { FaHome } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
// import { GiTeacher } from "react-icons/gi";
// import { GrGallery } from "react-icons/gr";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { FaUserTie } from "react-icons/fa";
// import { IoCloseCircle } from "react-icons/io5";
// import { Link, Outlet } from 'react-router-dom';
// import logo from './../../../assets/logo.png'

// import { TiThMenu } from "react-icons/ti"
// import { Footer } from '../../Footer/Footer';
// export default function Navbar() {
//   const [dropdownAcademy, setdropdownAcademy] = useState(false)
//   const [dropdownSocialWork, setdropdownSocialWork] = useState(false)

//   const [openmenu, setmenubar] = useState(false)
//   const [openacademy, setopenacademy] = useState(false)
//   const [opensocialwork, setopensocialwork] = useState(false)

//   let closeicon = () => setmenubar(!openmenu)

//   useEffect(() => {
//     document.addEventListener("click", handclickOutsided, true)
//   }, [])

//   const refone = useRef(null)

//   const handclickOutsided = (e) => {
//     if (!refone.current.contains(e.target)) {
//       setmenubar(false)
//       setopenacademy(false)
//       setdropdownSocialWork(false)
//     }
//   }



//   return (
//     <div className="Student-Dashbord">
//       <div className="navbar">
//         <div className="logo"><img src={logo} alt="" /></div>
//         <div className="heading">INSPIRED VISION TRUST </div>
//         <div className="menuicon"><TiThMenu onClick={() => setmenubar(!openmenu)} /></div>
//         <div className="navlinks">
//           <ul>
//             <li><Link to={'/Academy/Coaching/'}><span><FaHome /></span> <span>Home</span></Link></li>
//             <li className="dropdown">
//               <span onClick={() => { setopenacademy(!openacademy) }} onMouseOver={() => { setopenacademy(true) }}> Academy <IoIosArrowDropdownCircle /></span>
//               {
//                 openacademy == true ?
//                   <ul className="dropdown-content" ref={refone}>
//                     <li><Link to={'/Academy/Coaching/'} >Coaching</Link></li>
//                     <li><Link to={'PlaySchool'} >Play School</Link></li>
//                     <li><Link to={'WomenEmpowerment'} >Skill Development</Link></li>
//                   </ul>
//                   : ""
//               }
//             </li>


//             <li className="dropdown">
//               <span onClick={() => { setopensocialwork(!opensocialwork) }} onMouseOver={() => { setopensocialwork(true) }}> Social Work <IoIosArrowDropdownCircle /></span>
//               {
//                 opensocialwork == true ? 
//                   <ul className="dropdown-content" ref={refone}>
//                     <li><Link to={''} >y</Link></li>
//                     <li><Link to={'PlaySchool'} >Play School</Link></li>
//                     <li><Link to={'WomenEmpowerment'} >Skill Development</Link></li>
//                   </ul>
//                   : ""
//               }
//             </li>

//           </ul>
//         </div>
//       </div>
//       {
//         openmenu == true ? <div className="menubar" ref={refone}>
//           <center><div className='closeicon'><IoCloseCircle onClick={() => setmenubar(!openmenu)} /></div></center>
//           <ul>
//             <Link to={''} > <li onClick={closeicon}></li><FaHome /> Home</Link><hr />
//             <Link to={'About'} > <li onClick={closeicon}></li><IoMdInformationCircleOutline /> Academy</Link>
//             {


//               <ul className="dropdown-content">
//                 <li><Link to={'/Academy/Coaching/'} >Coaching</Link></li>
//                 <li><Link to={'PlaySchool'} >Play School</Link></li>
//                 <li><Link to={'WomenEmpowerment'} > Women-Empowerment</Link></li>
//               </ul>

//             }
//             <hr />
//             <Link to={'Faculty'} > <li onClick={closeicon}></li><GiTeacher /> Faculty</Link><hr />
//           </ul>
//         </div>
//           : ''}
//       <Outlet />

//       <Footer />
//     </div>



//   )
// }




