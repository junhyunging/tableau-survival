import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GameProvider } from './hooks/useGameState'
import GameStart from './components/common/GameStart'
import GamePlay from './pages/GamePlay'

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameStart />} />
          <Route path="/play" element={<GamePlay />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  )
}
