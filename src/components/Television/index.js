import React, { useState, useCallback, memo } from "react"
import styled from "styled-components/macro"

import Brightness from "./components/Brightness"
import Monitor from "./components/Monitor"
import Display from "./components/Display"
import Static from "./components/Static"
import Surveillance from "./components/Surveillance"

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

function Content(props) {
  const { children, on, broken, surveillance } = props

  if (children) {
    return <>{children}</>
  }

  if (broken) {
    return <Static on={on} />
  }

  if (surveillance) {
    return <Surveillance on={on} />
  }

  return <></>
}

export default memo(props => {
  const { children, hidden, initOn, broken, id, ...restProps } = props

  const [on, setOn] = useState(hidden ? "false" : initOn === "true")

  const toggleOn = useCallback(() => setOn(!on), [on])

  return (
    <React.Fragment key={id}>
      <Brightness on={on} width={width} height={height} />
      <Container hidden={hidden} on={on} {...restProps}>
        <Monitor on={on} onClick={!hidden && toggleOn} />
        <Display on={on}>
          <Content on={on} {...props} />
        </Display>
      </Container>
    </React.Fragment>
  )
})
