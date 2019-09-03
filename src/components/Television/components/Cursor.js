import React, { useCallback, useState } from "react"
import styled from "styled-components/macro"

import cursorImg from "assets/television/cursor.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const CursorImg = styled.img.attrs({ src: cursorImg })`
  width: 32px;
  position: absolute;
  pointer-events: none;
  user-select: none;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
`

export default function Cursor(props) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const onHover = useCallback(e => {
    setX(e.clientX - 38)
    setY(e.clientY - 69)
  }, [])

  return (
    <Container onMouseMove={onHover}>
      <CursorImg x={x} y={y} />
    </Container>
  )
}
