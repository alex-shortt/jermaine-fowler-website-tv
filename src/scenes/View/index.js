import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"

import Television from "components/Television"
import Main from "scenes/Pages/Main"
import About from "scenes/Pages/About"
import { buildPlane } from "services/plane"

import Camera from "./components/Camera"

const Row = styled.div`
  display: flex;
  flex-direction: column;
`

export default function View(props) {
  const {
    match: {
      params: { page }
    }
  } = props

  const [plane, setPlane] = useState(null)

  useEffect(() => {
    if (!plane) {
      const pages = [
        { path: "", content: Main, coords: [4, 3], initOn: "true" },
        { path: "about", content: About, coords: [2, 4] }
      ]
      const builtPlane = buildPlane(pages, [8, 8])
      setPlane(builtPlane)
    }
  }, [plane])

  if (!plane) {
    return <></>
  }

  return (
    <Camera page={page} plane={plane}>
      {plane.map((row, x) => (
        // eslint-disable-next-line react/no-array-index-key
        <Row key={`row-${x}`}>{row.map(item => renderItem(item))}</Row>
      ))}
    </Camera>
  )
}

function renderItem(item) {
  const { hidden, content: Content, id, initOn } = item

  return (
    <Television className="television" key={id} hidden={hidden} initOn={initOn}>
      {Content && <Content />}
    </Television>
  )
}
