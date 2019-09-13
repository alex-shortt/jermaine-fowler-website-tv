import React from "react"
import styled from "styled-components/macro"

import { breatheAnim } from "./animations"

const Container = styled.div`
  position: absolute;
  width: 84.5%;
  left: 8%;
  height: 64%;
  top: 12.5%;
  opacity: 0.7;
  z-index: 2;
  box-shadow: 0px 2px 140px rgba(214, 214, 214, 0.2),
    inset 0px 0px 24px rgba(255, 255, 255, 0.15);
  pointer-events: none;
  animation: ${breatheAnim} 5s infinite ease-in-out;
  transition: opacity 1s ease-out;
  ${props => !props.on && "opacity: 0 !important"};
`

export default function PowerButton(props) {
  const { on } = props

  return <Container on={on} />
}
