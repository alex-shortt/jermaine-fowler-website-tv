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

  @media screen and (max-width: 600px) {
    height: 22%;
  }
`

const Links = styled.div`
  width: 90%;
  max-width: 250px;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
`

const Link = styled(LinkBase)`
  font-size: 1.5rem;
  color: white;
  margin: 0 0.5rem;
  line-height: 1.3em;
  padding: 2px 4px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.5em;
  }
`

export default function Main(props) {
  return (
    <Container>
      <Logo />
      <Links>
        <Link to="media">Media</Link>
        <Link to="interviews">Interviews</Link>
        <Link to="news">News</Link>
        <Link to="tour">Tour</Link>
      </Links>
    </Container>
  )
}
