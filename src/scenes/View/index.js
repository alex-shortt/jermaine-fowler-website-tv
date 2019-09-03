import React from "react"

import Helmet from "components/Helmet"
import Television from "components/Television"

export default function View(props) {
  return (
    <>
      <Helmet title="View" />
      <Television /> <Television />
    </>
  )
}
