import dotenv from 'dotenv'
import { Sequelize,DataTypes, } from 'sequelize'
import { sequelize } from '../config/dbconfig.js'
dotenv.config()

const AdminModel=sequelize.define('AdminData',{
 
    AdminName:{
        type:DataTypes.STRING,
    },
    AdminEmail:{
    type:DataTypes.STRING,
    unique:true},
        
        
    Password:{
        type:DataTypes.STRING
    }
},{
  freezeTableName:true,timestamps:false
})

export { AdminModel }