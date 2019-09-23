import React from "react"
import styled from "styled-components/macro"

import MonitorImageURL from "assets/television/Monitor.png"

import PowerButton from "./components/PowerButton"
import Lights from "./components/Lights"

const MonitorImage = styled.img.attrs({ src: MonitorImageURL })`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  z-index: 1;
`

export default function Monitor(props) {
  const { on, onClick } = props

  return (
    <Container>
      <MonitorImage {...props} />
      <Lights on={on} />
      <PowerButton onClick={onClick} />
    </Container>
  )
}
