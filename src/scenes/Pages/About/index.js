import React from "react"
import { Link } from "react-router-dom"

import Helmet from "components/Helmet"

export default function About(props) {
  return (
    <>
      <Helmet title="About" />
      this is some text <br />
      helloooooooo
      <br />
      <Link to="">hooooooome</Link>
    </>
  )
}