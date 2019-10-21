import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"

import { getPagePosition } from "services/plane"

const Container = styled.div.attrs(props => ({
  style: { transform: `translateX(${props.x}px) translateY(${props.y}px)` }
}))`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  transition: all ${props => props.timing}s ease-in-out;
`

function getItemSideDimensions() {
  const element = document.getElementsByClassName("television")[0]

  const style = element.currentStyle || window.getComputedStyle(element)
  const width = element.offsetWidth
  const height = element.offsetHeight
  const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
  const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
  const border =
    parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)

  return {
    width: width + margin - padding + border,
    height: height + margin - padding + border
  }
}

export default function Camera(props) {
  const { page, plane, children, setMoving, ...restProps } = props

  const [animTiming, setAnimTiming] = useState(1)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    const fixPosition = () => {
      const newCoords = getPagePosition(plane, page) || [1, 1]

      const { width, height } = getItemSideDimensions()

      const midXPos = width * 0.5 + width * newCoords[0]
      const x = -midXPos + window.innerWidth / 2

      const midYPos = height * 0.5 + height * newCoords[1]
      const y = -midYPos + window.innerHeight / 2

      const velocity = 2.1 // wtf is this unit
      const xDist = Math.abs(posX - x)
      const yDist = Math.abs(posY - y)
      const linearDist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
      const timing = linearDist / velocity / width

      setMoving("true")
      setAnimTiming(timing)
      setPosX(x)
      setPosY(y)

      const timeout = timing * 1000
      if (timeout !== 0) {
        setTimeout(() => setMoving("false"), timeout)
      }
    }

    fixPosition()

    window.onresize = fixPosition
  }, [page, plane, posX, posY, setMoving])

  return (
    <Container x={posX} y={posY} timing={animTiming} {...restProps}>
      {children}
    </Container>
  )
}
