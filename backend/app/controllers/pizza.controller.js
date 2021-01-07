exports.allPizzas = (req, res) => {
    Pizza.find({}, function(err, pizzas) {
        res.render("/pizzasList", {pizzas: pizzas})
      });
}