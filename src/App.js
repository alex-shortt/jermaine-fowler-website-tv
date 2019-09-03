import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import useReactRouter from "use-react-router"

import { AuthProvider } from "services/auth"
import GlobalStyles from "styles/globalStyles"
import FullScreenLoading from "components/FullScreenLoading"
import ScrollToTop from "components/ScrollToTop"
import GA from "services/ga"

const SiteUserView = React.lazy(() => import("scenes/SiteUserView"))

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
        <AuthProvider>
          <Router>
            <GoogleAnalytics />
            <ScrollToTop>
              <Switch>
                <Route path="/" component={SiteUserView} />
                {/* TODO: 404 Page */}
              </Switch>
            </ScrollToTop>
          </Router>
        </AuthProvider>
      </React.Suspense>
    </>
  )
}
