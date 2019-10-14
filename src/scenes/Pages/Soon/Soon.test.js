import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Soon from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Soon />).toJSON()

  expect(tree).toMatchSnapshot()
})
