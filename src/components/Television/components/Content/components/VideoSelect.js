import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const IFrame = styled.iframe.attrs({ allowFullscreen: "true" })`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const TopRow = styled.div`
  padding: 0.6rem 0;
  background: black;
  text-align: center;
`

export default function VideoSelect(props) {
  const { videos, knobValue } = props

  return (
    <Container>
      <TopRow>
        <Link to="">Return To Menu</Link>
      </TopRow>
      <IFrame src={videos[knobValue - 1]} />
    </Container>
  )
}
