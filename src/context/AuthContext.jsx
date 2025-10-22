import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import apiClient from '../hooks/useApiClient'

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await apiClient.get('/api/session')
        setUser(data.user)
      } catch (error) {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSession()
  }, [])

  const value = useMemo(
    () => ({
      user,
      setUser,
      isAuthenticated: Boolean(user),
      isLoading
    }),
    [user, isLoading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
