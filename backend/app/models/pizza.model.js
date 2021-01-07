const mongoose = require("mongoose");

const IngredientsSchema = new mongoose.Schema({
  name: String,
  photoURL: String,
});
const VariantsSchema = new mongoose.Schema({
  size: String,
  price: Number,
  wage: Number,
});
const Pizza = mongoose.model(
  "Pizza",
  new mongoose.Schema({
    name: String,
    pizzaVariant: [VariantsSchema],
    ingredients: [IngredientsSchema],
    photoURL: String,
  })
);

module.exports = Pizza;