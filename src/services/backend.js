import { useState } from "react"
import useDeepCompareEffect from "use-deep-compare-effect"

export async function fetchWithBody(endpoint, params) {
  const { body, ...restParams } = params

  const payloadBody = typeof body === "string" ? body : JSON.stringify(body)

  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/${endpoint}`, {
    method: "POST",
    body: payloadBody,
    ...restParams
  })
}

export function useFetch(endpoint, params, options) {
  const { resetState } = options || {}

  const [pending, setPending] = useState(true)
  const [error, setError] = useState()
  const [result, setResult] = useState()

  useDeepCompareEffect(() => {
    ;(async () => {
      if (resetState) {
        setPending(true)
        setError(null)
        setResult(null)
      }

      const response = await endpoint(params)

      const json = await response.json()
      setResult(json)

      setError(null)
      if (!response.ok) {
        setError(response.statusText || json.message || true)
      }

      setPending(false)
    })()
  }, [endpoint, params])

  return { pending, error, result }
}
