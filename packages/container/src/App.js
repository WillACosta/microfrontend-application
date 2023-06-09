import React, { lazy, Suspense, useEffect, useState } from "react"

import { Redirect, Route, Router, Switch } from "react-router-dom"

import { createBrowserHistory } from "history"

import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles"

import Header from "./components/Header"
import LoadingIndicator from "./components/LoadingIndicator"

const AuthApp = lazy(() => import("./components/AuthApp"))
const MarketingApp = lazy(() => import("./components/MarketingApp"))
const DashboardApp = lazy(() => import("./components/DashboardApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
})

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard")
    }
  }, [isSignedIn])

  function handleSignOut() {
    setIsSignedIn(false)
  }

  function handleSignIn() {
    setIsSignedIn(true)
  }

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
          <Suspense fallback={<LoadingIndicator />}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={handleSignIn} />
              </Route>

              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardApp />
              </Route>

              <Route path="/">
                <MarketingApp onSignIn={handleSignIn} />
              </Route>
            </Switch>
          </Suspense>
        </>
      </StylesProvider>
    </Router>
  )
}
