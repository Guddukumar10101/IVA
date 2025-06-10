import React, { useState ,useRef , useEffect} from 'react';
import './Coaching.css';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';
import logo from './../../../assets/logo.png'
import CoachingHome from './CoachingHome'
import { TiThMenu } from "react-icons/ti";
import { Footer } from '../../Footer/Footer';

export default function Coaching() {
   
  const [openmenu, setmenubar] = useState(false)
  let closeicon=()=>setmenubar(!openmenu)

  useEffect(()=>{
    document.addEventListener("click",handclickOutsided,true)
  },[])

  const refone=useRef(null)
  const closemenubar=()=>setmenubar(false)


  const handclickOutsided=(e)=>{
    if(!refone.current.contains(e.target)){
      setmenubar(false)
  }
  }
 


  return (
    <div className="Student-Dashbord">
      <div className="navbar">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="heading">INSPIRED VISION ACADEMY </div>
        <div className="menuicon"><TiThMenu onClick={() => setmenubar(!openmenu)} /></div>
        <div className="navlinks">
          <ul>
            <li ><Link to={'/'}><span><FaHome/></span> <span>Home</span></Link></li>
            <li><Link to={'About'} ><span><IoMdInformationCircleOutline/></span><span> About</span></Link></li>
            <li ><Link to={'Gallery'} > <span><GrGallery/> </span><span>Gallery</span></Link></li>
            <li><Link  to={'Faculty'} > <span><GiTeacher/> </span><span>Faculty</span>  </Link></li>
            <div className="admision-login"><div><FaUserTie className='usericon' /></div>
          <div className="admisionlogin"><div><Link to={'Admision'}>Admission</Link></div><h4>/</h4><div><Link to={'Student-Login'}>login</Link></div></div></div>
     
          </ul>
        </div>
    
      {
        openmenu == true ? <div className="menubar" ref={refone}>
          <center><div className='closeicon'><IoCloseCircle onClick={()=>setmenubar(!openmenu)}/></div></center>
          <ul>
            <Link onClick={()=>closemenubar()} to={'/'} > <li onClick={()=>handleclosemenu}></li><FaHome/> Home</Link><hr />
            <Link onClick={()=>closemenubar()} to={'About'} > <li></li><IoMdInformationCircleOutline/> About</Link><hr />
            <Link onClick={()=>closemenubar()} to={'Gallery'} > <li onClick={()=>alert('hii')}></li><GrGallery/> Gallery</Link><hr />
            <Link onClick={()=>closemenubar()} to={'Faculty'} > <li onClick ={()=>setmenubar(false)}></li><GiTeacher/> Faculty</Link><hr />
         </ul>
          <div className="menu-admision-login">
          <div><Link  onClick={()=>closemenubar()} to={'Admision'}>Admission</Link></div><div><FaUserTie className='usericon' /></div><div><Link onClick={()=>closemenubar()}  to={'Student-Login'}>login</Link></div></div></div>
       : ''
      } </div>

<Outlet/>

<Footer/>
    </div>
  )}
  


