import React from "react"
import styled from "styled-components/macro"

import SMPTE from "./components/SMPTE"
import Overlay from "./components/Overlay"

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default function Soon(props) {
  return (
    <Container>
      <SMPTE />
      <Overlay />
    </Container>
  )
}
