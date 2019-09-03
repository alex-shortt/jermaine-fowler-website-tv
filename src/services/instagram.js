export async function usernameSearch(input) {
  const response = await fetch(
    `https://www.instagram.com/web/search/topsearch/?query=${encodeURIComponent(
      input
    )}`,
    { method: "GET" }
  )

  if (!response.ok) {
    return null
  }

  const result = await response.json()

  const { users } = result
  if (!users) {
    return []
  }

  const accounts = users.map(user => user.user)
  return accounts
}
