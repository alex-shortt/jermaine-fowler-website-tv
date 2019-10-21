import React from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  position: absolute;
  bottom: 7%;
  left: 10%;
  width: ${props => (props.knob ? "auto" : "25%")};
  height: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  filter: blur(0.7px) brightness(0.9);

  @media screen and (max-width: 800px) {
    bottom: 4vw;
    height: 6vw;
  }
`

const RedLED = styled.div`
  opacity: 0.9;
  width: 18px;
  height: 18px;
  background-color: #f00;
  border-radius: 50%;
  box-shadow: ${props =>
    props.on
      ? "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px"
      : "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #200909 0 -1px 14px 1px, rgba(255, 0, 0, 0.19) 0 2px 12px"};
  transition: 0.8s ease-out;

  @media screen and (max-width: 800px) {
    width: 12px;
    height: 12px;
  }
`

const BlueLED = styled.div`
  width: 8px;
  height: 8px;
  background-color: #00f;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 3px 1px, inset #006 0 -1px 6px,
    #3f8cff 0 2px 14px;
  transition: 0.8s ease-out;
`

const YellowLED = styled.div`
  width: 8px;
  height: 8px;
  background-color: #ff0;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 3px 1px, inset #808002 0 -1px 6px,
    #ff0 0 2px 12px;
  transition: 0.8s ease-out;
`

export default function Lights(props) {
  const { on, knob } = props

  return (
    <Container knob={knob}>
      <RedLED on={on} />
      {/* <BlueLED /> */}
      {/* <YellowLED /> */}
    </Container>
  )
}
