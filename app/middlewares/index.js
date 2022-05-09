const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const checkAttendance = require("./verifySingleAttendance");

module.exports = {
  authJwt,
  verifySignUp,
  checkAttendance
};
