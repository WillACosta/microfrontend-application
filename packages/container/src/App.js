import React, { lazy, Suspense, useState } from "react"
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
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header isSignedIn={isSignedIn} />
          <Suspense fallback={<LoadingIndicator />}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/">
                <MarketingApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
            </Switch>
          </Suspense>
        </>
      </StylesProvider>
    </BrowserRouter>
  )
}
