const db = require("../models");
const Attendance = db.attendance;
const Op = db.Op;

// Create and Save a new Book
exports.markmyattendance = (req, res) => {
    const attendance = {
        userId: req.userId,
        studentRollno: req.body.rollno
    }
    console.log(req.userId);

    Attendance.create(attendance)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while marking Attendance."
      });
    });
};

exports.getAttendance = (req, res) => {
  const rollno = req.body.rollno;
  Attendance.findAll({
    where: {
      studentRollno: rollno
    }
  }).then(data => {
    res.send(data);
  });
};
exports.getallattendance = (req, res) => {
    console.log(req.userId);
    Attendance.findAll({
        where: {
          userId: req.userId
        }
      }).then(data => {
        res.send(data);
      });
};