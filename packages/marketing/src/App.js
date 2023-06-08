import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

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

export default () => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </>
  )
}
