import React, { useState, useEffect } from "react"
import styled, { keyframes, css } from "styled-components/macro"

const fadeOutAnim = keyframes`
  0% { opacity: 1 }
  100% {opacity: 0}
`

const glow = keyframes`
  0% { opacity: 0 }
  50% {opacity: 1}
  100% {opacity: 0}
`

const fadeOutCont = css`
  animation: ${fadeOutAnim} 1.5s ease-in forwards;
`

const fadeOutText = css`
  animation: ${fadeOutAnim} 0.75s linear forwards;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.inPlace === "true" && fadeOutCont};
  animation-delay: 1s;
  ${props => props.inPlace === "true" && "pointer-events: none"};
`

const Text = styled.h1`
  color: white;
  ${props => props.inPlace === "true" && fadeOutText};
  ${props => props.inPlace === "true" && "pointer-events: none"};

  &:after {
    content: "";
    position: absolute;
    height: 1em;
    width: 20px;
    background: white;
    margin-left: 10px;
    animation: ${glow} 1.2s infinite;
  }
`

export default function Loading(props) {
  const { moving } = props

  const [inPlace, setInPlace] = useState("false")

  useEffect(() => {
    if (inPlace === "false") {
      setInPlace(moving === "false" ? "true" : "false")
    }
  }, [inPlace, moving])

  console.log(inPlace === "true")

  return (
    <Container inPlace={inPlace}>
      <Text inPlace={inPlace}>Loading</Text>
    </Container>
  )
}
