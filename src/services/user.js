import { fetchWithBody } from "services/backend"

export async function setAccountType(data) {
  return fetchWithBody("user/type", {
    method: "PUT",
    body: data
  })
}

export async function getScans(data) {
  return fetchWithBody("user/scans/get", {
    method: "POST",
    body: data
  })
}
