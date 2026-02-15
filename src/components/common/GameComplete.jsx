import { useGameState, useGameDispatch, clearSavedGame, getLevelTitle, getAffectionStage, getAffectionLabel } from '../../hooks/useGameState'
import { useNavigate } from 'react-router-dom'
import { getPartnerCharacter, getCharacterName, getCharacterImage } from '../../data/characters'

const GRADE_COLORS = {
  S: { text: 'text-yellow-400', bg: 'bg-yellow-400/15', border: 'border-yellow-400/30' },
  A: { text: 'text-gauge-high', bg: 'bg-gauge-high/15', border: 'border-gauge-high/30' },
  B: { text: 'text-gauge-mid', bg: 'bg-gauge-mid/15', border: 'border-gauge-mid/30' },
  C: { text: 'text-text-secondary', bg: 'bg-text-secondary/15', border: 'border-text-secondary/30' },
}

export default function GameComplete() {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const navigate = useNavigate()

  const partnerId = getPartnerCharacter(state.playerGender)
  const partnerName = getCharacterName(partnerId)
  const affectionStage = getAffectionStage(state.affection)
  const affectionLabel = getAffectionLabel(affectionStage)

  const accuracy = (state.correctCount + state.incorrectCount) > 0
    ? Math.round((state.correctCount / (state.correctCount + state.incorrectCount)) * 100)
    : 0

  const getEnding = () => {
    if (state.level >= 9 && state.affection >= 80) {
      return {
        title: '태블로 마스터 & 해피엔딩',
        grade: 'S',
        message: `"${state.playerName}님, 정말 대단해요. 당신과 함께 일할 수 있어서 행복했어요."`,
        speaker: partnerName,
      }
    }
    if (state.level >= 7) {
      return {
        title: '시니어 분석가 달성!',
        grade: 'A',
        message: `"${state.playerName}님, 수고했어요. 앞으로가 기대됩니다."`,
        speaker: '박서연',
      }
    }
    if (state.level >= 4) {
      return {
        title: '분석가의 길',
        grade: 'B',
        message: `"아직 갈 길이 멀지만, 충분히 성장했어요."`,
        speaker: '박서연',
      }
    }
    return {
      title: '수습 통과',
      grade: 'C',
      message: `"조금 더 노력하면 좋은 분석가가 될 거예요."`,
      speaker: '박서연',
    }
  }

  const ending = getEnding()
  const colors = GRADE_COLORS[ending.grade]

  const handleRestart = () => {
    clearSavedGame()
    dispatch({ type: 'RESET' })
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ${colors.bg} rounded-full blur-3xl`} />
      </div>

      <div className="text-center animate-fade-in max-w-lg relative z-10">
        {/* Grade badge */}
        <div className={`w-20 h-20 rounded-full ${colors.bg} flex items-center justify-center mx-auto mb-5 border-2 ${colors.border}`}>
          <span className={`text-3xl font-black ${colors.text}`}>{ending.grade}</span>
        </div>

        <h1 className="text-4xl font-extrabold mb-2">{ending.title}</h1>

        <div className="inline-flex items-center gap-3 px-5 py-2 bg-bg-card/60 rounded-full mb-6 border border-white/8">
          <span className="text-sm font-bold text-accent">Lv.{state.level}</span>
          <div className="w-px h-4 bg-white/10" />
          <span className="text-sm text-text-secondary">{getLevelTitle(state.level)}</span>
          <div className="w-px h-4 bg-white/10" />
          <span className="text-sm text-pink-400">{partnerName} {affectionLabel}</span>
        </div>

        {/* Quote */}
        <div className="bg-bg-card/60 rounded-xl border border-white/8 p-6 mb-6 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-sm font-bold ${colors.text}`}>{ending.speaker}</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <p className="text-[15px] text-text-primary mb-3 leading-relaxed italic">{ending.message}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-bg-card/40 rounded-lg p-3 border border-white/5">
            <div className="text-xl font-bold text-tab-green">{state.correctCount}</div>
            <div className="text-[10px] text-text-dim">총 정답</div>
          </div>
          <div className="bg-bg-card/40 rounded-lg p-3 border border-white/5">
            <div className="text-xl font-bold text-text-primary">{accuracy}%</div>
            <div className="text-[10px] text-text-dim">정확도</div>
          </div>
          <div className="bg-bg-card/40 rounded-lg p-3 border border-white/5">
            <div className="text-xl font-bold text-accent">XP {state.xp}</div>
            <div className="text-[10px] text-text-dim">총 경험치</div>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="px-8 py-4 bg-accent hover:bg-accent-glow text-white rounded-xl text-lg font-bold transition-all hover:scale-[1.03] cursor-pointer shadow-lg shadow-accent/20"
        >
          처음부터 다시 하기
        </button>
      </div>
    </div>
  )
}
