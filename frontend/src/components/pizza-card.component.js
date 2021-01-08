import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FF0000 30%, #FF8E53 90%)",
    borderRadius: 15,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 4px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "16px",
  },
})(Button);

export default class PizzaCard extends Component {
  constructor(props) {
    console.log('props' + JSON.stringify(props));
    super(props);
  
    this.state = {
      actual: "", //this.props.variants[0]
    };
  }

  render() {
    return (
      <Card
        style={{
          maxWidth: 345,
          boxShadow: "0 3px 5px 2px rgba(0,0,0,0.3)",
          borderRadius: 15,
        }}
      >
        <CardActionArea>
          <CardMedia component="img" src={this.props.photoURL} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {this.props.name}
            </Typography>
            <Typography gutterBottom variant="subtitle2" color="textSecondary">
              {this.props.variants[2] + " г"}
            </Typography>
            <Typography gutterBottom variant="subtitle2" color="textSecondary">
              {this.props.ingredients.join(", ")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <StyledButton
            variant="outlined"
            color="primary"
            onClick={() => {
              alert("clicked");
            }}
            size="large"
          >
            {<ShoppingCartIcon />}
            To Cart
          </StyledButton>
          <Typography
            style={{
              fontSize: "20px",
              margin: "0 0 0 5em",
              fontWeight: "bold"
            }}
          >
            {this.props.variants[1] + " грн"}
          </Typography>
        </CardActions>
      </Card>
    );
  }
}

PizzaCard.propTypes = {
  variants: PropTypes.array.isRequired,
  ingredients: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  photoURL: PropTypes.string,
  onSale: PropTypes.bool,
};
