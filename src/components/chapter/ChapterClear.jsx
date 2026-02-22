import { useState, useEffect } from 'react'
import {
  useGameState, useGameDispatch,
  getLevelTitle, getXPForLevel, getXPForNextLevel,
  getAffectionStage, getAffectionLabel,
} from '../../hooks/useGameState'
import { getChapter } from '../../data/chapters/index'
import { getPartnerCharacter, getCharacterName, BACKGROUNDS } from '../../data/characters'
import { getTitleById } from '../../data/titles'

function LevelUpScene({ level, levelTitle, onDismiss }) {
  const [phase, setPhase] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setPhase(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      onClick={onDismiss}
      style={{
        position: 'fixed', inset: 0, zIndex: 150, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: phase ? 1 : 0,
        transition: 'opacity 0.7s ease',
      }}
    >
      {/* Promotion background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${BACKGROUNDS.promotion})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.55)',
      }} />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,5,15,0.6) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center',
        transform: phase ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <p style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.4em',
          color: 'rgba(255,210,97,0.7)', textTransform: 'uppercase',
          margin: '0 0 16px',
          animation: 'pulse 2s ease infinite',
        }}>
          ★ Level Up ★
        </p>
        <div style={{
          fontSize: '80px', fontWeight: 900,
          color: '#ffd261',
          textShadow: '0 0 60px rgba(255,210,97,0.6), 0 0 120px rgba(255,210,97,0.3)',
          lineHeight: 1,
          marginBottom: '12px',
        }}>
          {level}
        </div>
        <h2 style={{
          fontSize: '28px', fontWeight: 900,
          color: '#fff',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          margin: '0 0 8px',
          letterSpacing: '0.05em',
        }}>
          {levelTitle}
        </h2>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: '0 0 48px' }}>
          레벨이 올랐습니다!
        </p>
        <p style={{
          fontSize: '11px', color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.1em',
          animation: 'blink 1.5s ease infinite',
        }}>
          탭하여 계속
        </p>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.7 } 50% { opacity: 1 } }
        @keyframes blink { 0%, 100% { opacity: 0.3 } 50% { opacity: 0.7 } }
      `}</style>
    </div>
  )
}

function StarIcon({ filled, delay }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <span style={{
      fontSize: '36px',
      lineHeight: 1,
      display: 'inline-block',
      transform: visible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-30deg)',
      opacity: visible ? 1 : 0,
      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      color: filled ? '#ffd261' : 'rgba(255,255,255,0.12)',
      filter: filled ? '0 0 12px rgba(255,210,97,0.5)' : 'none',
      textShadow: filled ? '0 0 20px rgba(255,210,97,0.4)' : 'none',
    }}>
      {filled ? '★' : '☆'}
    </span>
  )
}

function StatItem({ value, label, color, delay }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div style={{
      textAlign: 'center',
      transform: visible ? 'translateY(0)' : 'translateY(12px)',
      opacity: visible ? 1 : 0,
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <div style={{ fontSize: '22px', fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{label}</div>
    </div>
  )
}

export default function ChapterClear() {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [showButton, setShowButton] = useState(false)
  const [showLevelUp, setShowLevelUp] = useState(false)
  const [levelUpDismissed, setLevelUpDismissed] = useState(false)
  const [titleToastIdx, setTitleToastIdx] = useState(0)

  const chapter = getChapter(state.currentChapter)
  const stars = state.chapterStars[state.currentChapter] || 0
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

  const isLastChapter = state.currentChapter >= 20
  const canAdvance = stars >= 1
  const didLevelUp = state.level > (state.levelAtChapterStart || 1)
  const pendingTitles = state.pendingTitleUnlock || []
  const currentPendingTitle = pendingTitles[titleToastIdx]
    ? getTitleById(pendingTitles[titleToastIdx])
    : null

  useEffect(() => {
    // Show level-up screen first if leveled up
    if (didLevelUp) {
      setShowLevelUp(true)
    } else {
      const t = setTimeout(() => setShowButton(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (levelUpDismissed) {
      const t = setTimeout(() => setShowButton(true), 800)
      return () => clearTimeout(t)
    }
  }, [levelUpDismissed])

  const handleNext = () => {
    if (!canAdvance) return
    dispatch({ type: 'CLEAR_PENDING_TITLES' })
    dispatch({ type: 'NEXT_CHAPTER' })
  }

  const handleRetryChapter = () => {
    dispatch({ type: 'CLEAR_PENDING_TITLES' })
    dispatch({ type: 'SELECT_CHAPTER', payload: state.currentChapter })
  }

  // Level-up overlay
  if (showLevelUp && !levelUpDismissed) {
    return (
      <LevelUpScene
        level={state.level}
        levelTitle={levelTitle}
        onDismiss={() => {
          setShowLevelUp(false)
          setLevelUpDismissed(true)
        }}
      />
    )
  }

  // Part color
  const chapterMeta = { 1: '#5b8df0', 2: '#59a14f', 3: '#b07aa1', 4: '#e8832a' }
  const accentColor = chapterMeta[chapter?.part] || '#5b8df0'

  return (
    <div style={{
      minHeight: '100vh',
      background: '#060d1a',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(ellipse, ${accentColor}12 0%, transparent 70%)`,
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '20%',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(176,122,161,0.06) 0%, transparent 70%)',
        }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '420px',
        textAlign: 'center',
      }}>
        {/* Chapter clear label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '5px 14px',
          borderRadius: '99px',
          background: `${accentColor}18`,
          border: `1px solid ${accentColor}30`,
          marginBottom: '16px',
          animation: 'fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}>
          <div style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: accentColor, boxShadow: `0 0 6px ${accentColor}`,
          }} />
          <span style={{
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: accentColor,
          }}>
            Chapter {state.currentChapter} Clear
          </span>
        </div>

        {/* Stars */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '12px',
          marginBottom: '12px',
        }}>
          {[1, 2, 3].map((i) => (
            <StarIcon key={i} filled={i <= stars} delay={300 + i * 150} />
          ))}
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '26px', fontWeight: 900,
          color: '#e8edf5',
          margin: '0 0 4px',
          lineHeight: 1.2,
          animation: 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
        }}>
          {chapter?.title || `Chapter ${state.currentChapter}`}
        </h1>
        <p style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.4)',
          margin: '0 0 24px',
          animation: 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both',
        }}>
          {chapter?.subtitle}
        </p>

        {/* Stats card */}
        <div style={{
          background: 'linear-gradient(160deg, rgba(17,29,48,0.9), rgba(8,14,26,0.95))',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '16px',
          animation: 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
        }}>
          {/* Level row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: '10px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '13px', fontWeight: 800,
                color: accentColor,
                padding: '2px 10px',
                borderRadius: '6px',
                background: `${accentColor}18`,
              }}>
                Lv.{state.level}
              </span>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{state.currentTitle}</span>
            </div>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
              {state.xp} / {nextLevelXP} XP
            </span>
          </div>

          {/* XP bar */}
          <div style={{
            height: '6px', borderRadius: '99px',
            background: 'rgba(255,255,255,0.06)',
            overflow: 'hidden', marginBottom: '18px',
          }}>
            <div style={{
              height: '100%', borderRadius: '99px',
              background: `linear-gradient(to right, ${accentColor}, #76b7b2)`,
              width: `${Math.min(100, xpProgress)}%`,
              transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
            }} />
          </div>

          {/* Stats grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px',
          }}>
            <StatItem
              value={`${state.chapterCorrect}/${state.chapterTotal}`}
              label="정답"
              color="#48A868"
              delay={600}
            />
            <StatItem
              value={`${accuracy}%`}
              label="정확도"
              color="#e8edf5"
              delay={700}
            />
            <StatItem
              value={state.affection}
              label={`${partnerName} ${affectionLabel}`}
              color="#f05b8d"
              delay={800}
            />
          </div>
        </div>

        {/* Pending title unlocks */}
        {currentPendingTitle && showButton && (
          <div style={{
            marginBottom: '12px',
            background: 'linear-gradient(135deg, rgba(255,210,97,0.08), rgba(176,122,161,0.08))',
            border: '1px solid rgba(255,210,97,0.2)',
            borderRadius: '14px',
            padding: '12px 16px',
            display: 'flex', alignItems: 'center', gap: '12px',
            animation: 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}>
            <span style={{ fontSize: '24px' }}>{currentPendingTitle.icon}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,210,97,0.7)', margin: 0, letterSpacing: '0.1em' }}>
                새 칭호 해금!
              </p>
              <p style={{ fontSize: '14px', fontWeight: 800, color: '#e8edf5', margin: '2px 0 0' }}>
                {currentPendingTitle.name}
              </p>
            </div>
            {pendingTitles.length > 1 && (
              <button
                onClick={() => setTitleToastIdx((p) => (p + 1) % pendingTitles.length)}
                style={{
                  background: 'rgba(255,255,255,0.08)', border: 'none',
                  color: 'rgba(255,255,255,0.6)', borderRadius: '8px',
                  padding: '4px 10px', fontSize: '11px', cursor: 'pointer',
                }}
              >
                {titleToastIdx + 1}/{pendingTitles.length}
              </button>
            )}
          </div>
        )}

        {/* Next button */}
        <div style={{
          opacity: showButton ? 1 : 0,
          transform: showButton ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {canAdvance ? (
            <button
              onClick={handleNext}
              style={{
                width: '100%',
                padding: '16px 0',
                borderRadius: '16px',
                border: 'none',
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
                color: '#fff',
                fontSize: '16px', fontWeight: 700,
                cursor: 'pointer',
                boxShadow: `0 8px 32px ${accentColor}33`,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)'
                e.target.style.boxShadow = `0 12px 40px ${accentColor}50`
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = `0 8px 32px ${accentColor}33`
              }}
            >
              {isLastChapter ? '결과 보기' : `Chapter ${state.currentChapter + 1}으로 →`}
            </button>
          ) : (
            <>
              <div style={{
                marginBottom: '10px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(255, 99, 132, 0.08)',
                border: '1px solid rgba(255, 99, 132, 0.25)',
                color: 'rgba(255, 180, 190, 0.9)',
                fontSize: '12px',
                fontWeight: 600,
              }}>
                별 1개 이상 획득해야 다음 챕터로 이동할 수 있어요.
              </div>
              <button
                onClick={handleRetryChapter}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.16)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Chapter {state.currentChapter} 다시 도전
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
