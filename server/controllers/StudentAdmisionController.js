
import { StudentAdmisionModel } from "../models/StudentAdmisionModel.js";
import { StudentAdmisionSchema } from "../middleware/StudentAdmisionSchema.js";
import brcrypt from 'bcrypt'

const AdminLogin=async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
 
}




const insertAdmisionData = async(req, res) => {
try {
    const { error } = await StudentAdmisionSchema.validate(req.body)
    if(error) return res.status(400).json(error.details[0].message)
    const { Password} = req.body
    const hashedPassword = await brcrypt.hash(Password, 10)

    const Studentdata = await StudentAdmisionModel.create({ ...req.body, Password: hashedPassword })

    // const Studentdata = await StudentAdmisionModel.create(req.body);
    return res.status(200).json(Studentdata)
} catch (error) {
    res.status(400).json(error.errors[0].message+ " Please Try Again 😊")
    
}

}

const getAdmisionData=async(req,res)=>{
    try {
        const StudentData=await StudentAdmisionModel.findAll( )
        res.status(200).json({StudentData})
    } catch (error) {
        res.status(500).json({ message: "Student Not Found " })
    }
}


const getAdmisionDataById=async(req,res)=>{
    try {
        const StudentData=await StudentAdmisionModel.findByPk(req.params.id)
        res.status(200).json({StudentData})
    } catch (error) {
       return  res.status(500).json({error:error.message})
    }
}

const updateAdmisionDataById=async(req,res)=>{
    try {
        const StudentData=await StudentAdmisionModel.findByPk(req.params.id)
      
        res.status(200).json({StudentData})
    } catch (error) {
        res.jeson(error)
    }
}


export { insertAdmisionData ,getAdmisionData,getAdmisionDataById,updateAdmisionDataById}