import React from "react"
import { Route, Router, Switch } from "react-router-dom"

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles"

import Landing from "./components/Landing"
import Pricing from "./components/Pricing"

// strategy for create prefix for scoped styles
const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
})

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  )
}
