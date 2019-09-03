import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Television from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Television />).toJSON()

  expect(tree).toMatchSnapshot()
})
