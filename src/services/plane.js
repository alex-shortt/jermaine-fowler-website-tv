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
        console.log("fixed", fixedPage)
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
const pageBroken = { broken: true }

function pickRandomPage() {
  const pages = [pageNone, pageNormal, pageBroken]
  const weights = [1, 3, 1]

  return { ...chance.weighted(pages, weights) }
}

export function getPagePosition(plane, page = "") {
  for (let x = 0; x < plane.length; x += 1) {
    for (let y = 0; y < plane[x].length; y += 1) {
      if (plane[x][y].path === page) {
        return [x, y]
      }
    }
  }

  return null
}
