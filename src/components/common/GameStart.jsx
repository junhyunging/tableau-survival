import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameDispatch, hasSavedGame, getSavedGame } from '../../hooks/useGameState'
import { BACKGROUNDS } from '../../data/characters'

export default function GameStart() {
  const dispatch = useGameDispatch()
  const navigate = useNavigate()
  const savedExists = hasSavedGame()
  const saved = savedExists ? getSavedGame() : null
  const [hoveredBtn, setHoveredBtn] = useState(null)

  const handleNewGame = () => {
    dispatch({ type: 'RESET' })
    navigate('/play')
  }

  const handleContinue = () => {
    const saved = getSavedGame()
    if (saved) {
      dispatch({ type: 'LOAD_GAME', payload: saved })
      navigate('/play')
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060d1a] text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKGROUNDS.office_day})`,
          filter: 'brightness(0.3) saturate(0.7)',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-[#060d1a]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/80 via-transparent to-[#060d1a]/40" />

      {/* Accent glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-tab-green/6 blur-[100px]" />

      {/* Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-lg">

          {/* Studio label */}
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-8 bg-white/30" />
            <span className="text-[11px] font-semibold tracking-[0.35em] text-white/50 uppercase">
              Growlab Interactive
            </span>
            <div className="h-px w-8 bg-white/30" />
          </div>

          {/* Title */}
          <h1 className="relative">
            <span className="block text-6xl font-black tracking-[0.12em] leading-none md:text-8xl bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
              TABLEAU
            </span>
            <span className="block text-5xl font-black tracking-[0.25em] leading-none mt-2 md:text-7xl md:mt-3 bg-gradient-to-b from-accent via-accent to-accent/50 bg-clip-text text-transparent">
              QUEST
            </span>
          </h1>

          {/* Divider */}
          <div className="mt-8 mb-8 w-16 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          {/* Subtitle */}
          <p className="text-base leading-relaxed text-white/60 max-w-sm md:text-lg">
            실전 프로젝트로 배우는<br />태블로 스토리 RPG
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={handleNewGame}
              onMouseEnter={() => setHoveredBtn('new')}
              onMouseLeave={() => setHoveredBtn(null)}
              className="group relative overflow-hidden rounded-2xl bg-accent px-8 py-4 text-[17px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,141,240,0.35)] hover:scale-[1.03] cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">새 게임 시작</span>
            </button>

            {savedExists && (
              <button
                onClick={handleContinue}
                onMouseEnter={() => setHoveredBtn('continue')}
                onMouseLeave={() => setHoveredBtn(null)}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-[17px] font-semibold text-white/90 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-[1.03] cursor-pointer backdrop-blur-sm"
              >
                <span className="relative flex items-center justify-center gap-2">
                  이어하기
                </span>
                {saved && (
                  <span className="block mt-1.5 text-[13px] font-normal text-white/45">
                    Day {saved.currentChapter} · Lv.{saved.level}
                  </span>
                )}
              </button>
            )}
          </div>

          {/* Bottom decoration */}
          <div className="mt-16 flex items-center gap-2 text-white/25">
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        </div>
      </main>

      {/* Version */}
      <div className="absolute bottom-6 right-6 z-10">
        <span className="text-[10px] text-white/20 tracking-wider">v0.1</span>
      </div>
    </div>
  )
}
