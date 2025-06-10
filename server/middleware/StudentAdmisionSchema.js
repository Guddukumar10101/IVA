import joi from 'joi'
const StudentAdmisionSchema=joi.object({
    StudentId:joi.string().required(),
    FullName:joi.string().uppercase().required(),
    FatherName:joi.string().required(),
    DOB:joi.date().required(),
    SchoolName:joi.string().required(),
    Class:joi.string().required(),
    TotalFee:joi.string().required(),
    Mobile:joi.string().max(10).required(),
    Email:joi.string().email(),
    Address:joi.string(),
    Year:joi.string().required(),
    Password:joi.string().required(),
    ModeOfPayment:joi.string().required()
})
export {StudentAdmisionSchema}