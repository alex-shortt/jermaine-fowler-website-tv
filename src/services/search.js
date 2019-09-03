import { fetchWithBody } from "services/backend"

export async function getSearchResults(data) {
  return fetchWithBody("search", {
    method: "POST",
    body: data
  })
}
