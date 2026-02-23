import { createContext, useContext, useReducer, useEffect, useRef, useCallback, useState } from 'react'
import { checkTitleUnlocks } from '../data/titles'
import { supabase } from '../lib/supabase'

const GameContext = createContext(null)
const GameDispatchContext = createContext(null)

const STORAGE_KEY = 'tableau-quest-save'
const FORCE_NEW_GAME_KEY = 'tableau-quest-force-new-game'
const SAVE_DEBOUNCE_MS = 2000

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
  levelAtChapterStart: 1,
  affection: 30,
  solvedProblems: [],
  correctCount: 0,
  incorrectCount: 0,
  currentTitle: '수습 분석가',
  unlockedTitles: ['수습 분석가'],
  pendingTitleUnlock: [],
  chapterStars: {},
  hintUsedThisChapter: false,
  chapterCorrect: 0,
  chapterTotal: 0,
  chapterAttemptedProblems: [],
  chapterProblemResults: {},
  isReplayChapterRun: false,
  attemptCount: 0,
  consecutiveCorrect: 0,
  maxConsecutiveCorrect: 0,
  hintFreeChapters: 0,
  hadPerfectChapter: false,
  cgSeen: [],
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

function getProblemIdFromPayload(payload) {
  if (typeof payload === 'string') return payload
  if (payload && typeof payload === 'object') return payload.problemId || null
  return null
}

function getXPRewardFromPayload(payload, fallback) {
  if (payload && typeof payload === 'object' && Number.isFinite(payload.xpReward)) {
    return payload.xpReward
  }
  return fallback
}

