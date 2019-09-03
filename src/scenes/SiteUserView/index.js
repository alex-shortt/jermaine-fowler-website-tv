import React from "react"
import styled from "styled-components/macro"
import { Redirect, Route, Switch } from "react-router-dom"

const View = React.lazy(() => import("scenes/View"))

const Content = styled.div`
  margin-top: 64px;
  min-height: calc(100vh - 64px - 120px);
`

export default function SiteUserView() {
  return (
      <Content>
        <Switch>
          <Route exact path="/" component={View} />
          <Redirect to="/" />
        </Switch>
      </Content>
  )
}
