import { fetchWithBody } from "services/backend"

export async function getAccountReport(data) {
  return fetchWithBody("account/report", {
    body: data
  })
}

export async function getAccountScanCost(data) {
  return fetchWithBody("account/scancost", {
    body: data
  })
}