function buildChapterProgress(state, problemId, isCorrect) {
  const hasProblemId = typeof problemId === 'string' && problemId.length > 0
  const isFirstAttempt = hasProblemId
    ? !state.chapterAttemptedProblems.includes(problemId)
    : true
  const wasPreviouslyCorrect = hasProblemId
    ? Boolean(state.chapterProblemResults[problemId])
    : false

  const nextAttempted = hasProblemId && isFirstAttempt
    ? [...state.chapterAttemptedProblems, problemId]
    : state.chapterAttemptedProblems

  const nextResults = hasProblemId
    ? { ...state.chapterProblemResults, [problemId]: isCorrect }
    : state.chapterProblemResults

  const chapterCorrect = Object.values(nextResults).filter(Boolean).length
  const chapterTotal = Object.keys(nextResults).length

  return {
    isFirstAttempt,
    wasPreviouslyCorrect,
    nextAttempted,
    nextResults,
    chapterCorrect,
    chapterTotal,
  }
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
      const problemId = getProblemIdFromPayload(action.payload)
      const progress = buildChapterProgress(state, problemId, true)
      const solvedProblems = problemId && !state.solvedProblems.includes(problemId)
        ? [...state.solvedProblems, problemId]
        : state.solvedProblems
      const nextCorrectCount = progress.wasPreviouslyCorrect
        ? state.correctCount
        : state.correctCount + 1

      const baseState = {
        ...state,
        correctCount: nextCorrectCount,
        chapterCorrect: progress.chapterCorrect,
        chapterTotal: progress.chapterTotal,
        chapterAttemptedProblems: progress.nextAttempted,
        chapterProblemResults: progress.nextResults,
        attemptCount: 0,
        solvedProblems,
        currentTitle: state.currentTitle,
      }

      // Retry clear is allowed, but retry attempts should not grant XP or streak bonuses.
      // Also, replaying an already-cleared chapter should not change XP/affection.
      if (!progress.isFirstAttempt || state.isReplayChapterRun) {
        return baseState
      }

      const baseXP = getXPRewardFromPayload(action.payload, 8)
      const bonusXP = !state.hintUsedThisChapter ? 3 : 0
      const totalXP = baseXP + bonusXP
      const newXP = state.xp + totalXP
      const newLevel = getLevelFromXP(newXP)
      const newConsecutive = state.consecutiveCorrect + 1
      const newMaxConsecutive = Math.max(state.maxConsecutiveCorrect || 0, newConsecutive)
      let affectionBonus = 1
      if (newConsecutive >= 3 && newConsecutive % 3 === 0) affectionBonus += 3
      const newAffection = Math.min(100, state.affection + affectionBonus)
      const newTitles = [...state.unlockedTitles]
      const levelTitle = getLevelTitle(newLevel)
      if (!newTitles.includes(levelTitle)) newTitles.push(levelTitle)

      return {
        ...baseState,
        xp: newXP,
        level: newLevel,
        affection: newAffection,
        consecutiveCorrect: newConsecutive,
        maxConsecutiveCorrect: newMaxConsecutive,
        unlockedTitles: newTitles,
      }
    }

    case 'ANSWER_INCORRECT': {
      const problemId = getProblemIdFromPayload(action.payload)
      const progress = buildChapterProgress(state, problemId, false)

      const baseState = {
        ...state,
        chapterCorrect: progress.chapterCorrect,
        chapterTotal: progress.chapterTotal,
        chapterAttemptedProblems: progress.nextAttempted,
        chapterProblemResults: progress.nextResults,
        consecutiveCorrect: 0,
        attemptCount: state.attemptCount + 1,
      }

      // Retry attempts should not change XP or meta stats.
      // Also, replaying an already-cleared chapter should not change XP/affection.
      if (!progress.isFirstAttempt || state.isReplayChapterRun) {
        return baseState
      }

      const mistakeXP = getXPRewardFromPayload(action.payload, 1)
      const newXP = state.xp + mistakeXP
      const affectionLoss = state.consecutiveCorrect === 0 && state.attemptCount >= 2 ? -2 : -1
      const newAffection = Math.max(0, state.affection + affectionLoss)
      return {
        ...baseState,
        xp: newXP,
        affection: newAffection,
        incorrectCount: state.incorrectCount + 1,
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
      const accuracy = state.chapterTotal > 0 ? (state.chapterCorrect / state.chapterTotal) : 0
      const isPerfect = state.chapterTotal > 0 && accuracy === 1 && !state.hintUsedThisChapter
      const stars = state.chapterCorrect === 0
        ? 0
        : accuracy >= 0.75
          ? 3
          : accuracy >= 0.5
            ? 2
            : 1
      const nextUnlock = stars >= 1 ? Math.min(20, state.currentChapter + 1) : (state.maxUnlockedChapter || 1)
      const newChapterStars = { ...state.chapterStars, [state.currentChapter]: stars }
      const newHintFreeChapters = !state.hintUsedThisChapter
        ? (state.hintFreeChapters || 0) + 1
        : state.hintFreeChapters || 0
      const newHadPerfect = state.hadPerfectChapter || isPerfect

      const nextState = {
        ...state,
        phase: 'chapter_clear',
        maxUnlockedChapter: Math.max(state.maxUnlockedChapter || 1, nextUnlock),
        chapterStars: newChapterStars,
        hintFreeChapters: newHintFreeChapters,
        hadPerfectChapter: newHadPerfect,
      }

      // Check for newly unlocked titles
      const newlyUnlocked = checkTitleUnlocks(nextState)
      if (newlyUnlocked.length > 0) {
        return {
          ...nextState,
          unlockedTitles: [...nextState.unlockedTitles, ...newlyUnlocked],
          pendingTitleUnlock: newlyUnlocked,
        }
      }
      return nextState
    }

    case 'NEXT_CHAPTER': {
      const currentStars = state.chapterStars[state.currentChapter] || 0
      if (state.currentChapter < 20 && currentStars < 1) {
        return state
      }

      const nextChapter = state.currentChapter + 1
      if (nextChapter > 20) {
        return { ...state, phase: 'game_complete' }
      }
      return {
        ...state,
        phase: 'chapter_select',
        currentChapter: nextChapter,
        maxUnlockedChapter: Math.max(state.maxUnlockedChapter || 1, nextChapter),
        levelAtChapterStart: state.level,
        chapterPhase: 'opening',
        currentProblemIndex: 0,
        storyIndex: 0,
        hintUsedThisChapter: false,
        chapterCorrect: 0,
        chapterTotal: 0,
        chapterAttemptedProblems: [],
        chapterProblemResults: {},
        isReplayChapterRun: false,
        attemptCount: 0,
        bossIntroShown: false,
        pendingTitleUnlock: [],
      }
    }

    case 'SELECT_CHAPTER': {
      const chapterId = action.payload
      if (!Number.isInteger(chapterId) || chapterId < 1 || chapterId > 20) return state
      if (chapterId > (state.maxUnlockedChapter || 1)) return state
      const wasClearedBefore = (state.chapterStars?.[chapterId] || 0) >= 1
      return {
        ...state,
        phase: 'playing',
        currentChapter: chapterId,
        levelAtChapterStart: state.level,
        chapterPhase: 'opening',
        currentProblemIndex: 0,
        storyIndex: 0,
        hintUsedThisChapter: false,
        chapterCorrect: 0,
        chapterTotal: 0,
        chapterAttemptedProblems: [],
        chapterProblemResults: {},
        isReplayChapterRun: wasClearedBefore,
        attemptCount: 0,
        bossIntroShown: false,
        pendingTitleUnlock: [],
      }
    }

    case 'ADD_CG_SEEN': {
      const cgKey = action.payload
      if ((state.cgSeen || []).includes(cgKey)) return state
      return { ...state, cgSeen: [...(state.cgSeen || []), cgKey] }
    }

    case 'CLEAR_PENDING_TITLES':
      return { ...state, pendingTitleUnlock: [] }

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

// --- localStorage helpers (offline fallback) ---

function loadSavedGame() {
  const snapshot = loadLocalSnapshot()
  return snapshot?.saveData ?? null
}

function loadLocalSnapshot() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null

    // New snapshot format
    if (parsed.saveData && typeof parsed.saveData === 'object') {
      return {
        saveData: parsed.saveData,
        updatedAt: parsed.updatedAt || null,
        userId: parsed.userId || null,
      }
    }

    // Backward compatibility: legacy format was direct game state JSON
    return {
      saveData: parsed,
      updatedAt: null,
      userId: null,
    }
  } catch {
    // ignore
    return null
  }
}

