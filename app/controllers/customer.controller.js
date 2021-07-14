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
    res.status(400).send({ message: "กรอกข้อมูลให้ครบทุกช่อง!" });
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
        message: err.message || "ระบบขัดข้อง.",
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
        message: err.message || "ไม่สามารถรับข้อมูลได้.",
      });
    });
};

exports.findbySerial = (req, res) => {
  const serialID = req.params.id;
  var condition = serialID
    ? { serialID: { $regex: serialID, $options: "i" } }
    : {};
  Record.findOne(condition)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "ไม่พบสินค้านี้ " + serialID });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ไม่สามารถรับข้อมูลได้.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Record.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "ไม่พบข้อมูล " + id });
      else res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "ไม่สามารถรับข้อมูลได้" });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "ข้อมูลว่าง!",
    });
  }

  const id = req.params.id;

  Record.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `ไม่พบข้อมูล ${id}!`,
        });
      } else res.send({ message: "อัพเดทข้อมูลเรียบร้อย" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "ไม่สามารถอัพเดทได้",
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Record.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `ไม่สามารถลบ ${id} ได้ เนื่องจากไม่พบข้อมูล!`,
        });
      } else {
        res.send({
          message: "ลบเรียบร้อยแล้ว!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "ไม่สามารถลบ " + id + " ได้",
      });
    });
};
