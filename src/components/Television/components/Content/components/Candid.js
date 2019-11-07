import React, { useRef } from "react"
import styled from "styled-components/macro"

import img1 from "assets/candids/1.jpg"
import img2 from "assets/candids/2.jpg"
import img3 from "assets/candids/3.jpg"
import img4 from "assets/candids/4.jpg"
import img5 from "assets/candids/5.jpg"
import img6 from "assets/candids/6.jpg"
import img7 from "assets/candids/7.jpg"

const images = [img1, img2, img3, img4, img5, img6, img7]

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`

export default function Candid(props) {
  const imageNum = useRef(Math.floor(Math.random() * images.length))

  return (
    <Container>
      <Image src={images[imageNum.current]} />
    </Container>
  )
}
