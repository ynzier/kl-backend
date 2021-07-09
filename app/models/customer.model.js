const mongoose = require("mongoose");
var date = Date.now;
const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema(
    {
      name: String,
      tel: String,
      address: String,
      modelID: String,
      serialID: String,
      purchaseDate: String,
      warrantyTime: String,
      expireDate: String,
      invoiceID: String,
      comment: String,
      status: { type: String, default: "OK" },
    },
    { timestamps: true }
  )
);

module.exports = Customer;
