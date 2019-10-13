import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"

import Television from "components/Television"
import Main from "scenes/Pages/Main"
import About from "scenes/Pages/About"
import Media from "scenes/Pages/Media"
import Socials from "scenes/Pages/Socials"
import { buildPlane } from "services/plane"

import Camera from "./components/Camera"

const PLANE_DIMENSION = 5

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(${PLANE_DIMENSION * 2}, auto);
  grid-template-rows: repeat(${PLANE_DIMENSION * 2}, auto);
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
        { path: "", content: Main, coords: [3, 3], initOn: "true" },
        { path: "about", content: About, coords: [2, 4], initOn: "true" },
        { path: "media", content: Media, coords: [1, 2], initOn: "true" },
        { path: "socials", content: Socials, coords: [0, 3], initOn: "true" },
        {
          path: ["tour", "interviews", "news"],
          broken: true,
          coords: [3, 4],
          initOn: "true"
        }
      ]
      const builtPlane = buildPlane(pages, [PLANE_DIMENSION, PLANE_DIMENSION])
      setPlane(builtPlane)
    }
  }, [plane])

  if (!plane) {
    return <></>
  }

  return (
    <Camera page={page} plane={plane}>
      <Container>
        {plane.map((row, x) => (
          <>{row.map(item => renderItem(item))}</>
        ))}
      </Container>
    </Camera>
  )
}

function renderItem(item) {
  const { hidden, content: Content, id, ...itemProps } = item

  return (
    <Television className="television" key={id} {...itemProps}>
      {Content && <Content />}
    </Television>
  )
}
