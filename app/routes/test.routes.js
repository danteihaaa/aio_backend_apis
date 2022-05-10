module.exports = app => {
    const testController = require("../controllers/test.controller.js");
  
    const router = require("express").Router();
  
    // // Create a new test
    // router.post("/", testController.create);

    router.get("/import", testController.importdata);

    app.use("/api/tests", router);
  };  