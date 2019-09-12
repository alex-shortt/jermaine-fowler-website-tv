import React from "react"
import uuid from "uuid/v1"
import Chance from "chance"

const chance = new Chance()

export function buildPlane(pages) {
  const plane = []
  const numPages = pages.length * 3

  for (let x = 0; x < numPages; x += 1) {
    for (let y = 0; y < numPages; y += 1) {
      if (!plane[x]) {
        plane[x] = []
      }

      const fixedPage = pages.find(
        page => page.position[0] === x && page.position[1] === y
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
const pageBroken = { broken: true }

function pickRandomPage() {
  const pages = [pageNone, pageNormal, pageBroken]
  const weights = [0.25, 0.5, 0.3]

  return { ...chance.weighted(pages, weights) }
}
