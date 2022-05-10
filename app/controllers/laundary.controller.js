const db = require("../models");
const Laundary = db.laundary;
const Op = db.Op;

// Create and Save a new Book
exports.givelaundary = (req, res) => {
    const laundary = {
        userId: req.userId,
        data: req.body.data || "{}",
        studentRollno: req.body.rollno
    }

    Laundary.create(laundary)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while giving laundary."
      });
    });
};

exports.getlaundary = (req, res) => {
    const rollno = req.body.rollno;
    Laundary.findAll({
      where: {
        studentRollno: rollno
      }
    }).then(data => {
      res.send(data);
    });
};

exports.collectlaundary = (req, res) => {
    const laundaryId = req.body.laundaryId;
    const rollno = req.body.rollno;

    Laundary.findOne({where: {id: laundaryId, studentRollno: rollno, isCollected: false}})
        .then(record => {
        if (!record) {
            res.status(404).send({
                message: "No laundary found."
            });
            return;
        }
        
        
        record.update({
            isCollected: true
          })
          .then(function (receipt) {
              res.send({message: "Successfully collected.", receipt: receipt})
          })    
        
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while giving laundary."
              });
        })

};