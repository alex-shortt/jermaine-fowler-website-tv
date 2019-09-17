import React, { useState, useCallback } from "react"
import styled from "styled-components/macro"

import Brightness from "./components/Brightness"
import Monitor from "./components/Monitor"
import Display from "./components/Display"
import Static from "./components/Static"

const width = 36
const height = width * 0.9389

const Container = styled.div`
  position: relative;
  width: ${width}rem;
  height: ${height}rem;
  margin: 5px;
  filter: brightness(${props => (props.on ? "1" : "0.7")});
  ${props => props.hidden && "opacity: 0; display: block;"};
  transition: filter ${props => (props.on ? "5" : "0.7")}s ease-in;
`

export default function Television(props) {
  const { children, hidden, initOn, broken, ...restProps } = props

  const [on, setOn] = useState(initOn === "true")

  const toggleOn = useCallback(() => setOn(!on), [on])

  return (
    <Container hidden={hidden} on={on} {...restProps}>
      <Brightness on={on} />
      <Monitor on={on} onClick={toggleOn} />
      <Display on={on}>{children || (broken && <Static on={on} />)}</Display>
    </Container>
  )
}
