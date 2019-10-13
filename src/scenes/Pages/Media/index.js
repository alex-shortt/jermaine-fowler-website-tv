import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

const Container = styled.div`
  padding: 15px;
  text-align: center;

  & > img {
    margin: 20px 0;
    width: 80%;
  }
`

export default function Media(props) {
  return (
    <Container>
      <img src="https://i.kinja-img.com/gawker-media/image/upload/s--fr1yz2bU--/c_scale,f_auto,fl_progressive,q_80,w_800/fu6j2fudczk5u5n6xarn.jpg" />
      <img src="https://s.abcnews.com/images/GMA/180705_gma_digital_jermaine_hpMain_16x9_992.jpg" />
      <br />
      <br />
      <Link to="">Go Back Home</Link>
    </Container>
  )
}
