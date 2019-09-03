import { fetchWithBody } from "services/backend"

export async function getTeamList(data) {
  return fetchWithBody("team/list", {
    body: data
  })
}

export async function createTeam(data) {
  return fetchWithBody("team/create", {
    body: data
  })
}

export async function getTeam(data) {
  return fetchWithBody("team/get", {
    body: data
  })
}

export async function addToTeam(data) {
  return fetchWithBody("team/add", {
    body: data
  })
}

export async function removeFromTeam(data) {
  return fetchWithBody("team/remove", {
    body: data
  })
}
