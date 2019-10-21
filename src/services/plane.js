import React from "react"
import uuid from "uuid/v4"
import Chance from "chance"

import Television from "../components/Television"

const chance = new Chance()

export function renderPlane(plane) {
  function renderItem(item) {
    const { hidden, content: Content, ...itemProps } = item

    return (
      <Television className="television" {...itemProps}>
        {Content && <Content />}
      </Television>
    )
  }

  return plane.map(row => {
    const id = getRowId(row)
    return (
      <React.Fragment key={id}>
        {row.map(item => renderItem(item))}
      </React.Fragment>
    )
  })
}

export function buildPlane(pages, dimensions) {
  const plane = []

  for (let x = 0; x < dimensions[0]; x += 1) {
    for (let y = 0; y < dimensions[1]; y += 1) {
      if (!plane[x]) {
        plane[x] = []
      }

      const fixedPage = pages.find(
        page => page.coords[0] === x && page.coords[1] === y
      )

      if (fixedPage) {
        plane[x][y] = { ...fixedPage, initOn: "true" }
      } else {
        plane[x][y] = pickRandomPage()
      }

      plane[x][y].id = uuid()
    }
  }

  return plane
}

const pageNormal = {}
const pageStatic = { broken: true, initOn: "true" }
const pageSurveillance = { surveillance: true, initOn: "true" }

function pickRandomPage() {
  const pages = [pageNormal, pageStatic, pageSurveillance]
  const weights = [6, 1.8, 2]

  const page = chance.weighted(pages, weights)

  return { ...page }
}

export function getPagePosition(plane, page = "") {
  for (let x = 0; x < plane.length; x += 1) {
    for (let y = 0; y < plane[x].length; y += 1) {
      const { path } = plane[x][y]
      const isArray = path && typeof path === "object"
      if (isArray ? path.includes(page) : path === page) {
        return [x, y]
      }
    }
  }

  return null
}

export function getRowId(row) {
  let id = ""
  for (const item of row) {
    id += item.id
  }
  return id
}
