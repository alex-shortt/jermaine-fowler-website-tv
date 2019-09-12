import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components/macro"
import uuid from "uuid/v1"

import Helmet from "components/Helmet"
import Television from "components/Television"
import Main from "scenes/Pages/Main"
import { buildPlane } from "services/plane"

import Camera from "./components/Camera"

const Row = styled.div`
  display: flex;
`

export default function View(props) {
  const [plane, setPlane] = useState(null)
  const [position, setPosition] = useState([0, 0])

  useEffect(() => {
    if (!plane) {
      const pages = [{ content: Main, position: [0, 0] }]
      const builtPlane = buildPlane(pages)
      setPlane(builtPlane)
    }
  }, [plane])

  if (!plane) {
    return <></>
  }

  return (
    <>
      <Helmet title="View" />
      <Camera position={position}>
        {plane.map(row => {
          return (
            <Row key={uuid()}>
              {row.map(item => renderItem(item))}
              <br />
            </Row>
          )
        })}
      </Camera>
    </>
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
