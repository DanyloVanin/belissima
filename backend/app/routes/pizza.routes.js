const controller = require("../controllers/pizza.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get("/api/pizza/all", controller.allPizzas)

    app.get("/api/pizza/get", controller.getByPage)

    app.get("/api/pizza/:pizzaId", controller.getPizzaById)

    app.get("/api/pizza/filter/:filter", controller.filterPizza)

    app.put("/api/pizza/create", controller.createPizza)

    app.delete("/api/pizza/delete/:pizzaId", controller.deletePizza)

    app.post("/api/pizza/update/:pizzaId", controller.updatePizza)
};