import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"

export default function Helmet(props) {
  const { title = "Metaplug", children } = props

  const pitch =
    "Metaplug curates and manages Digital Street Teams | Build Digital Street Teams using Micro Influencers"

  return (
    <ReactHelmet>
      <title>
        {title} | {pitch}
      </title>
      {children}
    </ReactHelmet>
  )
}
