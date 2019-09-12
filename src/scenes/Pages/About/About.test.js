import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import About from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<About />).toJSON()

  expect(tree).toMatchSnapshot()
})
