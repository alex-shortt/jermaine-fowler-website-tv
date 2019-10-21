import React, { useState, useCallback, memo } from "react"
import styled from "styled-components/macro"

import Brightness from "./components/Brightness"
import Monitor from "./components/Monitor"
import Display from "./components/Display"
import Content from "./components/Content"

const width = 36
const height = width * 0.9389

const Container = styled.div`
  position: relative;
  width: ${width}rem;
  height: ${height}rem;
  margin: 5px;
  filter: brightness(${props => (props.on ? "1" : "0.6")});
  ${props => props.hidden && "opacity: 0; display: block;"};
  transition: filter ${props => (props.on ? "5" : "0.7")}s ease-in;

  @media screen and (max-width: 800px) {
    width: 85vw;
    height: ${85 * 0.9389}vw;
  }
`

export default memo(props => {
  const { initOn, id } = props

  const [on, setOn] = useState(initOn === "true")

  const toggleOn = useCallback(() => setOn(!on), [on])

  const values = {
    ...props,
    width,
    height,
    on,
    setOn,
    toggleOn
  }

  return (
    <React.Fragment key={id}>
      <Brightness {...values} />
      <Container {...values}>
        <Monitor {...values} />
        <Display {...values}>
          <Content {...values} />
        </Display>
      </Container>
    </React.Fragment>
  )
})
