import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles"

import Header from "./components/Header"
import LoadingIndicator from "./components/LoadingIndicator"

const AuthApp = lazy(() => import("./components/AuthApp"))
const MarketingApp = lazy(() => import("./components/MarketingApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header />
          <Suspense fallback={<LoadingIndicator />}>
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </>
      </StylesProvider>
    </BrowserRouter>
  )
}
