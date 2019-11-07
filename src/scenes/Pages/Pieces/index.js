import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

import Piece from "./components/Piece"
import pieces, { getPieceBySlug } from "./assets/pieces"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`

const Menu = styled.div`
  background: black;
  text-align: center;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
`

const Title = styled.h4`
  margin: 0;
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Item = styled.div`
  background: white;
  color: black;
  font-family: monospace;
  width: 90%;
  max-width: 400px;
  margin: 10px auto;
  padding: 0.5rem;
  box-sizing: border-box;
`

function PieceItem(props) {
  const { piece } = props
  const { title, slug } = piece

  return (
    <Link to={`/pieces/${slug}`}>
      <Item>{title}</Item>
    </Link>
  )
}

export default function Pieces(props) {
  const pieceSlug = window.location.pathname.split("/")[2]
  const piece = getPieceBySlug(pieceSlug)

  if (piece) {
    const { title } = piece

    return (
      <Container>
        <Menu>
          <Title>{title}</Title>
          <Link to="/pieces">Return</Link>
        </Menu>
        <Content>
          <Piece piece={piece} />
        </Content>
      </Container>
    )
  }

  return (
    <Container>
      <Menu>
        <Title>Pieces</Title>
        <Link to="">Home</Link>
      </Menu>
      <Content>
        {pieces.map(pic => (
          <PieceItem piece={pic} />
        ))}
      </Content>
    </Container>
  )
}
