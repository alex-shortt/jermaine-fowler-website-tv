import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

const Container = styled.div`
  padding: 15px;
  text-align: center;
`

export default function Socials(props) {
  return (
    <Container>
      <a href="https://instagram.com/jermainefowler">Instagram</a>
      <br />
      <br />
      <a href="https://twitter.com/jermainefowler">Twitter</a>
      <br />
      <br />
      <Link to="">Go Back Home</Link>
    </Container>
  )
}
