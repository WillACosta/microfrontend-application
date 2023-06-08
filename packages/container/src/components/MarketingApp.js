import React, { useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"

import { mount } from "marketing/MarketingApp"

export default () => {
  const containerRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(containerRef.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location

        if (pathname !== nextPathName) {
          history.push(nextPathName)
        }
      },
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={containerRef}></div>
}
