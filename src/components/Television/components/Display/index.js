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
  height: 71%;
  top: 11.5%;
  filter: brightness(1.2);
  overflow: hidden;
  background: black;
  z-index: -1;
`

const Content = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  color: #46ff00;
  box-sizing: border-box;
  overflow-y: auto;

  font-size: 1.5rem;
  color: white;
  font-weight: 900;
  //filter: blur(0.5px);

  box-shadow: inset 0px 0px 24px rgba(255, 255, 255, 0.15);

  & a {
    text-decoration: none;
    transition: opacity 0.15s linear;

    &:hover {
      opacity: 0.5;
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
