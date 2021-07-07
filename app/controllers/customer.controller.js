const db = require("../models");
const Record = db.customer;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (
    !(
      req.body.name &&
      req.body.tel &&
      req.body.address &&
      req.body.modelID &&
      req.body.serialID &&
      req.body.purchaseDate &&
      req.body.expireDate &&
      req.body.invoiceID
    )
  ) {
    res.status(400).send({ message: "กรุณาใส่ข้อมูลให้ครบทุกช่อง!" });
    return;
  }

  // Create a Tutorial
  const record = new Record({
    name: req.body.name,
    tel: req.body.tel,
    address: req.body.address,
    modelID: req.body.modelID,
    serialID: req.body.serialID,
    purchaseDate: req.body.purchaseDate,
    warrantyTime: req.body.warrantyTime,
    expireDate: req.body.expireDate,
    invoiceID: req.body.invoiceID,
  });

  // Save Tutorial in the database
  record
    .save(record)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Record.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Record.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Record with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ message: "Error retrieving Record with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Empty!",
    });
  }

  const id = req.params.id;

  Record.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Record with id=${id}. Maybe Record was not found!`,
        });
      } else res.send({ message: "Record was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Record with id=" + id,
      });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
