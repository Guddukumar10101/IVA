
import dotenv from 'dotenv'
import { Sequelize,DataTypes, } from 'sequelize'
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

export  {ivcoachingdbconnection,sequelize}