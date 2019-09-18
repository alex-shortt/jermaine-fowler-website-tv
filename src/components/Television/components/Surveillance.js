import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4% 5%;
  box-sizing: border-box;
`

const PlayIcon = styled(FontAwesomeIcon).attrs({ icon: "play" })`
  margin-left: 10px;
  font-size: 0.8em;
`
const Text = styled.h4`
  color: gray;
  margin: 0;
`

const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default function Surveillance(props) {
  const { on } = props

  const [time, setTime] = useState()

  useEffect(() => {
    setTimeout(() => setTime(moment().format("hh:mm:ss")), 1000)
  }, [time])

  return (
    <Container>
      <Overlay>
        <TopRow>
          <Text>
            Play
            <PlayIcon />
          </Text>
          <Text>&nbsp;</Text>
        </TopRow>
        <BottomRow>
          <Text>SP</Text>
          <Text>{time}</Text>
        </BottomRow>
      </Overlay>
    </Container>
  )
}
