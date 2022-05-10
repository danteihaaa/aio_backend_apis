module.exports = (sequelize, Sequelize, DataTypes) => {
    const Laundary = sequelize.define(
      "laundary", // Model name
      {
        // Attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,  
          primaryKey: true
        },
        data: {
            type: Sequelize.JSON
        },
        isCollected: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
  
    return Laundary;
  };
  