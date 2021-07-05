
module.exports = (app) => {
  const record = require("../controllers/customer.controller.js");
  const { authJwt } = require("../middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/add", [authJwt.verifyToken], record.create);

  // Retrieve all Tutorials
  router.get("/getData", record.findAll);

  // Retrieve all published Tutorials
  router.get("/published", record.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", record.findOne);

  // Update a Tutorial with id
  router.put("/:id", record.update);

  // Delete a Tutorial with id
  router.delete("/:id", record.delete);

  app.use("/api/record", router);
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
};
