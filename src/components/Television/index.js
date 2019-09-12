import React from "react"
import styled from "styled-components/macro"

import MonitorBase from "assets/television/Monitor"

import Screen from "./components/Screen"
import Cursor from "./components/Cursor"

const Container = styled.div`
  position: relative;
  width: 36rem;
  height: 36rem;
  margin: 3rem;
  ${props => props.hidden && "opacity: 0; display: block;"}
`

const Monitor = styled(MonitorBase)`
  pointer-events: none;
  position: absolute;
  z-index: 1;
`

const Display = styled.div`
  position: absolute;
  width: 87.5%;
  left: 6.5%;
  height: 66.5%;
  top: 11%;
  opacity: 0.7;
  //cursor: none;
`

const Content = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  color: black;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
`

export default function Television(props) {
  const { children, hidden, ...restProps } = props

  return (
    <Container hidden={hidden} {...restProps}>
      <Monitor />
      <Display>
        {/* <Cursor /> */}
        <Screen />
        <Content>{children}</Content>
      </Display>
    </Container>
  )
}
