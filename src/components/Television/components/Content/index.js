import React from "react"

import Static from "./components/Static"
import Surveillance from "./components/Surveillance"
import VideoSelect from "./components/VideoSelect"

export default function Content(props) {
  const { children, broken, surveillance, knob, knobSelect } = props

  if (children) {
    return <>{children}</>
  }

  if (broken) {
    return <Static {...props} />
  }

  if (surveillance) {
    return <Surveillance {...props} />
  }

  if (knob && knobSelect === "video") {
    return <VideoSelect {...props} />
  }

  return <></>
}
