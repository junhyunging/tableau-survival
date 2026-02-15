import { createContext, useContext, useReducer, useEffect } from 'react'

const GameContext = createContext(null)
const GameDispatchContext = createContext(null)

const STORAGE_KEY = 'tableau-quest-save'

const XP_TABLE = [0, 80, 200, 400, 700, 1100, 1600, 2200, 3000, 4000]
const LEVEL_TITLES = [
  '수습 분석가', '데이터 루키', '차트 메이커', '분석 전사', '인사이트 헌터',
  '데이터 마법사', '시니어 분석가', '분석 챔피언', '데이터 레전드', '태블로 마스터',
]

const initialState = {
  phase: 'title',
  // title → setup → chapter_select → playing → chapter_clear → game_over
  playerName: '',
  playerGender: 'male',
  currentChapter: 1,
  maxUnlockedChapter: 1,
  chapterPhase: 'opening',
  // opening → briefing → problems → boss → clear → event
  currentProblemIndex: 0,
  xp: 0,
  level: 1,
  affection: 30,
  solvedProblems: [],
  correctCount: 0,
  incorrectCount: 0,
  currentTitle: '수습 분석가',
  unlockedTitles: ['수습 분석가'],
  chapterStars: {},
  hintUsedThisChapter: false,
  chapterCorrect: 0,
  chapterTotal: 0,
  attemptCount: 0,
  consecutiveCorrect: 0,
  storyIndex: 0,
  bossIntroShown: false,
}

export function getLevelFromXP(xp) {
  for (let i = XP_TABLE.length - 1; i >= 0; i--) {
    if (xp >= XP_TABLE[i]) return i + 1
  }
  return 1
}

export function getXPForLevel(level) {
  return XP_TABLE[Math.min(level - 1, XP_TABLE.length - 1)]
}

export function getXPForNextLevel(level) {
  if (level >= XP_TABLE.length) return XP_TABLE[XP_TABLE.length - 1]
  return XP_TABLE[level]
}

export function getLevelTitle(level) {
  return LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)]
}

export function getAffectionStage(affection) {
  if (affection >= 81) return 5
  if (affection >= 61) return 4
  if (affection >= 41) return 3
  if (affection >= 21) return 2
  return 1
}

