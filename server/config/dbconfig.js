
import dotenv from 'dotenv'
import { Sequelize,DataTypes, } from 'sequelize'
import mysql from'mysql2'
dotenv.config()

const sequelize= new Sequelize(
  process.env.INSPIRED_VISION_DATABASE,
  process.env.USER,
  process.env.PASSWORD,{
      host:process.env.HOST,
      dialect:'mysql'}
  )


async function  ivcoachingdbconnection (){
   try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
   
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
}


let Connection;

async function dbconncection (){
    if(!Connection){
      Connection=await mysql.createConnection({
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.INSPIRED_VISION_DATABASE
      })
    }
return Connection
}


export  {ivcoachingdbconnection,sequelize, dbconncection}