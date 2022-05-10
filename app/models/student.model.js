module.exports = (sequelize, Sequelize, DataTypes) => {
    const Student = sequelize.define(
      "student", // Model name
      {
        // Attributes
        rollno: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING
        },
        roomNo: {
            type: DataTypes.STRING
        },
        laundaryCardNo: {
            type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING,
          defaultValue: "12345",
        }
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Student;
  };
  