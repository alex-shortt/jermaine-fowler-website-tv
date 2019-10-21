import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import useReactRouter from "use-react-router"
import styled from "styled-components/macro"

import GlobalStyles from "styles/globalStyles"
import FullScreenLoading from "components/FullScreenLoading"
import ScrollToTop from "components/ScrollToTop"
import GA from "services/ga"

const Viewport = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const View = React.lazy(() => import("scenes/View"))

const GoogleAnalytics = () => {
  const { location } = useReactRouter()
  useEffect(() => GA.pageview(location.pathname), [location])
  return <> </>
}

export default function App() {
  return (
    <>
      <GlobalStyles />
      <React.Suspense fallback={<FullScreenLoading />}>
        <Router>
          <GoogleAnalytics />
          <Viewport>
            <ScrollToTop>
              <Switch>
                <Route path={["/:page", "/"]} component={View} />
                {/* TODO: 404 Page */}
              </Switch>
            </ScrollToTop>
          </Viewport>
        </Router>
      </React.Suspense>
    </>
  )
}
