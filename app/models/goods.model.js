const mongoose = require("mongoose");

const Goods = mongoose.model(
  "Goods",
  new mongoose.Schema({
    modelID: String,
  })
);

module.exports = Goods;
