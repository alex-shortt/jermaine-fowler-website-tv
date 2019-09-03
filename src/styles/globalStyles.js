import { createGlobalStyle } from "styled-components/macro"
import "typeface-roboto"
import "normalize.css"
import "rc-menu/assets/index.css"

import "./fontawesome"

export default createGlobalStyle`
  body {
    text: white;
    font-family: Avenir, Lato, Roboto, sans-serif;
    overflow: auto;
    overflow-x: hidden;
  }
`
