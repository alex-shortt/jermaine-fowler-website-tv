import { fetchWithBody } from "services/backend"

export async function getHeatmapList(data) {
  return fetchWithBody("heatmap/list", { body: data })
}

export async function getHeatmapById(data) {
  return fetchWithBody("heatmap/get", { body: data })
}

export async function getHeatmapDetails(data) {
  return fetchWithBody("heatmap/details", { body: data })
}
