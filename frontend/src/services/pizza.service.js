import axios from "axios";

const API_URL = "http://localhost:8080/api/pizza/";

class PizzaService {
  getAllPizzas() {
    return axios.get(API_URL + "all").then((response) => {
      return response.data;
    });
  }
}

export default new PizzaService();
