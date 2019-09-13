import React from "react"
import styled from "styled-components/macro"

import { turnOffAnim, turnOnAnim } from "../../styles/animations"

import Screen from "./components/Screen"

const OS = styled.div`
  animation: ${props => (props.on ? turnOnAnim : turnOffAnim)}
    ${props => (props.on ? "5" : "0.7")}s forwards;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  position: absolute;
  width: 87.5%;
  left: 6.5%;
  height: 66.5%;
  top: 11%;
  opacity: 0.7;
  overflow: hidden;
`

const Content = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0f0f0f;
  color: #46ff00;
  box-sizing: border-box;
  overflow-y: auto;

  font-size: 1.5rem;
  color: white;
  font-weight: 900;
  filter: blur(0.7px);

  & a {
    text-decoration: none;
    transition: filter 0.15s linear;

    &:hover {
      filter: blur(1.5px);
    }
  }
`
export default function Display(props) {
  const { children, on } = props

  return (
    <Container>
      <OS on={on}>
        {/* <Cursor /> */}
        <Screen />
        <Content>{children}</Content>
      </OS>
    </Container>
  )
}
