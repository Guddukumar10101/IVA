import { dbconncection, ivcoachingdbconnection } from "../config/dbconfig.js";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

const AdminRegister =async (req,res)=>{
   
}



const AdminLogin = async (req,res)=>{
const {email,password}=req.body;
     try {
        const db= await dbconncection();
        const [ rows ]= await db.query('SELECT * FROM AdminData WHERE AdminEmail = ?',[email])
        if(rows.length ==0){
         return res.status(404).json({message: " Admin not existed "})
        }

        const isMatch=await bcrypt.compare(password,rows[0].password)
        if(!isMatch){
         return res.status(401).json({message: " password does not match "})
        }
        
        const token =jwt.sign({id:rows[0].AdminId},process.env.JWT_kEY,{expiresIn:'3h'})

        return res.status(201).json({token:token})

     } catch (error) {
        return res.status(500).json(error.message)
     }
}



export {AdminLogin}