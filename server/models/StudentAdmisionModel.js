    import dotenv from 'dotenv'
    import { Sequelize,DataTypes, } from 'sequelize'
    import { sequelize } from '../config/dbconfig.js'
    dotenv.config()

    const StudentAdmisionModel=sequelize.define('Student-Admision-data',{
        StudentId:{
            type:DataTypes.STRING,
            primaryKey:true
        },
    FullName:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    FatherName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    DOB:{
        type:DataTypes.STRING,
        allowNull:false
    },
    SchoolName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Class:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ModeOfPayment:{
        type:DataTypes.STRING,
        allowNull:false
    },
    TotalFee:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Mobile:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Email:{
        type:DataTypes.STRING,
        unique:true
        },
    Address:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    Password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Year:{
        type:DataTypes.STRING,
        allowNull:false

    }
    },{
    freezeTableName:true,timestamps:false
    })

    export {StudentAdmisionModel}