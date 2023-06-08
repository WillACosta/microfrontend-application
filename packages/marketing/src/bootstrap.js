import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { createMemoryHistory } from "history"

const mount = (el, { onNavigate }) => {
  const currentHistory = createMemoryHistory()

  if (onNavigate) {
    currentHistory.listen(onNavigate)
  }

  ReactDOM.render(<App history={currentHistory} />, el)

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
  const devRoot = document.querySelector("#_marketing-dev-root")

  if (devRoot) {
    mount(devRoot, {})
  }
}

export { mount }
