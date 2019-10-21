import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  padding: 1rem;
  text-align: center;
  width: 80%;
  box-sizing: border-box;

  @media screen and (max-width: 650px) {
    font-size: 0.9rem;
  }
`

export default function Overlay(props) {
  return (
    <Container>
      This content is not yet available.
      <br />
      <br />
      <Link to="">Return to Menu</Link>
    </Container>
  )
}
