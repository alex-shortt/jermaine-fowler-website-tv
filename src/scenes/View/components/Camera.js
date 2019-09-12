import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  transition: all ${props => props.timing}s ease-in-out;
`

function getItemSideLength() {
  const element = document.getElementsByClassName("television")[0]

  const style = element.currentStyle || window.getComputedStyle(element)
  const width = element.offsetWidth
  const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
  const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
  const border =
    parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)

  return width + margin - padding + border
}

export default function Camera(props) {
  const { position, children } = props

  const [animTiming, setAnimTiming] = useState(1)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    function fixPosition() {
      const sideLength = getItemSideLength()

      const midXPos = sideLength * 0.5 + sideLength * position[0]
      const x = -midXPos + window.innerWidth / 2

      const midYPos = sideLength * 0.5 + sideLength * position[1]
      const y = -midYPos + window.innerHeight / 2

      const velocity = 800 // wtf is this unit
      const xDist = Math.abs(posX - x)
      const yDist = Math.abs(posY - y)
      const linearDist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))

      setAnimTiming(linearDist / velocity)
      setPosX(x)
      setPosY(y)
    }

    fixPosition()

    window.onresize = fixPosition
  }, [posX, posY, position])

  return (
    <Container x={posX} y={posY} timing={animTiming}>
      {children}
    </Container>
  )
}
