import React, { useRef, useState, useEffect, useCallback } from "react"
import styled, { keyframes } from "styled-components/macro"

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  );
`

const slowMoveDown = keyframes`
  0% { top: -20%; }
  100% { top: 100%; }
`

const Frame = styled.div`
  position: absolute;
  left: 0;
  top: -20%;
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: ${slowMoveDown} 12s linear infinite;
  animation-delay: ${props => props.delay}s;
`

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  opacity: 0.8;
`

export default function Static(props) {
  const { on } = props

  const canvas = useRef()
  const [running, setRunning] = useState("false")
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const update = useCallback(() => {
    if (on) {
      setRunning("true")
      const ctx = canvas.current.getContext("2d")
      const imgData = ctx.getImageData(0, 0, width, height)
      const pix = imgData.data
      for (let i = 0; i < pix.length; i += 4) {
        const color = Math.random() * 255 + 50
        pix[i] = color
        pix[i + 1] = color
        pix[i + 2] = color
      }
      ctx.putImageData(imgData, 0, 0)
      setTimeout(update, 30)
    } else {
      setRunning("false")
    }
  }, [height, on, width])

  useEffect(() => {
    if (width === 0 || height === 0) {
      const ctx = canvas.current.getContext("2d")

      const WIDTH = canvas.current.offsetWidth
      setWidth(WIDTH)
      const HEIGHT = canvas.current.offsetHeight
      setHeight(HEIGHT)

      ctx.fillStyle = "white"
      ctx.fillRect(0, 0, WIDTH, HEIGHT)
      ctx.fill()
    } else if (on && running === "false") {
      setTimeout(update, 30)
    }
  }, [height, on, running, update, width])

  return (
    <Container>
      <Overlay />
      <Canvas ref={canvas} />
      <Frame delay={0} />
      <Frame delay={4} />
      <Frame delay={8} />
    </Container>
  )
}
