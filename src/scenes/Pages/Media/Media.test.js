import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Media from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Media />).toJSON()

  expect(tree).toMatchSnapshot()
})
