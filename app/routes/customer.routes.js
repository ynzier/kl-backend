module.exports = (app) => {
  const record = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/add", record.create);

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
};
