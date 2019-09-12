import { createGlobalStyle } from "styled-components/macro"

import "typeface-roboto"
import "normalize.css"
import VCR from "assets/fonts/VCR_OSD_MONO_1.001.ttf"

import "./fontawesome"

export default createGlobalStyle`
  @font-face {
    font-family: "VCR";
    src: url(${VCR});
  }
  
  body {
    font-family: "VCR", Avenir, Lato, Roboto, sans-serif;
    overflow: auto;
    background: #070707;
  }
  
  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`
