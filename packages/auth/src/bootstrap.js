import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { createBrowserHistory, createMemoryHistory } from "history"

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const currentHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    currentHistory.listen(onNavigate)
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={currentHistory} />, el)

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = currentHistory

      if (pathname !== nextPathName) {
        currentHistory.push(nextPathName)
      }
    },
  }
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root")

  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    })
  }
}

export { mount }
