import React from "react"

import Static from "./components/Static"
import Surveillance from "./components/Surveillance"
import VideoSelect from "./components/VideoSelect"
import Candid from "./components/Candid"

export default function Content(props) {
  const { children, broken, surveillance, candid, knob, videos } = props

  if (children) {
    return <>{children}</>
  }

  if (broken) {
    return <Static {...props} />
  }

  if (surveillance) {
    return <Surveillance {...props} />
  }

  if (candid) {
    return <Candid {...props} />
  }

  if (knob && videos) {
    return <VideoSelect {...props} />
  }

  return <></>
}
