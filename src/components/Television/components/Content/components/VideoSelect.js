import React from "react"
import styled from "styled-components/macro"

const Container = styled.iframe`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const videos = [
  "https://drive.google.com/file/d/1k3jt5omUSJ3nOZF79_Hreu5AbhOdLXRQ/preview",
  "https://drive.google.com/file/d/1k3jt5omUSJ3nOZF79_Hreu5AbhOdLXRQ/preview",
  "https://drive.google.com/file/d/1JYiRw7ARNkLp4e-LmuW-5_TIIlmvQxFK/preview",
  "https://drive.google.com/file/d/1Syj5tOyjYLXhLyFzc1f6zqd3c1XMHl74/preview",
  "https://drive.google.com/file/d/124aqH7iM91soqjvAJMzkjikWplaJm5Ct/preview"
]

export default function VideoSelect(props) {
  const { knobValue } = props

  return <Container src={videos[knobValue - 1]} />
}
