module.exports = (app) => {
  const record = require("../controllers/goods.controller.js");
  const { authJwt } = require("../middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/add", [authJwt.verifyToken], record.create);

  // Retrieve all Tutorials
  router.get("/getData", [authJwt.verifyToken], record.findAll);

  // Delete a Tutorial with id
  router.delete("/delete/:id", [authJwt.verifyToken],record.delete);

  app.use("/api/getModel", router);
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
};
