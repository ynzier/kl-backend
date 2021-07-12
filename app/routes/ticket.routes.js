module.exports = (app) => {
  const ticket = require("../controllers/ticket.controller.js");
  
  const { authJwt } = require("../middlewares");
  
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/add", ticket.create);

  // Retrieve all Tutorials
  router.get("/getData", [authJwt.verifyToken], ticket.findAll);

  // Retrieve a single Tutorial with id
  router.get("/find/:id", [authJwt.verifyToken], ticket.findOne);
  // Retrieve a single Tutorial with id
  router.get("/get/:id", [authJwt.verifyToken], ticket.findbySerial);

  // Update a Tutorial with id
  router.put("/update/:id", [authJwt.verifyToken], ticket.update);

  // Delete a Tutorial with id
  router.delete("/delete/:id", [authJwt.verifyToken], ticket.delete);


  app.use("/api/ticket", router);
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
};
