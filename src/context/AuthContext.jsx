import { createContext, useContext, useEffect, useState } from 'react'
import apiClient from '../hooks/useApiClient'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await apiClient.get('https://vibevault-backend.vercel.app/api/session')
        setUser(data.user)
      } catch (error) {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSession()
  }, [])

  const value = {
    user,
    setUser,
    isAuthenticated: Boolean(user),
    isLoading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
