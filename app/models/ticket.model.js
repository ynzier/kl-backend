const mongoose = require("mongoose");

const Ticket = mongoose.model(
  "Ticket",
  new mongoose.Schema(
    {
      serialID: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      tel: {
        type: String,
        required: true,
      },
      status: {
        type: String,
      },
      message: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Ticket;
