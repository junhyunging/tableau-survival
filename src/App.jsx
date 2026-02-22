import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, useAuth } from './hooks/useAuth'
import { GameProvider } from './hooks/useGameState'
import LoginPage from './components/auth/LoginPage'
import GameStart from './components/common/GameStart'
import GamePlay from './pages/GamePlay'

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="text-white/40 text-sm">로딩 중...</div>
      </div>
    )
  }

  if (!user) {
    return <LoginPage />
  }

  return (
    <GameProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<GameStart />} />
          <Route path="/play" element={<GamePlay />} />
        </Routes>
      </HashRouter>
    </GameProvider>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
