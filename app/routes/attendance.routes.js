const { authJwt, checkAttendance } = require("../middlewares");

module.exports = app => {
    const attendanceController = require("../controllers/attendance.controller.js");
  
    const router = require("express").Router();
  
    // // Create a new attendance
    // router.post("/", attendanceController.create);

    router.post("/mark", [authJwt.verifyToken, checkAttendance.checkAttendanceAlreadyMarked], attendanceController.markmyattendance);
    router.get("/getall", [authJwt.verifyToken], attendanceController.getallattendance);

    router.get("/get/:rno", [authJwt.verifyToken], attendanceController.getAttendance);

    app.use("/api/attendances", router);
  };  