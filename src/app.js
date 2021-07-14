import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import StockAllocation from "./stockAllocation";

export default () => {
    return (
      <Router history={history}>
            <Switch>
                <Route exact path="/"><StockAllocation /> </Route>
            </Switch>
      </Router>
    );
  };

  