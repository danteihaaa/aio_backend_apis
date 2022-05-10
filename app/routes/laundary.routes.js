const { authJwt } = require("../middlewares");

module.exports = app => {
    const laundaryController = require("../controllers/laundary.controller.js");
  
    const router = require("express").Router();
  
    // // Create a new laundary
    // router.post("/", laundaryController.create);

    router.post("/give", [authJwt.verifyToken], laundaryController.givelaundary);

    router.get("/get", [authJwt.verifyToken], laundaryController.getlaundary);

    router.post("/collect", [authJwt.verifyToken], laundaryController.collectlaundary);

    app.use("/api/laundary", router);
  };  