import { useGameState, useGameDispatch, clearSavedGame } from '../../hooks/useGameState'
import { useNavigate } from 'react-router-dom'

export default function GameOver() {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const navigate = useNavigate()

  const handleRestart = () => {
    clearSavedGame()
    dispatch({ type: 'RESET' })
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gauge-low/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center animate-fade-in max-w-md relative z-10">
        <div className="w-20 h-20 rounded-full bg-gauge-low/15 flex items-center justify-center text-3xl mx-auto mb-6 border-2 border-gauge-low/20">
          !
        </div>
        <h1 className="text-4xl font-extrabold text-gauge-low mb-3">해고</h1>
        <p className="text-lg text-text-secondary mb-2">
          Chapter {state.currentChapter}에서 해고되었습니다.
        </p>

        <div className="bg-bg-card/60 rounded-xl border border-white/8 p-5 mb-8 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-bold text-tab-blue">박서연</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <p className="text-text-secondary text-sm leading-relaxed italic">
            "아쉽지만... 이 정도 실력으로는 프로젝트를 맡기기 어렵겠어요."
          </p>
        </div>

        <button
          onClick={handleRestart}
          className="px-8 py-4 bg-accent hover:bg-accent-glow text-white rounded-xl text-lg font-bold transition-all hover:scale-[1.03] cursor-pointer shadow-lg shadow-accent/20"
        >
          다시 도전하기
        </button>
      </div>
    </div>
  )
}
