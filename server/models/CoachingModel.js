



const User=ivcoachingdb().define(
  'Users',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   age:{type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull: false,
    },

    roll:{type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      },
   
  },
  {
    timestamps:false,
    tableName: 'Student-Admision-Data',
    // Other model options go here
  }
);
