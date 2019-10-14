import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"

import Television from "components/Television"
import Main from "scenes/Pages/Main"
import Media from "scenes/Pages/Media"
import Soon from "scenes/Pages/Soon"
import Loading from "scenes/Loading"
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
  const [moving, setMoving] = useState(null)

  useEffect(() => {
    if (!plane) {
      const pages = [
        { path: "", content: Main, coords: [3, 3], initOn: "true" },
        { path: "media", content: Media, coords: [2, 1], initOn: "true" },
        // { path: "about", content: About, coords: [2, 4], initOn: "true" },
        // { path: "socials", content: Socials, coords: [1, 3], initOn: "true" },
        {
          path: ["tour", "interviews", "news"],
          content: Soon,
          coords: [0, 2],
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
    <>
      <Loading moving={moving} />
      <Camera page={page} plane={plane} setMoving={setMoving}>
        <Container>
          {plane.map((row, x) => (
            <>{row.map(item => renderItem(item))}</>
          ))}
        </Container>
      </Camera>
    </>
  )
}

function renderItem(item) {
  const { hidden, content: Content, ...itemProps } = item

  return (
    <Television className="television" {...itemProps}>
      {Content && <Content />}
    </Television>
  )
}
