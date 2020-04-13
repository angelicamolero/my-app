import React, { Component } from "react";
import {
  Button,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
  GridList
} from "@material-ui/core";
import Restaurant from "@material-ui/icons/Restaurant";
import Dish from "./dish.js";

export class Dishes extends Component {
  goBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  updateDish = (index, updatedName) => {
    this.props.onUpdateDish(index, updatedName);
  };

  render() {
    return (
      <div>
        <GridList>
          {this.props.data.dishes.map((dish, index) => (
            <Dish
              key={index}
              name={dish.name}
              ingredientes={dish.ingredientes}
              index={index}
              onUpdateDish={this.updateDish}
            ></Dish>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Dishes;
