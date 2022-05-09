const db = require("../models");
const Attendance = db.attendance;
const Op = db.Op;

// Create and Save a new Book
exports.markmyattendance = (req, res) => {
    const attendance = {
        userId: req.userId
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