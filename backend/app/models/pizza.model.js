const mongoose = require("mongoose");

/*const IngredientsSchema = mongoose.model(
"Ingredient",
new mongoose.Schema({
  name: String,
  photoURL: {
    type: String,
    default: "https://api.thecatapi.com/v1/images/search",
  },
}));

const VariantsSchema = mongoose.model( 
  "pizzaVariant",
  new mongoose.Schema({
  size: {
    type: String,
    enum: ['small', 'medium', 'big'],
    default: 'small',
  },
  price: Number,
  wage: Number,
}));*/

const Pizza = mongoose.model(
  "Pizza",
  new mongoose.Schema({
    name: String,
    photoUrl: {
      type: String,
      default: "https://picsum.photos/200",
    },
    pizzaVariant: [{size: String, price: Number, wage: Number}],
    ingredients: [{_id: false, name: String, photoURL: String}],
    onSale: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = Pizza;
