const db = require("../models");
const Student = db.student;
const Op = db.Op;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
  
// Create and Save a new Book
exports.importdata = (req, res) => {
    var Excel = require('exceljs');

    var wb = new Excel.Workbook();
    var path = require('path');
    var filePath = path.resolve(__dirname,'COE_CSE_BS_COSE_Groups.xlsx');

    wb.xlsx.readFile(filePath).then(function(){

        var sh = wb.getWorksheet("Combined Data");
        console.log(sh.rowCount);
        const RCODE = ['M', 'O', 'N', 'I'];
        for (i = 1; i <= sh.rowCount; i++) {
            var rno = sh.getRow(i).getCell(1).value;
            var n = toTitleCase(sh.getRow(i).getCell(2).value);
            var email = sh.getRow(i).getCell(9).value;
            var rcode = RCODE[Math.floor(Math.random()*RCODE.length)];
            var roomNo = rcode + '-' + randomIntFromInterval(1, 1000);
            var lNo = rcode + '-' + randomIntFromInterval(1, 1000); 
            const stud = {
                rollno: rno,
                name: n,
                email: email,
                roomNo: roomNo,
                laundaryCardNo: lNo
            }
            Student.create(stud)
            .then(data => {      
                console.log(stud);
            })
            .catch(err => {
            //   res.status(500).send({
            //     message: err.message || "Some error occurred while making student."
            //   });
            console.log("Error");
            console.log(err.message);
            });        
        }
    });

    // const stud = {
    //     rollno: 102003066,
    //     name: "abcd",
    //     email: "abcd@avd",
    //     roomNo: "O-625",
    //     laundaryCardNo: "O-122"
    // }

    // Student.create(stud)
    // .then(data => {      
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message: err.message || "Some error occurred while making student."
    //   });
    // });

    res.status(200).send({
        message: "Nicely work done"
      });
};