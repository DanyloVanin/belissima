const mongoose = require("mongoose");

const Drink = mongoose.model(
  "Drink",
  new mongoose.Schema({
    name: String,
    wage: Number,
    price: Number,
    photoURL: String,
  })
);

module.exports = Drink;
