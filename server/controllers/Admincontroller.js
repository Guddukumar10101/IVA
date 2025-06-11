import { dbconncection, ivcoachingdbconnection } from "../config/dbconfig.js";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

const AdminRegister =async (req,res)=>{
   const {name,email,password}=req.body
   try {
      const db=await dbconncection();
      const [rows]=await db.query(' SELECT * FROM AdminData WHERE AdminEmail = ?',[email])
      if(rows.length>0){
         return res.status(500).json({message:"Admin Already Exist "})
      }
      else{
      const hashedPassword = await bcrypt.hash(password,10)
      const insertdata= await db.query('INSERT INTO AdminData (AdminName,AdminEmail,Password) VALUES (?,?,?)',[name,email,hashedPassword])
       return res.status(201).json({message:"Admin created Sucessfully !! "})}
   } catch (error) {
      return res.status(500).json(error.message)
   }
      
}



const AdminLogin = async (req,res)=>{
const {email,password}=req.body;
     try {
        const db= await dbconncection();
        const [ rows ]= await db.query('SELECT * FROM AdminData WHERE AdminEmail = ?',[email])
        if(rows.length ===0){
         return res.status(404).json({message: " Admin not existed "})
        }

        const isMatch=await bcrypt.compare(password,rows[0].Password)

        if(!isMatch){
         return res.status(401).json({message: " password does not match "})
        }
        
        const token =jwt.sign({id:rows[0].id},process.env.JWT_kEY,{expiresIn:'3h'})

        return res.status(201).json({token:token})

     } catch (error) {
        return res.status(500).json(error.message)
     }
}


const VeryfyToken=async (req,res,next)=>{
   try {
      const token=req.headers['authorization'].split('')[1]

      if(!token){
         return res.status(403).json({message:"No Token Provided "})
      }
      const decoded = jwt.verify(token,process.env.JWT_kEY)
      req.id=decoded.id
      next()

   } catch (error) {
      return res.status(500).json({message:"Server error "})
      
   }
}

export {AdminRegister,AdminLogin,VeryfyToken}