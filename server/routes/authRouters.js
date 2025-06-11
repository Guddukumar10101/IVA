import express from 'express'
import { insertAdmisionData } from '../controllers/StudentAdmisionController.js'
import { AdminLogin, AdminRegister, VeryfyToken } from '../controllers/Admincontroller.js'
import { dbconncection } from '../config/dbconfig.js'

const authRouter=express.Router()

authRouter
.post('/AdminLogin',AdminLogin)
.post('/AdminRegister',AdminRegister)
.get('/home',VeryfyToken,async(req,res)=>{
    try {
        
        const db= await dbconncection()
        cosnt [rows]=await db.query("SELECT * FROM AdminData WHERE id = ?",[req.id])
        if(rows.length===0){return res.status(404).json({message:"Admin does not exits"})}

    } catch (error) {
        return res.status(500).json({messege:"server error "})
    }
})




export {authRouter}
