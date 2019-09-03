import React from "react"
import styled from "styled-components/macro"

import Monitor from "assets/television/Monitor"

const Container = styled.div`
  position: relative;
  width: 48rem;
  height: 48rem;
`

const Display = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  height: 70%;
  top: 9%;
  background: red;
  opacity: 0.7;
  z-index: -1;
`

export default function Television(props) {
  return (
    <Container>
      <Monitor />
      <Display />
    </Container>
  )
}
