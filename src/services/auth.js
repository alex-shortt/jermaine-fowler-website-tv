import React, { useCallback, useContext, useState } from "react"
import jwtDecode from "jwt-decode"

import { fetchWithBody } from "services/backend"
import Mixpanel from "services/mixpanel"
import GA from "services/ga"
import { useAsyncEffect } from "services/hooks"

export const AuthContext = React.createContext()

export function AuthProvider(props) {
  const { children } = props

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [user, setUser] = useState(null)
  const [invalidateUserTime, setInvalidateUserTime] = useState(new Date())

  const login = useCallback(async t => {
    setToken(t)
    if (t) {
      localStorage.setItem("token", t)
    } else {
      localStorage.removeItem("token")
    }
  }, [])

  const logout = useCallback(() => {
    login(undefined)
  }, [login])

  const invalidateUser = useCallback(() => {
    setInvalidateUserTime(new Date())
  }, [])

  useAsyncEffect(
    function* fn() {
      const response = yield fetchWithBody("user/authenticated/get", {
        body: { token }
      })

      const result = yield response.json()

      if (!response.ok) {
        const message = "Error getting authenticated user..."
        console.error(result.message ? result.message : message)

        if (response.status === 401) {
          logout()
          setUser(undefined)
        }

        return
      }

      GA.set({
        email: result.user.email,
        username: result.user.username
      })
      Mixpanel.identify(result.user.username)
      Mixpanel.people.set({
        $email: result.user.email,
        username: result.user.username
      })
      setUser(result.user)
    },
    [token, invalidateUserTime]
  )

  const providerValue = {
    token,
    isAuthenticated: !!token,
    login,
    logout,
    user,
    invalidateUser
  }

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthInfo() {
  const { token } = useContext(AuthContext)

  if (!token) {
    return { isAuthenticated: false }
  }

  let authInfo
  try {
    authInfo = jwtDecode(token)
  } catch (e) {
    return { isAuthenticated: false }
  }

  authInfo.isAuthenticated = true

  return authInfo
}

export function isPermitted(user, groups) {
  if (typeof groups === "string") {
    // eslint-disable-next-line no-param-reassign
    groups = [groups]
  }

  const userGroups = []

  if (user.type) {
    userGroups.push(user.type)
  }

  if (user.admin) {
    userGroups.push("admin")
  }

  return !groups ? true : userGroups.some(g => groups.includes(g))
}

const { REACT_APP_AUTH_CLIENT } = process.env
export const loginUrl = `https://accounts.metaplug.io/login?response_type=token&client_id=${REACT_APP_AUTH_CLIENT}&redirect_uri=${window.location.origin}/app/login`
export const signupUrl = `https://accounts.metaplug.io/signup?response_type=token&client_id=${REACT_APP_AUTH_CLIENT}&redirect_uri=${window.location.origin}/app/login`
export const logoutUrl = `https://accounts.metaplug.io/logout?client_id=${REACT_APP_AUTH_CLIENT}&logout_uri=${window.location.origin}/app/logout`
