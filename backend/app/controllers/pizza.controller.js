const Pizza = require("../models/pizza.model");

// Get all
exports.allPizzas = (req, res) => {
  Pizza.find()
    .then((pizzas) => {
      res.status(200).send(pizzas);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pizzas.",
      });
    });
};

// Get all by page and limit of page
exports.getByPage = (req, res) => {
  const limit = Math.abs(req.query.limit) || 10;
  const page = (Math.abs(req.query.page) || 1) - 1;
  Pizza.find()
    .limit(limit)
    .skip(limit * page)
    .then((pizzas) => {
      res.status(200).send(pizzas);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pizzas.",
      });
    });
};

// Get pizza by id (ID) // : pizzaId
exports.getPizzaById = (req, res) => {
  Pizza.findById(req.params.pizzaId)
    .then((pizza) => {
      if (!pizza) {
        return res.status(404).send({
          message: "Pizza not found with id " + req.params.pizzaId,
        });
      }
      res.status(200).send(pizza);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Pizza not found with id " + req.params.pizzaId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving pizza with id " + req.params.pizzaId,
      });
    });
};

// Delete pizza by id
exports.deletePizza = (req, res) => {
  Pizza.findByIdAndRemove(req.params.pizzaId)
    .then((pizza) => {
      if (!pizza) {
        return res.status(404).send({
          message: "Pizza not found with id " + req.params.pizzaId,
        });
      }
      res.status(200).send({ message: "Pizza deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Pizza not found with id " + req.params.pizzaId,
        });
      }
      return res.status(500).send({
        message: "Could not delete pizza with id " + req.params.pizzaId,
      });
    });
};

// Create pizza
exports.createPizza = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Request body cannot be empty",
    });
  }

  const pizza = new Pizza({
    name: req.body.name,
    photoUrl: req.body.photoUrl,
    onSale: req.body.onSale,
    pizzaVariant: req.body.pizzaVariant,
    ingredients: req.body.ingredients
  });

  pizza
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating Pizza.",
      });
    });
};

// Update pizza with id
exports.updatePizza = (req, res) => {
  console.log(req.body);
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Request can not be empty",
    });
  }

  // Find note and update it with the request body
  Pizza.findByIdAndUpdate(
    req.params.pizzaId,
    {
      name: req.body.name,
      photoUrl: req.body.photoUrl,
      onSale: req.body.onSale,
    },
    { new: true }
  )
    .then((pizza) => {
      if (!pizza) {
        return res.status(404).send({
          message: "Pizza not found with id " + req.params.pizzaId,
        });
      }
      res.status(200).send(pizza);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Pizza not found with id " + req.params.pizzaId,
        });
      }
      console.log(err);
      return res.status(500).send({
        message: "Error updating pizza with id " + req.params.pizzaId,
      });
    });
};

// Filter pizza by parameters
exports.filterPizza = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Request can not be empty",
    });
  }

  const filter = req.body;
  Pizza.find(filter)
    .then((pizza) => {
      res.status(200).send(pizza);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pizzas.",
      });
    });
};
