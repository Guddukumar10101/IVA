import  express from 'express'
import cors from 'cors'
import { Sequelize,DataTypes, } from 'sequelize'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import {ivcoachingdbconnection,sequelize} from './config/dbconfig.js'
import { StudentAdmisionModel } from'./models/StudentAdmisionModel.js'
import { router } from './routes/rout.js'
import { StudentFeeModel } from './models/StudentFeeModel.js'
import { AdminModel } from './models/AdminModel.js'

import {authRouter} from './routes/authRouters.js'
dotenv.config()
const app=express()
app.use(bodyParser.json())
app.use(cors())


//   }


app.use("/",router)
app.use("/auth",authRouter)



app.listen(process.env.PORT,()=>{
  console.log(`server is listining on port ${process.env.PORT}`)
  ivcoachingdbconnection();
  StudentAdmisionModel.sync({})
  StudentFeeModel.sync({})
  AdminModel.sync({})
})

