import React, { Component } from "react";
import "./styles/App.css";

import Header from "./components/header";
import Dish from "./components/dish";
import NewDish from "./components/newDish";
import NotFound from "./components/notFound";
import Countries from "./components/countries";
import Dishes from "./components/dishes";
import data from "./assets/data/dishes.json";

class App extends Component {
  state = {
    dish: "tacos",
    dishes: data
  };

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/dishes");
  };

  updateDish = (index, updatedName) => {
    let newState = { ...this.state };
    newState.dishes.dishes[index].name = updatedName;

    this.setState(newState);
  };

  addDish = dishName => {
    let newState = { ...this.state };

    const newDish = {
      id: newState.dishes.dishes.length,
      name: dishName,
      country: "mexico",
      ingredientes: ["Carne", "Papa", "Salsa"]
    };

    newState.dishes.dishes.push(newDish);
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NewDish onAddDish={this.addDish} />
        {/* <Dish name={this.dish} /> */}
        <Dishes data={this.state.dishes} onUpdateDish={this.updateDish} />
      </div>
    );
  }
}

export default App;
