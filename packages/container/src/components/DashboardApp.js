import { mount } from "dashboard/DashboardApp"
import React, { useEffect, useRef } from "react"

export default () => {
  const containerRef = useRef(null)

  useEffect(() => {
    mount(containerRef.current)
  }, [])

  return <div ref={containerRef}></div>
}
