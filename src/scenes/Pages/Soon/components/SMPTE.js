import React from "react"
import styled, { css } from "styled-components/macro"

const CB = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Row = css`
  display: flex;
  flex-flow: row;

  & > div {
    -webkit-flex: 1;
    flex: 1;
  }
`

const A = styled.div`
  order: 1;
  flex: 10 2 auto;
  ${Row};
`
const B = styled.div`
  order: 2;
  flex: 1 1 auto;
  ${Row};
`

const C = styled.div`
  order: 3;
  flex: 3 1 auto;
  ${Row};
`
const Span4 = styled.div`
  display: flex;
  flex: 5;
  flex-flow: row;

  div {
    flex: 1;
  }
`

const Triple = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }
`

const Color = styled.div`
  background-color: ${props => props.color};
`

export default function SMPTE(props) {
  return (
    <CB>
      <A>
        <Color color="#c0c0c0" />
        <Color color="#c0c004" />
        <Color color="#3fc0c0" />
        <Color color="#35c000" />
        <Color color="#c002c0" />
        <Color color="#c00000" />
        <Color color="#1e00c0" />
      </A>
      <B>
        <Color color="#1e00c0" />
        <Color color="#151213" />
        <Color color="#c002c0" />
        <Color color="#151213" />
        <Color color="#3fc0c0" />
        <Color color="#151213" />
        <Color color="#c0c0c0" />
      </B>
      <C>
        <Span4>
          <Color color="#0d1f4c" />
          <Color color="#fff" />
          <Color color="#31016a" />
          <Color color="#151213" />
        </Span4>
        <Triple>
          <Color color="#040b0a" />
          <Color color="#1d1d1d" />
          <Color color="#222" />
        </Triple>
        <Color color="#151213" />
      </C>
    </CB>
  )
}
