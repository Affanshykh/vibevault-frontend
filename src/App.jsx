import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { useAuth } from './context/AuthContext'

const App = () => {
  const { isAuthenticated, isLoading } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/dashboard"
        element={
          isLoading ? (
            <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
              <p className="text-lg text-slate-400">Loading your vault...</p>
            </div>
          ) : isAuthenticated ? (
            <Dashboard />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
