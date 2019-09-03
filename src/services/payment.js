import { fetchWithBody } from "services/backend"

export async function payForScan(data) {
  return fetchWithBody("payment/scan", {
    body: data
  })
}

export async function getPricing(data) {
  return fetchWithBody("payment/pricing/get", {
    body: data
  })
}

export async function payForPlan(data) {
  return fetchWithBody("payment/plan", {
    body: data
  })
}

export async function redeemFreeScan(data) {
  return fetchWithBody("payment/freescan", {
    body: data
  })
}
