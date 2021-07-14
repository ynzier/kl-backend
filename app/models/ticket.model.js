const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
mongoose.set("useCreateIndex", true);
var TicketSchema = new mongoose.Schema(
  {
    ticketID: {
      type: Number,
    },
    serialID: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    tel: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      default: "ยังไม่ได้อ่าน",
    },
  },
  {
    timestamps: true,
  }
);
TicketSchema.plugin(AutoIncrement, { inc_field: "ticketID" });

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
