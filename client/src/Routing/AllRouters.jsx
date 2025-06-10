import React from 'react'
import { createBrowserRouter, Outlet, Route } from 'react-router-dom'
import Home from '../Components/Home/Home.jsx'
import CoachingHome from '../Components/Academy/Coaching/CoachingHome.jsx'
import Admision from '../Components/Academy/Coaching/Admission/Admision'
import Login from '../Components/Academy/Coaching/Login/Student-Login'
import Student_Dashbord from '../Components/Academy/Coaching/Student-Dashbord/Student-Dashbord'
import Coaching from '../Components/Academy/Coaching/Coaching.jsx'
import Faculty from '../Components/Academy/Coaching/Faculty/Fculty'
import About from '..//Components/Academy/Coaching/About/About'
import Gallery from '..//Components/Academy/Coaching/Gallery/Gallery'
import { Guddu_Portfolio } from '../Components/Academy/Coaching/Faculty/Guddu/portfolio'
import AdmisionDashbord from '../Components/Admin/Coaching-Admin/Admin-Dashbord.jsx'
import AdminHomepage from '../Components/Admin/Coaching-Admin/AdminHomepage.jsx'

import Teachers from '../Components/Admin/Coaching-Admin/Teachers.jsx'
import StudentData from '../Components/Admin/Coaching-Admin/StudentData.jsx'
import StudentFee from '../Components/Admin/Coaching-Admin/StudentFee.jsx'
import AdmisionRequest from '../Components/Admin/Coaching-Admin/AdmisionRequest.jsx'




export const AllRouters = createBrowserRouter([
{

    path:"Admin",
    Component:AdmisionDashbord,
    children:[
        
        {path:'',element:<AdminHomepage/>},
        { path:'Teachers',element:<Teachers/>},
        { path:'AllStudents',element:<StudentData/>},
        { path:'AdmisionRequest',element:<AdmisionRequest/>},
        {path:'StudentFee',element:<StudentFee/>}
    
]
},
 
   



    {
       Component:Coaching,
       path:"",
        children: [{
            path:"/",
            element:<CoachingHome/>
        },
            {
                path: 'Admision',
                element: <Admision />
            },
            {
                path: 'Student-Login',
                element: <Login />
            },
            {
                path: 'Student-Dashbord',
                element: <Student_Dashbord />
            },
            {
                path: 'Faculty',
                element: <Faculty />,

            },
            {
                path: 'About',
                element: <About />
            },
            {
                path: 'Gallery',
                element: <Gallery />
            }
        ]
    }
    , {
        path: '/Guddu-Portfolio', element: <Guddu_Portfolio />

    }
])


