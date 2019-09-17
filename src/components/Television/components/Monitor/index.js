import React from "react"
import styled from "styled-components/macro"

import MonitorSVGBase from "assets/television/Monitor"
import logo from "assets/television/logo.png"

import PowerButton from "./components/PowerButton"
import Lights from "./components/Lights"

const MonitorSVG = styled(MonitorSVGBase)`
  pointer-events: none;
  position: absolute;
`

const Logo = styled.img.attrs({ src: logo })`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  height: 8%;
  opacity: 0.6;
`

const Container = styled.div`
  z-index: 1;
`

export default function Monitor(props) {
  const { on, onClick } = props

  return (
    <Container>
      <MonitorSVG {...props} />
      <Logo />
      <Lights on={on} />
      <PowerButton onClick={onClick} />
    </Container>
  )
}
