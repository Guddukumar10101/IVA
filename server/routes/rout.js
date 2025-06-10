import express from 'express'
import {getAdmisionData, getAdmisionDataById, insertAdmisionData} from "../controllers/StudentAdmisionController.js"
import { AddStudentFee } from '../controllers/StudentFeeController.js'

const router=express.Router()

router
.post('/admision',insertAdmisionData)
.get('/AllStudents',getAdmisionData)
.get('/StudentAdmisionDataById/:id',getAdmisionDataById)
.post('/StudentFeeData',AddStudentFee)

export {router}
