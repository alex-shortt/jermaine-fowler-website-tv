import React from "react"
import uuid from "uuid/v1"
import Chance from "chance"

const chance = new Chance()

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
        plane[x][y] = fixedPage
      } else {
        plane[x][y] = pickRandomPage()
      }

      plane[x][y].id = uuid()
    }
  }

  return plane
}

const pageNone = { hidden: true }
const pageNormal = {}
const pageStatic = { broken: true }
const pageSurveillance = { surveillance: true, initOn: "true" }

function pickRandomPage() {
  const pages = [pageNone, pageNormal, pageStatic, pageSurveillance]
  const weights = [2, 6, 2, 2]

  const page = chance.weighted(pages, weights)
  if (!page.initOn) {
    page.initOn = Math.random() > 0.85 ? "true" : "false"
  }

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
