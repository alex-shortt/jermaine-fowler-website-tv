import React from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 20px auto;
  font-family: monospace;
  padding: 15px 10px;
  background: white;
  color: black;
  box-sizing: border-box;

  & > h1 {
    font-size: 1.2rem;
  }

  & > h2 {
    font-size: 1rem;
  }

  & > p {
    font-size: 0.8rem;
    line-height: 1.1em;
  }
`

export default function Piece(props) {
  const { piece } = props
  const { title, distributor, text } = piece

  return (
    <Container>
      <h1>{title}</h1>
      <h2>{distributor}</h2>
      <p>{text}</p>
    </Container>
  )
}
