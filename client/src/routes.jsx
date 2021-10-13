import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaymentAmount from "./components/PaymentAmount";
import ApplePay from "./components/ApplePay";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PaymentAmount />
      </Route>
      <Route exact path="/payment">
        <ApplePay />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
