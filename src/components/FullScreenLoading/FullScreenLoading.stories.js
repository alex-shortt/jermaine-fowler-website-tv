import React from "react"
import { storiesOf } from "@storybook/react"

import FullScreenLoading from "./index"

storiesOf("Fallback Loading Screen", module).add("Component", () => (
  <FullScreenLoading />
))
