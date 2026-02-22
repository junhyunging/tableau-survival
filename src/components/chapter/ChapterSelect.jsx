import { useEffect, useMemo, useRef, useState } from 'react'
import {
  useGameState,
  useGameDispatch,
  getLevelTitle,
  getXPForLevel,
  getXPForNextLevel,
} from '../../hooks/useGameState'
import { CHAPTER_META, PART_META } from '../../data/chapters/index'
import { BACKGROUNDS, getCharacterName, getPartnerCharacter } from '../../data/characters'
import TitleCollectionModal from '../common/TitleCollectionModal'

const SWIPE_THRESHOLD = 46

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

function getChapterThumb(id) {
  return `/images/ui/thumb_ch${String(id).padStart(2, '0')}.jpg`
}

const PART_COLORS = {
  1: { accent: '#5b8df0', glow: 'rgba(91,141,240,0.2)' },
  2: { accent: '#59a14f', glow: 'rgba(89,161,79,0.2)' },
  3: { accent: '#b07aa1', glow: 'rgba(176,122,161,0.2)' },
  4: { accent: '#e8832a', glow: 'rgba(232,131,42,0.2)' },
}

export default function ChapterSelect() {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const maxUnlocked = state.maxUnlockedChapter || 1

  const initialIndex = useMemo(
    () => clamp(CHAPTER_META.findIndex((c) => c.id === state.currentChapter), 0, CHAPTER_META.length - 1),
    [state.currentChapter],
  )

  const [idx, setIdx] = useState(initialIndex)
  const [showTitles, setShowTitles] = useState(false)
  const touchRef = useRef(0)

  useEffect(() => { setIdx(initialIndex) }, [initialIndex])

  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'ArrowLeft') setIdx((p) => clamp(p - 1, 0, CHAPTER_META.length - 1))
      if (e.key === 'ArrowRight') setIdx((p) => clamp(p + 1, 0, CHAPTER_META.length - 1))
      if (e.key === 'Enter') handleStart()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [idx])

  const sel = CHAPTER_META[idx] || CHAPTER_META[0]
  const locked = sel.id > maxUnlocked
  const color = PART_COLORS[sel.part] || PART_COLORS[1]

  const currentLevelXP = getXPForLevel(state.level)
  const nextLevelXP = getXPForNextLevel(state.level)
  const levelTitle = getLevelTitle(state.level)
  const xpPct = nextLevelXP > currentLevelXP
    ? ((state.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100
    : 100
  const partnerName = getCharacterName(getPartnerCharacter(state.playerGender))

  const move = (step) => setIdx((p) => clamp(p + step, 0, CHAPTER_META.length - 1))

  const handleStart = () => {
    if (locked) return
    dispatch({ type: 'SELECT_CHAPTER', payload: sel.id })
  }

  return (
    <div style={{
      position: 'relative', minHeight: '100vh', width: '100%',
      overflow: 'hidden', background: '#080e1a', color: '#e8edf5',
    }}>
      {showTitles && <TitleCollectionModal onClose={() => setShowTitles(false)} />}
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${BACKGROUNDS.office_night})`,
        backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(2,8,20,0.95), rgba(8,14,26,0.85), rgba(14,29,59,0.95))',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column',
        minHeight: '100vh', maxWidth: '1100px',
        margin: '0 auto', padding: '16px 16px 20px',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
              Chapter Select
            </p>
            <h1 style={{ fontSize: '22px', fontWeight: 900, color: '#fff', margin: '2px 0 0' }}>캠페인 맵</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Title button */}
            <button
              onClick={() => setShowTitles(true)}
              style={{
                padding: '6px 12px', borderRadius: '10px', border: '1px solid rgba(255,210,97,0.2)',
                background: 'rgba(255,210,97,0.08)', color: '#ffd261',
                fontSize: '12px', fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,210,97,0.15)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,210,97,0.08)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffd261" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
                <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
                <path d="M18 2H6v7a6 6 0 0012 0V2z" />
              </svg>
              칭호
            </button>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', margin: 0 }}>Lv.{state.level} {state.currentTitle}</p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: '2px 0 0' }}>{partnerName} 호감도 {state.affection}</p>
            </div>
          </div>
        </div>

        {/* XP */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#5b8df0', width: '24px' }}>XP</span>
          <div style={{ flex: 1, height: '6px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: '99px',
              background: 'linear-gradient(to right, #5b8df0, #76b7b2)',
              width: `${clamp(xpPct, 0, 100)}%`, transition: 'width 0.7s',
            }} />
          </div>
          <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', width: '70px', textAlign: 'right' }}>{state.xp}/{nextLevelXP}</span>
        </div>

        {/* Part tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '16px' }}>
          {[1, 2, 3, 4].map((p) => (
            <button
              key={p}
              onClick={() => {
                const first = CHAPTER_META.findIndex((c) => c.part === p)
                if (first >= 0) setIdx(first)
              }}
              style={{
                padding: '5px 14px', borderRadius: '99px', border: 'none',
                fontSize: '11px', fontWeight: 600, cursor: 'pointer',
                background: sel.part === p ? 'rgba(255,255,255,0.15)' : 'transparent',
                color: sel.part === p ? '#fff' : 'rgba(255,255,255,0.35)',
                transition: 'all 0.3s',
              }}
            >
              {PART_META[p]?.label || `Part ${p}`}
            </button>
          ))}
        </div>

        {/* Carousel area */}
        <div
          style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 0, padding: '16px 0' }}
          onTouchStart={(e) => { touchRef.current = e.changedTouches[0].clientX }}
          onTouchEnd={(e) => {
            const d = e.changedTouches[0].clientX - touchRef.current
            if (Math.abs(d) >= SWIPE_THRESHOLD) move(d > 0 ? -1 : 1)
          }}
        >
          {/* Left arrow */}
          <button
            onClick={() => move(-1)}
            disabled={idx <= 0}
            style={{
              position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',
              zIndex: 40, width: '40px', height: '40px', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(10,22,48,0.8)',
              color: 'rgba(255,255,255,0.8)', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              opacity: idx <= 0 ? 0.2 : 1,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '20px', height: '20px' }}>
              <path d="M14.75 6.75L9.25 12L14.75 17.25" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards */}
          {CHAPTER_META.map((ch, i) => {
            const offset = i - idx
            if (Math.abs(offset) > 2) return null

            const abs = Math.abs(offset)
            const stars = state.chapterStars[ch.id] || 0
            const isLocked = ch.id > maxUnlocked
            const pc = PART_COLORS[ch.part] || PART_COLORS[1]

            let tx = 0, sc = 1, op = 1, bl = 0, zi = 30
            if (abs === 1) { tx = offset * 240; sc = 0.82; op = 0.5; bl = 3; zi = 20 }
            else if (abs === 2) { tx = offset * 380; sc = 0.65; op = 0.25; bl = 5; zi = 10 }

            return (
              <div
                key={ch.id}
                onClick={() => {
                  if (abs > 0) setIdx(i)
                  else if (!isLocked) handleStart()
                }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: 'min(75vw, 340px)',
                  marginLeft: 'calc(-1 * min(75vw, 340px) / 2)',
                  marginTop: 'calc(-1 * min(55vh, 480px) / 2)',
                  height: 'min(55vh, 480px)',
                  transform: `translateX(${tx}px) scale(${sc})`,
                  opacity: op,
                  filter: `blur(${bl}px)`,
                  zIndex: zi,
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  borderRadius: '20px',
                  border: abs === 0 ? `1px solid ${pc.accent}44` : '1px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden',
                  background: 'linear-gradient(160deg, rgba(13,28,53,0.97), rgba(6,12,24,0.99))',
                  boxShadow: abs === 0 ? `0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${pc.glow}` : '0 8px 24px rgba(0,0,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Thumbnail area */}
                <div style={{ position: 'relative', overflow: 'hidden', height: '65%' }}>
                  {/* Code-based fallback bg (always renders behind image) */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(135deg, ${pc.accent}18 0%, #060d1a 60%)`,
                  }}>
                    <div style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '56px', fontWeight: 900, lineHeight: 1,
                      color: `${pc.accent}18`,
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {String(ch.id).padStart(2, '0')}
                    </div>
                  </div>
                  <img
                    src={getChapterThumb(ch.id)}
                    alt={`Ch ${ch.id}`}
                    style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 2,
                    background: 'linear-gradient(to top, rgba(6,12,24,0.85) 0%, rgba(6,12,24,0.2) 40%, transparent 70%)',
                  }} />

                  {/* Part badge */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, padding: '4px 10px',
                      borderRadius: '99px', background: `${pc.accent}33`, color: pc.accent,
                    }}>
                      {PART_META[ch.part]?.name || `Part ${ch.part}`}
                    </span>
                  </div>

                  {/* Lock overlay */}
                  {isLocked && (
                    <div style={{
                      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(3,10,22,0.7)', backdropFilter: 'blur(2px)',
                    }}>
                      <svg style={{ width: '32px', height: '32px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
                        Chapter {ch.id - 1} 클리어 후 해금
                      </p>
                    </div>
                  )}
                </div>

                {/* Info section (below thumbnail) */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px 16px 14px' }}>
                  {/* Stars */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '8px' }}>
                    {[1, 2, 3].map((s) => (
                      <span key={s} style={{
                        fontSize: '20px', lineHeight: 1,
                        color: s <= stars ? '#ffd261' : 'rgba(255,255,255,0.15)',
                        textShadow: s <= stars ? '0 0 10px rgba(255,210,97,0.5)' : 'none',
                      }}>
                        {s <= stars ? '\u2605' : '\u2606'}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: 0, textAlign: 'center' }}>Chapter {ch.id}</p>
                  <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', margin: '3px 0 0', lineHeight: 1.2, textAlign: 'center' }}>{ch.title}</h2>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: '2px 0 0', textAlign: 'center' }}>{ch.subtitle}</p>

                  {/* Start button */}
                  {abs === 0 && !isLocked && (
                    <div style={{
                      marginTop: 'auto', paddingTop: '10px',
                    }}>
                      <div style={{
                        padding: '9px 0', borderRadius: '10px', textAlign: 'center',
                        background: pc.accent, color: '#fff',
                        fontSize: '14px', fontWeight: 700,
                        boxShadow: `0 4px 20px ${pc.glow}`,
                      }}>
                        {state.chapterStars[ch.id] ? '다시 플레이' : '챕터 시작'}
                      </div>
                    </div>
                  )}

                  {abs === 0 && isLocked && (
                    <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                      <div style={{
                        padding: '9px 0', borderRadius: '10px', textAlign: 'center',
                        background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)',
                        fontSize: '13px', fontWeight: 600,
                      }}>
                        잠금 상태
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Right arrow */}
          <button
            onClick={() => move(1)}
            disabled={idx >= CHAPTER_META.length - 1}
            style={{
              position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)',
              zIndex: 40, width: '40px', height: '40px', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(10,22,48,0.8)',
              color: 'rgba(255,255,255,0.8)', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              opacity: idx >= CHAPTER_META.length - 1 ? 0.2 : 1,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '20px', height: '20px' }}>
              <path d="M9.25 6.75L14.75 12L9.25 17.25" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Chapter dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', paddingTop: '8px' }}>
          {CHAPTER_META.map((c, i) => {
            const active = i === idx
            const cleared = (state.chapterStars[c.id] || 0) > 0
            const lk = c.id > maxUnlocked
            return (
              <button
                key={c.id}
                onClick={() => setIdx(i)}
                style={{
                  height: '6px', borderRadius: '99px', border: 'none', cursor: 'pointer', padding: 0,
                  width: active ? '20px' : '6px',
                  background: active
                    ? (PART_COLORS[c.part]?.accent || '#5b8df0')
                    : lk ? 'rgba(255,255,255,0.08)' : cleared ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)',
                  transition: 'all 0.3s',
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
