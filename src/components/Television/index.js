import React, { useState, useCallback } from "react"
import styled from "styled-components/macro"

import Brightness from "./components/Brightness"
import Monitor from "./components/Monitor"
import Display from "./components/Display"

const Container = styled.div`
  position: relative;
  width: 36rem;
  height: 36rem;
  margin: 7rem;
  ${props => props.hidden && "opacity: 0; display: block;"}
`

export default function Television(props) {
  const { children, hidden, ...restProps } = props

  const [on, setOn] = useState(true)

  const toggleOn = useCallback(() => setOn(!on), [on])

  return (
    <Container hidden={hidden} {...restProps}>
      <Brightness on={on} />
      <Monitor onClick={toggleOn} />
      <Display on={on}>{children}</Display>
    </Container>
  )
}
