import React from "react"
import styled from "styled-components/macro"

import powerImg from "assets/television/power.png"

const Button = styled.button`
  z-index: 1;
  position: absolute;
  bottom: 7%;
  right: 20%;
  height: 26px;
  width: 26px;
  border: none;
  cursor: pointer;
  border-radius: 1px;
  background-image: linear-gradient(
    0deg,
    rgb(29, 29, 41) 0%,
    rgb(35, 35, 50) 100%
  );
  box-shadow: 0px 3px 0px rgb(8, 8, 24), 0px 3px 15px rgba(0, 0, 0, 0.4),
    inset 0px 1px 0px rgba(255, 255, 255, 0.1),
    inset 0px 0px 7px rgba(255, 255, 255, 0.15);

  outline: none;

  @media screen and (max-width: 800px) {
    bottom: 4vw;
    height: 6vw;
    width: 6vw;
  }

  &:active {
    background-image: linear-gradient(
      0deg,
      rgb(35, 35, 50) 0%,
      rgb(29, 29, 41) 100%
    );
    box-shadow: 0px 1.5px 0px rgb(8, 8, 24), 0px 2px 7px rgba(0, 0, 0, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.1),
      inset 0px 0px 7px rgba(255, 255, 255, 0.15);
  }
`

const Image = styled.img.attrs({ src: powerImg })`
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  opacity: 0.5;
  margin: 20%;
`

export default function PowerButton(props) {
  return (
    <Button {...props}>
      <Image />
    </Button>
  )
}
