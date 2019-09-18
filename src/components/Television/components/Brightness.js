import React from "react"
import styled from "styled-components/macro"

import { breatheAnim } from "../styles/animations"

const Container = styled.div`
  position: absolute;
  width: 80vw;
  left: 50%;
  height: 80vw;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: radial-gradient(circle at center,#ffffff33,#ffffff00 60%) no-repeat;
  pointer-events: none;
  //animation: ${breatheAnim} 5s infinite ease-in-out;
  transition: opacity 3s ease-out;
  opacity: ${props => (props.on ? "0.9" : "0")};
`

export default function Brightness(props) {
  const { on } = props

  return <Container on={on} />
}
