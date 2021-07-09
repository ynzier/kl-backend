const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Goods",
  new mongoose.Schema(
    {
      modelID: String,
    },
  )
);

module.exports = Customer;
