import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"

import Main from "scenes/Pages/Main"
import Soon from "scenes/Pages/Soon"
import Loading from "scenes/Loading"
import { buildPlane, renderPlane } from "services/plane"

import { interviews, media } from "./assets/videos"
import CameraBase from "./components/Camera"

const PLANE_DIMENSION = 5

const Camera = styled(CameraBase)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(${PLANE_DIMENSION * 2}, auto);
  grid-template-rows: repeat(${PLANE_DIMENSION * 2}, auto);
`

const pages = [
  { path: "", content: Main, coords: [3, 3] },
  {
    path: "interviews",
    knob: true,
    videos: interviews,
    knobRange: interviews.length,
    coords: [1, 1]
  },
  {
    path: "media",
    knob: true,
    videos: media,
    knobRange: media.length,
    coords: [4, 0]
  },
  { path: ["tour", "news"], content: Soon, coords: [0, 3] }
]

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
        {renderPlane(plane)}
      </Camera>
    </>
  )
}
