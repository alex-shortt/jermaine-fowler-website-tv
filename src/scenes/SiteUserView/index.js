import React from "react"
import styled from "styled-components/macro"
import { Route, Switch } from "react-router-dom"

const View = React.lazy(() => import("scenes/View"))

const Viewport = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default function SiteUserView() {
  return (
    <Viewport>
      <Switch>
        <Route path={["/:page", "/"]} component={View} />
      </Switch>
    </Viewport>
  )
}
