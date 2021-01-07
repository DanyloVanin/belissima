const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    date: {
      type: Date.UTC,
      default: Date.now,
    },
    orderContents: [ObjectId],
    userID: [ObjectId],
  })
);

module.exports = Order;
