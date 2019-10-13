import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Socials from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Socials />).toJSON()

  expect(tree).toMatchSnapshot()
})
