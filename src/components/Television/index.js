import React from "react"
import styled from "styled-components/macro"

import MonitorBase from "assets/television/Monitor"

import Screen from "./components/Screen"
import Cursor from "./components/Cursor"

const Container = styled.div`
  position: relative;
  width: 48rem;
  height: 48rem;
`

const Monitor = styled(MonitorBase)`
  pointer-events: none;
  position: absolute;
  z-index: 1;
`

const Display = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  height: 70%;
  top: 9%;
  background: red;
  opacity: 0.7;
  cursor: none;
`

export default function Television(props) {
  return (
    <Container>
      <Monitor />
      <Display>
        <Cursor />
        <Screen />
      </Display>
    </Container>
  )
}
