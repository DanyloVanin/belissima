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
    }, 2500);
  }

  render() {
    if (this.state.dataIsReturned) {
      const pizzaList = this.state.pizzas;
      const pizzaCards = pizzaList.map((pizza) => {
        return (
          <PizzaCard
            key={pizza._id}
            {...{
              key: pizza._id,
              name: pizza.name,
              variants: pizza.pizzaVariant,
              ingredients: pizza.ingredients,
              photoURL: pizza.photoUrl,
              onSale: pizza.onSale,
            }}
          />
        );
      });

      return (
        <div className="container">
          <div className="row">
            {
            pizzaCards.map(card => card)
            }
          </div>
        </div>
      );
    } else {
      return <CircularProgress />;
    }
  }
}
