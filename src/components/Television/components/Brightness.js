import React from "react"
import styled from "styled-components/macro"

import { breatheAnim } from "../styles/animations"

const Container = styled.div`
  width: 0;
  height: 0;
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    width: ${props => props.width}rem;
    height: ${props => props.height}rem;
    margin: 5px;
    transform: scale(2);
    z-index: 1;
    background: radial-gradient(circle at center,#ffffff4f,#ffffff00 70%) no-repeat;
    pointer-events: none;
    //animation: ${breatheAnim} 5s infinite ease-in-out;
    transition: opacity 3s ease-out;
    opacity: ${props => (props.on ? "0.8" : "0")};
  }
`

export default function Brightness(props) {
  const { on, height, width } = props

  return <Container {...props} />
}
