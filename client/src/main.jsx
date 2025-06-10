import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin_Login from './Components/Academy/Coaching/Login/Admin-Login'
import { AllRouters } from './Routing/AllRouters'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<App/>
  </StrictMode>,
)
