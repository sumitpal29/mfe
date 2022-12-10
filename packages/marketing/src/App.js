import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "../components/Landing.js";
import Pricing from "../components/Pricing.js";

export default () => (
  <div>
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
);
