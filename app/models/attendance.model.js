module.exports = (sequelize, Sequelize, DataTypes) => {
    const Attendance = sequelize.define(
      "attendance", // Model name
      {
        // Attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,  
          primaryKey: true
        },
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Attendance;
  };
  