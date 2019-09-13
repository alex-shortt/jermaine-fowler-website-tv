import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"

import { getPagePosition } from "services/plane"

const Container = styled.div`
  position: absolute;
  display: flex;
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
  const { page, plane, children } = props

  const [animTiming, setAnimTiming] = useState(1)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    const fixPosition = () => {
      const newCoords = getPagePosition(plane, page) || [1, 1]

      const sideLength = getItemSideLength()

      const midXPos = sideLength * 0.5 + sideLength * newCoords[0]
      const x = -midXPos + window.innerWidth / 2

      const midYPos = sideLength * 0.5 + sideLength * newCoords[1]
      const y = -midYPos + window.innerHeight / 2

      const velocity = 450 // wtf is this unit
      const xDist = Math.abs(posX - x)
      const yDist = Math.abs(posY - y)
      const linearDist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))

      setAnimTiming(linearDist / velocity)
      setPosX(x)
      setPosY(y)
    }

    fixPosition()

    window.onresize = fixPosition
  }, [page, plane, posX, posY])

  return (
    <Container x={posX} y={posY} timing={animTiming}>
      {children}
    </Container>
  )
}
