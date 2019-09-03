import { fetchWithBody } from "services/backend"

export async function getScannedAccounts() {
  return fetchWithBody("data/scannedaccounts/get", { body: null })
}
