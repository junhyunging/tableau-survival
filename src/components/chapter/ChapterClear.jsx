import { useGameState, useGameDispatch, getLevelTitle, getXPForLevel, getXPForNextLevel, getAffectionStage, getAffectionLabel } from '../../hooks/useGameState'
import { getChapter } from '../../data/chapters/index'
import { getPartnerCharacter, getCharacterName } from '../../data/characters'

export default function ChapterClear() {
  const state = useGameState()
  const dispatch = useGameDispatch()

  const chapter = getChapter(state.currentChapter)
  const stars = state.chapterStars[state.currentChapter] || 1
  const levelTitle = getLevelTitle(state.level)
  const currentLevelXP = getXPForLevel(state.level)
  const nextLevelXP = getXPForNextLevel(state.level)
  const xpProgress = nextLevelXP > currentLevelXP
    ? ((state.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100
    : 100

  const partnerId = getPartnerCharacter(state.playerGender)
  const partnerName = getCharacterName(partnerId)
  const affectionStage = getAffectionStage(state.affection)
  const affectionLabel = getAffectionLabel(affectionStage)

  const accuracy = state.chapterTotal > 0
    ? Math.round((state.chapterCorrect / state.chapterTotal) * 100)
    : 0

  const handleNext = () => {
    dispatch({ type: 'NEXT_CHAPTER' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-tab-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center animate-fade-in max-w-md w-full relative z-10">
        {/* Stars */}
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`text-3xl transition-all duration-300 ${
                i <= stars ? 'text-yellow-400 scale-100' : 'text-white/10 scale-90'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {i <= stars ? '\u2605' : '\u2606'}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold mb-1 text-text-primary">
          Chapter {state.currentChapter} Clear!
        </h1>
        <p className="text-text-secondary mb-6">
          {chapter?.title || ''}
        </p>

        {/* Stats card */}
        <div className="bg-bg-card/60 rounded-2xl border border-white/8 p-5 mb-6 text-left">
          {/* Level & XP */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-accent">Lv.{state.level}</span>
              <span className="text-sm text-text-secondary">{levelTitle}</span>
            </div>
            <span className="text-xs text-text-dim">XP {state.xp}/{nextLevelXP}</span>
          </div>
          <div className="h-2 bg-bg-primary rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-accent to-tab-purple rounded-full transition-all duration-700"
              style={{ width: `${Math.min(100, xpProgress)}%` }}
            />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-tab-green">{state.chapterCorrect}</div>
              <div className="text-[10px] text-text-dim">정답</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-text-primary">{accuracy}%</div>
              <div className="text-[10px] text-text-dim">정확도</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-pink-400">{state.affection}</div>
              <div className="text-[10px] text-text-dim">{partnerName} {affectionLabel}</div>
            </div>
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="w-full py-4 bg-accent hover:bg-accent-glow text-white rounded-xl text-lg font-bold transition-all hover:scale-[1.02] cursor-pointer shadow-lg shadow-accent/20"
        >
          {state.currentChapter >= 20 ? '결과 보기' : '다음 챕터로 이동'}
        </button>
      </div>
    </div>
  )
}
