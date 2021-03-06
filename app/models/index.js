const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    operatorsAliases: false,

    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.attendance = require("./attendance.model.js")(sequelize, Sequelize, DataTypes);
db.student = require("./student.model.js")(sequelize, Sequelize, DataTypes);
db.laundary = require("./laundary.model.js")(sequelize, Sequelize, DataTypes);

db.books = require("./book.model.js")(sequelize, Sequelize, DataTypes);
db.user = require("./user.model.js")(sequelize, Sequelize, DataTypes);
db.role = require("./role.model.js")(sequelize, Sequelize, DataTypes);

db.user.hasMany(db.attendance);
db.student.hasMany(db.attendance);

db.user.hasMany(db.laundary);
db.student.hasMany(db.laundary);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "role_id",
  otherKey: "user_id"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "user_id",
  otherKey: "role_id"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
