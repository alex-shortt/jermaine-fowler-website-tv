import React from "react"

import Static from "./components/Static"
import Surveillance from "./components/Surveillance"

export default function Content(props) {
  const { children, on, broken, surveillance } = props

  if (children) {
    return <>{children}</>
  }

  if (broken) {
    return <Static on={on} />
  }

  if (surveillance) {
    return <Surveillance on={on} />
  }

  return <></>
}
