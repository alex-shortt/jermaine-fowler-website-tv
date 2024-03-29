import React, { useRef } from "react"
import styled from "styled-components/macro"

import { flickerAnim } from "../../../styles/animations"

const Display = styled.div`
  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    z-index: 7;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 7;
    pointer-events: none;
    animation: ${flickerAnim} ${props => props.duration}s infinite;
    animation-delay: ${props => props.delay}s;
  }
`

export default function Screen(props) {
  const animDelay = useRef(Math.random())
  const animDuration = useRef(0.13 + Math.random() * 0.6)

  return <Display delay={animDelay.current} duration={animDuration} />
}
