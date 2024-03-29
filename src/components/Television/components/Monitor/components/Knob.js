import React from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  position: absolute;
  bottom: 3%;
  left: 26%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  height: 34px;
  width: 34px;

  @media screen and (max-width: 800px) {
    bottom: 2.5vw;
    height: 5vw;
    width: 5vw;
    padding: 1.25vw;
  }
`

const KnobButton = styled.button`
  z-index: 1;
  position: relative;
  border-radius: 50%;
  bottom: unset;
  right: unset;
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.15s linear;
  transform: rotate(${props => props.rot}deg);

  background-image: linear-gradient(
    0deg,
    rgb(29, 29, 41) 0%,
    rgb(35, 35, 50) 100%
  );

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid white;
    opacity: 0.7;
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    mix-blend-mode: exclusion;

    @media screen and (max-width: 800px) {
      border-left: 1vw solid transparent;
      border-right: 1vw solid transparent;
      border-bottom: 1.5vw solid white;
    }
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    border-radius: 50%;
    transition: transform 0.15s linear;
    transform: rotate(-${props => props.rot}deg);
    box-shadow: 0px 3px 0px rgb(8, 8, 24), 0px 3px 15px rgba(0, 0, 0, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.1),
      inset 0px 0px 7px rgba(255, 255, 255, 0.15);
  }

  &:active {
    background-image: linear-gradient(
      0deg,
      rgb(35, 35, 50) 0%,
      rgb(29, 29, 41) 100%
    );

    &:before {
      box-shadow: 0px 1.5px 0px rgb(8, 8, 24), 0px 2px 7px rgba(0, 0, 0, 0.4),
        inset 0px 1px 0px rgba(255, 255, 255, 0.1),
        inset 0px 0px 7px rgba(255, 255, 255, 0.15);
    }
  }
`

const Indicator = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: -50%;
  transform: translate(${props => `${props.x}%, ${props.y}%`});
  opacity: 0.6;

  &:after {
    content: "";
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 600px) {
      width: 3px;
      height: 3px;
    }
  }
`

const Text = styled.p`
  color: white;
  margin: 0;
  position: absolute;
  bottom: 6.3%;
  left: 9%;
  opacity: 0.6;
  font-family: sans-serif;

  @media screen and (max-width: 600px) {
    font-size: 2.5vw;
  }
`

function Indicators(props) {
  const { knobRange } = props

  const indicators = []
  for (let i = 0; i < knobRange; i += 1) {
    const angle = (i / knobRange) * 2 * Math.PI
    const x = 50 * Math.sin(angle) + 50
    const y = -1 * (50 * Math.cos(angle) + 50)
    indicators.push([x, y])
  }

  return indicators.map(coords => (
    <Indicator key={`${coords[0]}-${coords[1]}`} x={coords[0]} y={coords[1]} />
  ))
}

export default function Knob(props) {
  const { knobRange, knobValue, turnKnob } = props

  return (
    <>
      <Container>
        <Indicators {...props} />
        <KnobButton onClick={turnKnob} rot={(knobValue / knobRange) * 360} />
      </Container>
      <Text>CHANNEL</Text>
    </>
  )
}
