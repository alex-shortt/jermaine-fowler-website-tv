import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components/macro"
import uuid from "uuid/v1"

import Helmet from "components/Helmet"
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
        { path: "", content: Main, coords: [4, 3] },
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
      {plane.map((row, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Row key={`row-${i}`}>{row.map(item => renderItem(item))}</Row>
      ))}
    </Camera>
  )
}

function renderItem(item) {
  const { hidden, content: Content, id } = item
  return (
    <Television className="television" key={id} hidden={hidden}>
      {Content && <Content />}
    </Television>
  )
}
