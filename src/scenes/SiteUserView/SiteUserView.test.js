import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import SiteUserView from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<SiteUserView />).toJSON()

  expect(tree).toMatchSnapshot()
})
