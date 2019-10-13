import React from "react"
import styled from "styled-components"
import { Link as LinkBase } from "react-router-dom"

import logoPic from "assets/brand/logo.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.img.attrs({ src: logoPic })`
  height: 30%;
`

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const Link = styled(LinkBase)`
  font-size: 1.5rem;
  color: white;
  margin: 0 0.5rem;
`

export default function Main(props) {
  return (
    <Container>
      <Logo />
      <Links>
        <Link to="about">About</Link>
        <Link to="socials">Socials</Link>
        <Link to="media">Media</Link>
      </Links>
    </Container>
  )
}
