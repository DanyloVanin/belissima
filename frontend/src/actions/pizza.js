import PizzaService from "../services/pizza.service";

export const getPizzas = () => {
  return PizzaService.getAllPizzas().then(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
