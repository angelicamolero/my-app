import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./../App";
import Dish from "./dish";
import NotFound from "./notFound";
import Countries from "./countries";
import Dishes from "./dishes";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/dishes" component={Dishes} />
      <Route path="/dish/:name" component={Dish} />
      <Route path="/countries" component={Countries} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
