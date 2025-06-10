import { ivcoachingdbconnection } from "../config/dbconfig.js";



const AdminLogin = async (req,res)=>{
const {email,password}=req.body;

  

     try {
        const db= ivcoachingdbconnection();

        
     } catch (error) {
        
     }
}

export {AdminLogin}