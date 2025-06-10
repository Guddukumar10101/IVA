import { StudentFeeModel } from "../models/StudentFeeModel.js"



const AddStudentFee=async(req,res)=>{


    try {
        const StudentFee= await StudentFeeModel.create({...req.body})
        return res.status(200).json(req.body)
        
    } catch (error) {
        res.status(400).json(error)
    }
   

}
export {AddStudentFee}

// const getAdmisionData=async(req,res)=>{
//     try {
//         const StudentData=await StudentAdmisionModel.findAll( )
//         res.status(200).json({StudentData})
//     } catch (error) {
//         res.status(500).json({ message: "Student Not Found " })
//     }
// }