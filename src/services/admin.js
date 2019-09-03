import { fetchWithBody } from "services/backend"

export async function getScansList(data) {
  return fetchWithBody("admin/scans/list", {
    body: data
  })
}

export async function submitScan(data) {
  return fetchWithBody("admin/scans/submit", {
    body: data
  })
}
