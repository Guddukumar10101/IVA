import express from 'express'
import { insertAdmisionData } from '../controllers/StudentAdmisionController.js'
import { AdminLogin } from '../controllers/Admincontroller.js'

const authRouter=express.Router()

authRouter
.post('/admision',insertAdmisionData)
.post('AdminLogin',AdminLogin)


export {authRouter}
