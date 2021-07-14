const db = require("../models");
const Ticket = db.ticket;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (
    !(
      req.body.name &&
      req.body.tel &&
      req.body.serialID &&
      req.body.email &&
      req.body.message &&
      req.body.image
    )
  ) {
    res.status(400).send({ message: "กรุณาใส่ข้อมูลให้ครบทุกช่อง!" });
    return;
  }

  // Create a Tutorial
  const ticket = new Ticket({
    name: req.body.name,
    serialID: req.body.serialID,
    email: req.body.email,
    tel: req.body.tel,
    message: req.body.message,
    image: req.body.image,
  });

  // Save Tutorial in the database
  ticket
    .save(ticket)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ไม่สามารถรับข้อมูลได้.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Ticket.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ระบบขัดข้อง.",
      });
    });
};

exports.findbySerial = (req, res) => {
  console.log(req.params.id);
  const serialID = req.params.id;
  var condition = serialID
    ? { serialID: { $regex: serialID, $options: "i" } }
    : {};
  Ticket.find(condition)
    .then((data) => {
      if (!data) res.status(404).send({ message: "ไม่พบสินค้านี้ : " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ระบบขัดข้อง.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Ticket.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "ไม่พบข้อมูล " + id });
      else res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ message: "ไม่สามารถรับข้อมูลได้" });
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

  Ticket.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `ไม่พบข้อมูล ${id} !`,
        });
      } else res.send({ message: "อัพเดทข้อมูลเรียบร้อย." });
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

  Ticket.findByIdAndRemove(id)
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
