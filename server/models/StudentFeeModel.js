import dotenv from "dotenv";
import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbconfig.js";

const StudentFeeModel = sequelize.define("Student-Fee-data-2025", {
  StudentId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },

  TotalDue: {
    type: DataTypes.STRING,
  },
  jan_fee: {
    type: DataTypes.STRING,
  },
  feb_fee: {
    type: DataTypes.STRING,
  },
  march_fee: {
    type: DataTypes.STRING,
  },
  apr_fee: {
    type: DataTypes.STRING,
  },

  may_fee: {
    type: DataTypes.STRING,
  },

  june_fee: {
    type: DataTypes.STRING,
  },
  jully_fee: {
    type: DataTypes.STRING,
  },
  aug_fee: {
    type: DataTypes.STRING,
  },
  sep_fee: {
    type: DataTypes.STRING,
  },
  oct_fee: {
    type: DataTypes.STRING,
  },
  nov_fee: {
    type: DataTypes.STRING,
  },
  dec_fee: {
    type: DataTypes.STRING,
  }
},{
    freezeTableName:true,timestamps:false
});
export { StudentFeeModel }