function saveLocalSnapshot(saveData, userId, updatedAt = null) {
  try {
    const snapshot = {
      saveData,
      updatedAt: updatedAt || new Date().toISOString(),
      userId: userId || null,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
  } catch {
    // ignore
  }
}

function consumeForceNewGameFlag() {
  try {
    const shouldForceNew = localStorage.getItem(FORCE_NEW_GAME_KEY) === '1'
    if (shouldForceNew) {
      localStorage.removeItem(FORCE_NEW_GAME_KEY)
    }
    return shouldForceNew
  } catch {
    return false
  }
}

function clearForceNewGameFlag() {
  try {
    localStorage.removeItem(FORCE_NEW_GAME_KEY)
  } catch {
    // ignore
  }
}

function parseTimestamp(ts) {
  if (!ts || typeof ts !== 'string') return 0
  const ms = Date.parse(ts)
  return Number.isFinite(ms) ? ms : 0
}

function isLocalNewerThanCloud(localSnapshot, cloudSnapshot) {
  if (!localSnapshot?.saveData) return false
  if (!cloudSnapshot?.saveData) return true
  return parseTimestamp(localSnapshot.updatedAt) > parseTimestamp(cloudSnapshot.updatedAt)
}

// --- Supabase save/load helpers ---

async function loadFromSupabase(userId) {
  try {
    const { data, error } = await supabase
      .from('game_saves')
      .select('save_data, updated_at')
      .eq('user_id', userId)
      .single()

    if (error) {
      if (error.code === 'PGRST116') return null // no rows found
      console.error('Supabase load error:', error)
      return null
    }
    if (!data?.save_data) return null
    return {
      saveData: data.save_data,
      updatedAt: data.updated_at || null,
      userId,
    }
  } catch (err) {
    console.error('Supabase load error:', err)
    return null
  }
}

async function saveToSupabase(userId, saveData) {
  try {
    const { error } = await supabase
      .from('game_saves')
      .upsert(
        { user_id: userId, save_data: saveData, updated_at: new Date().toISOString() },
        { onConflict: 'user_id' }
      )

    if (error) {
      console.error('Supabase save error:', error)
    }
  } catch (err) {
    console.error('Supabase save error:', err)
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const [isHydrating, setIsHydrating] = useState(true)
  const saveTimerRef = useRef(null)
  const initialLoadDone = useRef(false)
  const currentUserIdRef = useRef(null)

  // Load save from Supabase on mount (user is already authenticated when GameProvider renders)
  useEffect(() => {
    let cancelled = false

    async function loadSave() {
      try {
        const forceNewGame = consumeForceNewGameFlag()
        if (forceNewGame) {
          if (!cancelled) {
            localStorage.removeItem(STORAGE_KEY)
            initialLoadDone.current = true
            setIsHydrating(false)
          }
          return
        }

        if (supabase) {
          const { data: { session } } = await supabase.auth.getSession()
          const userId = session?.user?.id
          currentUserIdRef.current = userId || null

          if (userId) {
            const cloudSave = await loadFromSupabase(userId)
            const localSnapshot = loadLocalSnapshot()
            const localForUser = localSnapshot?.userId === userId ? localSnapshot : null

            if (!cancelled && localForUser?.saveData && isLocalNewerThanCloud(localForUser, cloudSave)) {
              dispatch({ type: 'LOAD_GAME', payload: localForUser.saveData })
              // Keep cloud in sync with fresher local data.
              await saveToSupabase(userId, localForUser.saveData)
            } else if (!cancelled && cloudSave?.saveData) {
              dispatch({ type: 'LOAD_GAME', payload: cloudSave.saveData })
              saveLocalSnapshot(cloudSave.saveData, userId, cloudSave.updatedAt)
            } else if (!cancelled) {
              // New user with no cloud save — clear leftover localStorage from other users
              if (localSnapshot && localSnapshot.userId !== userId) {
                localStorage.removeItem(STORAGE_KEY)
              }
            }
            if (!cancelled) {
              initialLoadDone.current = true
              setIsHydrating(false)
            }
            return
          }
        }

        // No auth session (or Supabase unavailable): local fallback
        if (!cancelled) {
          const localSnapshot = loadLocalSnapshot()
          if (localSnapshot?.saveData) {
            dispatch({ type: 'LOAD_GAME', payload: localSnapshot.saveData })
          }
          initialLoadDone.current = true
          setIsHydrating(false)
        }
      } catch (err) {
        console.error('Initial game load error:', err)
        if (!cancelled) {
          initialLoadDone.current = true
          setIsHydrating(false)
        }
      }
    }

    loadSave()
    return () => { cancelled = true }
  }, [])

  // Debounced save to both localStorage and Supabase
  const debouncedCloudSave = useCallback((saveState) => {
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current)
    }
    saveTimerRef.current = setTimeout(async () => {
      if (!supabase) return

      // Save to Supabase if logged in
      const { data: { session } } = await supabase.auth.getSession()
      const userId = session?.user?.id || null
      currentUserIdRef.current = userId
      if (userId) {
        await saveToSupabase(userId, saveState)
      }
    }, SAVE_DEBOUNCE_MS)
  }, [])

  useEffect(() => {
    if (!initialLoadDone.current) return
    if (state.phase !== 'title') {
      // Local save is immediate so refresh cannot lose latest in-progress state.
      saveLocalSnapshot(state, currentUserIdRef.current)
      // Cloud save remains debounced to reduce write load.
      debouncedCloudSave(state)
    }

    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current)
      }
    }
  }, [state, debouncedCloudSave])

  return (
    <GameContext.Provider value={{ ...state, isHydrating }}>
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

export async function beginNewGameSession() {
  try {
    localStorage.setItem(FORCE_NEW_GAME_KEY, '1')
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }

  if (!supabase) return

  try {
    const { data: { session } } = await supabase.auth.getSession()
    const userId = session?.user?.id
    if (!userId) return

    const { error } = await supabase
      .from('game_saves')
      .delete()
      .eq('user_id', userId)

    if (error) {
      console.error('Supabase delete save error:', error)
    }
  } catch (err) {
    console.error('Supabase delete save error:', err)
  }
}

export function finalizeNewGameSession() {
  clearForceNewGameFlag()
}
