import React from "react"
import styled from "styled-components/macro"
import { Redirect, Route, Switch } from "react-router-dom"

const View = React.lazy(() => import("scenes/View"))

const Viewport = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

export default function SiteUserView() {
  return (
    <Viewport>
      <Switch>
        <Route exact path="/" component={View} />
        <Redirect to="/" />
      </Switch>
    </Viewport>
  )
}
