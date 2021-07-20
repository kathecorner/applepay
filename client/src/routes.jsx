import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaymentAmount from "./components/PaymentAmount";
import PayPal from "./components/PayPal";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PaymentAmount />
      </Route>
      <Route exact path="/payment">
        <PayPal />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
