const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: String,
    tel: String,
    address: String,
    modelID: String,
    serialID: String,
    purchaseDate: String,
    expireDate: String,
    invoiceID: String,
    status: { type: String, default: "OK" },
  })
);

module.exports = Customer;
