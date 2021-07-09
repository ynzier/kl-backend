const db = require("../models");
const Goods = db.goods;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.modelID) {
    res.status(400).send({ message: "กรุณาใส่ข้อมูลก่อน!" });
    return;
  }

  // Create a Tutorial
  const goods = new Goods({
    modelID: req.body.modelID,
  });

  // Save Tutorial in the database
  goods
    .save(goods)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "การเชื่อมต่อมีปัญหา",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Goods.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "การเชื่อมต่อมีปัญหา",
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  
  Goods.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Record with id=${id}. Maybe Record was not found!`,
        });
      } else {
        res.send({
          message: "Record was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Record with id=" + id,
      });
    });
};