export function getAffectionLabel(stage) {
  const labels = ['', '동기', '친한 동기', '신뢰', '썸', '고백']
  return labels[stage] || ''
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'START_NEW_GAME':
      return {
        ...initialState,
        phase: 'chapter_select',
        playerName: action.payload.name,
        playerGender: action.payload.gender,
      }

    case 'LOAD_GAME':
      return { ...initialState, ...action.payload }

    case 'ANSWER_CORRECT': {
      const baseXP = action.payload.xpReward || 8
      const bonusXP = !state.hintUsedThisChapter ? 3 : 0
      const totalXP = baseXP + bonusXP
      const newXP = state.xp + totalXP
      const newLevel = getLevelFromXP(newXP)
      const newConsecutive = state.consecutiveCorrect + 1
      let affectionBonus = 1
      if (newConsecutive >= 3 && newConsecutive % 3 === 0) affectionBonus += 3
      const newAffection = Math.min(100, state.affection + affectionBonus)
      const newTitles = [...state.unlockedTitles]
      const levelTitle = getLevelTitle(newLevel)
      if (!newTitles.includes(levelTitle)) newTitles.push(levelTitle)

      return {
        ...state,
        xp: newXP,
        level: newLevel,
        affection: newAffection,
        correctCount: state.correctCount + 1,
        chapterCorrect: state.chapterCorrect + 1,
        chapterTotal: state.chapterTotal + 1,
        consecutiveCorrect: newConsecutive,
        attemptCount: 0,
        solvedProblems: [...state.solvedProblems, action.payload.problemId],
        currentTitle: newTitles.includes(state.currentTitle) ? state.currentTitle : levelTitle,
        unlockedTitles: newTitles,
      }
    }

    case 'ANSWER_INCORRECT': {
      const mistakeXP = action.payload?.xpReward || 1
      const newXP = state.xp + mistakeXP
      const affectionLoss = state.consecutiveCorrect === 0 && state.attemptCount >= 2 ? -2 : -1
      const newAffection = Math.max(0, state.affection + affectionLoss)
      return {
        ...state,
        xp: newXP,
        affection: newAffection,
        incorrectCount: state.incorrectCount + 1,
        chapterTotal: state.chapterTotal + 1,
        consecutiveCorrect: 0,
        attemptCount: state.attemptCount + 1,
      }
    }

    case 'CHOICE_MADE': {
      const { affectionChange = 0, xpChange = 0 } = action.payload
      const newAffection = Math.max(0, Math.min(100, state.affection + affectionChange))
      const newXP = Math.max(getXPForLevel(state.level), state.xp + xpChange)
      return {
        ...state,
        affection: newAffection,
        xp: newXP,
        level: getLevelFromXP(newXP),
      }
    }

    case 'ADVANCE_CHAPTER_PHASE': {
      const phaseOrder = ['opening', 'briefing', 'problems', 'boss', 'clear', 'event']
      const currentIdx = phaseOrder.indexOf(state.chapterPhase)
      const nextPhase = phaseOrder[currentIdx + 1]
      if (!nextPhase) return state
      return {
        ...state,
        chapterPhase: nextPhase,
        storyIndex: 0,
        currentProblemIndex: 0,
        attemptCount: 0,
        bossIntroShown: nextPhase === 'boss' ? false : state.bossIntroShown,
      }
    }

    case 'MARK_BOSS_INTRO_SHOWN':
      return { ...state, bossIntroShown: true }

    case 'NEXT_PROBLEM':
      return {
        ...state,
        currentProblemIndex: state.currentProblemIndex + 1,
        attemptCount: 0,
      }

    case 'SHOW_HINT':
      return { ...state, hintUsedThisChapter: true }

    case 'SET_STORY_INDEX':
      return { ...state, storyIndex: action.payload }

    case 'CHAPTER_COMPLETE': {
      const stars = state.chapterCorrect === state.chapterTotal && !state.hintUsedThisChapter
        ? 3
        : state.chapterTotal > 0 && (state.chapterCorrect / state.chapterTotal) >= 0.8
          ? 2
          : 1
      const nextUnlock = Math.min(20, state.currentChapter + 1)
      return {
        ...state,
        phase: 'chapter_clear',
        maxUnlockedChapter: Math.max(state.maxUnlockedChapter || 1, nextUnlock),
        chapterStars: { ...state.chapterStars, [state.currentChapter]: stars },
      }
    }

    case 'NEXT_CHAPTER': {
      const nextChapter = state.currentChapter + 1
      if (nextChapter > 20) {
        return { ...state, phase: 'game_complete' }
      }
      return {
        ...state,
        phase: 'chapter_select',
        currentChapter: nextChapter,
        maxUnlockedChapter: Math.max(state.maxUnlockedChapter || 1, nextChapter),
        chapterPhase: 'opening',
        currentProblemIndex: 0,
        storyIndex: 0,
        hintUsedThisChapter: false,
        chapterCorrect: 0,
        chapterTotal: 0,
        attemptCount: 0,
        bossIntroShown: false,
      }
    }

    case 'SELECT_CHAPTER': {
      const chapterId = action.payload
      if (!Number.isInteger(chapterId) || chapterId < 1 || chapterId > 20) return state
      if (chapterId > (state.maxUnlockedChapter || 1)) return state
      return {
        ...state,
        phase: 'playing',
        currentChapter: chapterId,
        chapterPhase: 'opening',
        currentProblemIndex: 0,
        storyIndex: 0,
        hintUsedThisChapter: false,
        chapterCorrect: 0,
        chapterTotal: 0,
        attemptCount: 0,
        bossIntroShown: false,
      }
    }

    case 'UNLOCK_TITLE': {
      if (state.unlockedTitles.includes(action.payload)) return state
      return {
        ...state,
        unlockedTitles: [...state.unlockedTitles, action.payload],
      }
    }

    case 'EQUIP_TITLE':
      return { ...state, currentTitle: action.payload }

    case 'GAME_OVER':
      return { ...state, phase: 'game_over' }

    case 'RESET':
      return { ...initialState }

    default:
      return state
  }
}

function loadSavedGame() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
    // ignore
  }
  return null
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  useEffect(() => {
    if (state.phase !== 'title') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }
  }, [state])

  return (
    <GameContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  )
}

export function useGameState() {
  return useContext(GameContext)
}

export function useGameDispatch() {
  return useContext(GameDispatchContext)
}

export function hasSavedGame() {
  return loadSavedGame() !== null
}

export function getSavedGame() {
  return loadSavedGame()
}

export function clearSavedGame() {
  localStorage.removeItem(STORAGE_KEY)
}
