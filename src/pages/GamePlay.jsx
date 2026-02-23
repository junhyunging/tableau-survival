import { useGameState, getLevelTitle, getXPForLevel, getXPForNextLevel, getAffectionStage } from '../hooks/useGameState'
import { getChapter } from '../data/chapters/index'
import { getPartnerCharacter, getCharacterName } from '../data/characters'
import CharacterSetup from '../components/common/CharacterSetup'
import ChapterFlow from '../components/chapter/ChapterFlow'
import ChapterSelect from '../components/chapter/ChapterSelect'
import ChapterClear from '../components/chapter/ChapterClear'
import GameOver from '../components/common/GameOver'
import GameComplete from '../components/common/GameComplete'

export default function GamePlay() {
  const state = useGameState()

  if (state.isHydrating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="text-white/40 text-sm">세이브 불러오는 중...</div>
      </div>
    )
  }

  // Title phase → redirect to home (handled by App routes)
  if (state.phase === 'title') {
    return <CharacterSetup />
  }

  if (state.phase === 'setup') {
    return <CharacterSetup />
  }

  if (state.phase === 'chapter_select') {
    return <ChapterSelect />
  }

  if (state.phase === 'game_over') {
    return <GameOver />
  }

  if (state.phase === 'game_complete') {
    return <GameComplete />
  }

  if (state.phase === 'chapter_clear') {
    return <ChapterClear />
  }

  if (state.phase === 'playing') {
    const chapter = getChapter(state.currentChapter)
    const chapterTitle = chapter?.title || `Chapter ${state.currentChapter}`
    const levelTitle = getLevelTitle(state.level)
    const currentLevelXP = getXPForLevel(state.level)
    const nextLevelXP = getXPForNextLevel(state.level)
    const xpProgress = nextLevelXP > currentLevelXP
      ? ((state.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100
      : 100
    const partnerId = getPartnerCharacter(state.playerGender)
    const partnerName = getCharacterName(partnerId)
    const affectionStage = getAffectionStage(state.affection)

    // VN phases render fullscreen (no header)
    const vnPhases = ['opening', 'briefing', 'clear', 'event']
    const isBossIntroPhase = state.chapterPhase === 'boss' && !state.bossIntroShown && Boolean(chapter?.bossIntro)
    const isVNPhase = vnPhases.includes(state.chapterPhase) || isBossIntroPhase

    if (isVNPhase) {
      return <ChapterFlow />
    }

    return (
      <div className="min-h-screen bg-bg-primary flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-bg-secondary/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10">
          <div className="mx-auto w-full max-w-6xl px-6 py-3">
            {/* Top row */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] px-2.5 py-1 bg-accent/20 text-accent rounded-md font-bold">
                  Ch.{state.currentChapter}
                </span>
                <span className="text-[14px] text-text-secondary font-semibold truncate max-w-[180px]">
                  {chapterTitle}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] px-2.5 py-1 bg-blue-500/15 text-blue-400 rounded-md font-medium">
                  Lv.{state.level} {levelTitle}
                </span>
                <span className="text-[13px] px-2.5 py-1 bg-pink-500/15 text-pink-400 rounded-md font-medium">
                  {affectionStage >= 4 ? '\u2665' : '\u2661'} {partnerName} {state.affection}
                </span>
              </div>
            </div>
            {/* XP bar */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 bg-emerald-500/15 text-emerald-400 rounded font-bold">XP</span>
              <div className="flex-1 h-3 bg-bg-card rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-accent rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, xpProgress)}%` }}
                />
              </div>
              <span className="text-[12px] text-text-secondary font-medium w-24 text-right">
                {state.xp}/{nextLevelXP}
              </span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col justify-center pt-4 pb-6">
          <div className="w-full max-w-6xl mx-auto px-6">
            <ChapterFlow />
          </div>
        </main>
      </div>
    )
  }

  return null
}
