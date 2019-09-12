import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components/macro"
import uuid from "uuid/v1"

import Helmet from "components/Helmet"
import Television from "components/Television"
import Main from "scenes/Pages/Main"
import { buildPlane } from "services/plane"

const Row = styled.div`
  display: flex;
`

export default function View(props) {
  const [plane, setPlane] = useState(null)

  const pages = [{ content: Main, position: [0, 0] }]

  useEffect(() => {
    if (!plane) {
      const builtPlane = buildPlane(pages)
      setPlane(builtPlane)
    }
  }, [pages, plane])

  return (
    <>
      <Helmet title="View" />
      <div>
        {plane &&
          plane.map(row => {
            return (
              <Row key={uuid()}>
                {row.map(item => renderItem(item))}
                <br />
              </Row>
            )
          })}
      </div>
    </>
  )
}

function renderItem(item) {
  const { hidden, content: Content, id } = item
  return (
    <Television key={id} hidden={hidden}>
      {Content && <Content />}
    </Television>
  )
}
