const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.ticket = require("./ticket.model");
db.customer = require("./customer.model");
db.goods = require("./goods.model");

module.exports = db;
