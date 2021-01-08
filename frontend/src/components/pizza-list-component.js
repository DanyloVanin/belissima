import React, { Component } from "react";
import PizzaCard from "./pizza-card.component";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getPizzas } from "../actions/pizza";

export default class PizzaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataIsReturned: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      getPizzas()
        .then((pizzas) => {
          this.setState({ pizzas });
          this.setState({ dataIsReturned: true });
        })
        .catch((err) => console.log(err));
    }, 1500);
  }

  render() {
    if (this.state.dataIsReturned) {
      const pizzaList = this.state.pizzas;

      return (
        <div>
          {pizzaList.map((pizza) => {
            return <PizzaCard {...pizza}/>;
          })}
        </div>
      );
    } else {
      return <CircularProgress />;
    }
  }
}
