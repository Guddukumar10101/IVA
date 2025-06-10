import React from 'react'
import Admision from './Components/Academy/Coaching/Admission/Admision'
import Login from './Components/Academy/Coaching/Login/Student-Login'
import  './Components/Academy/Coaching/Admission/Admision.css'

import Admin_Login from './Components/Academy/Coaching/Login/Admin-Login'
import { Outlet, RouterProvider } from 'react-router-dom'
import { AllRouters } from './Routing/AllRouters'
import Coaching from './Components/Academy/Coaching/Coaching'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function App

() {
  return (

      <RouterProvider router={AllRouters}> 
      
      <Coaching/>
      <ToastContainer/>

      </RouterProvider>

  )
}
