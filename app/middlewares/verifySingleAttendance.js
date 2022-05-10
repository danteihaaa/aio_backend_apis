const db = require("../models");
const Attendance = db.attendance;
const Op = db.Op;

checkAttendanceAlreadyMarked = (req, res, next) => {
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const NOW = new Date();
  
  if(!req.body.rollno){
    res.status(400).send({
      message: "No roll no specified, aborting."
    });
    return;
  }
  Attendance.findOne({
    where: {
      studentRollno: req.body.rollno,
        created_at: { 
              [Op.gt]: TODAY_START,
              [Op.lt]: NOW
        },
    }
  }).then(data => {
    if (data) {
      res.status(400).send({
        message: "Failed! Attendance already marked for today!"
      });
      return;
    }
    next();
  });
};

const checkAttendance = {
    checkAttendanceAlreadyMarked: checkAttendanceAlreadyMarked
};

module.exports = checkAttendance;
