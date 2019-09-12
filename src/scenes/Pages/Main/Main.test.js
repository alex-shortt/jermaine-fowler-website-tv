import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Main from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Main />).toJSON()

  expect(tree).toMatchSnapshot()
})
