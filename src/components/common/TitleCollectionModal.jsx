import { useState } from 'react'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { TITLES, CATEGORY_META, RARITY_META } from '../../data/titles'

const CATEGORIES = ['star', 'skill', 'part', 'affection', 'hidden']

export default function TitleCollectionModal({ onClose }) {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [activeCategory, setActiveCategory] = useState('star')

  const unlocked = state.unlockedTitles || []
  const current = state.currentTitle

  const filtered = TITLES.filter((t) => t.category === activeCategory)
  const totalUnlocked = TITLES.filter((t) => unlocked.includes(t.id)).length

  const handleEquip = (title) => {
    if (!unlocked.includes(title.id)) return
    dispatch({ type: 'EQUIP_TITLE', payload: title.name })
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(2, 8, 20, 0.88)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease both',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        width: '100%', maxWidth: '460px',
        background: 'linear-gradient(160deg, rgba(13,26,50,0.98), rgba(6,12,24,0.99))',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        maxHeight: '90vh',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 20px 0',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          paddingBottom: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', margin: 0 }}>
                Title Collection
              </p>
              <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#e8edf5', margin: '4px 0 0' }}>칭호 모음</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                {totalUnlocked}/{TITLES.length}
              </span>
              <button
                onClick={onClose}
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
          </div>

          {/* Current title */}
          <div style={{
            marginTop: '12px',
            padding: '8px 12px', borderRadius: '10px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>현재 칭호</span>
            <span style={{
              fontSize: '13px', fontWeight: 700,
              color: '#ffd261',
              padding: '2px 10px', borderRadius: '6px',
              background: 'rgba(255,210,97,0.1)',
              border: '1px solid rgba(255,210,97,0.2)',
            }}>
              {current}
            </span>
          </div>

          {/* Category tabs */}
          <div style={{ display: 'flex', gap: '2px', marginTop: '12px', overflowX: 'auto', paddingBottom: '2px' }}>
            {CATEGORIES.map((cat) => {
              const meta = CATEGORY_META[cat]
              const catTitles = TITLES.filter((t) => t.category === cat)
              const catUnlocked = catTitles.filter((t) => unlocked.includes(t.id)).length
              const active = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '6px 12px', borderRadius: '8px',
                    border: active ? `1px solid ${meta.color}30` : '1px solid transparent',
                    fontSize: '12px', fontWeight: active ? 700 : 500, cursor: 'pointer', whiteSpace: 'nowrap',
                    background: active ? `${meta.color}15` : 'transparent',
                    color: active ? meta.color : 'rgba(255,255,255,0.4)',
                    transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: active ? meta.color : 'rgba(255,255,255,0.2)',
                    flexShrink: 0, transition: 'all 0.2s',
                  }} />
                  {meta.label}
                  <span style={{
                    fontSize: '10px', fontWeight: 600,
                    color: active ? `${meta.color}99` : 'rgba(255,255,255,0.2)',
                  }}>
                    {catUnlocked}/{catTitles.length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Title grid */}
        <div style={{ overflowY: 'auto', padding: '16px 20px 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filtered.map((title) => {
              const isUnlocked = unlocked.includes(title.id)
              const isEquipped = current === title.name
              const rarityMeta = RARITY_META[title.rarity]
              const isSecret = title.secret && !isUnlocked

              return (
                <div
                  key={title.id}
                  onClick={() => handleEquip(title)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 14px', borderRadius: '14px',
                    background: isEquipped
                      ? 'rgba(255,210,97,0.08)'
                      : isUnlocked
                        ? 'rgba(255,255,255,0.04)'
                        : 'rgba(255,255,255,0.02)',
                    border: isEquipped
                      ? '1px solid rgba(255,210,97,0.25)'
                      : isUnlocked
                        ? '1px solid rgba(255,255,255,0.07)'
                        : '1px solid rgba(255,255,255,0.04)',
                    cursor: isUnlocked ? 'pointer' : 'default',
                    transition: 'all 0.2s',
                    opacity: isUnlocked ? 1 : 0.45,
                  }}
                  onMouseEnter={(e) => {
                    if (isUnlocked && !isEquipped) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isUnlocked && !isEquipped) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px',
                    background: isUnlocked ? `${rarityMeta.color}15` : 'rgba(255,255,255,0.04)',
                    filter: isUnlocked ? 'none' : 'grayscale(1)',
                    flexShrink: 0,
                  }}>
                    {isSecret ? '?' : title.icon}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '14px', fontWeight: 700,
                        color: isUnlocked ? '#e8edf5' : 'rgba(255,255,255,0.4)',
                      }}>
                        {isSecret ? '???' : title.name}
                      </span>
                      {isUnlocked && (
                        <span style={{
                          fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em',
                          padding: '2px 6px', borderRadius: '4px',
                          color: rarityMeta.color,
                          background: `${rarityMeta.color}15`,
                          border: `1px solid ${rarityMeta.color}30`,
                        }}>
                          {rarityMeta.label}
                        </span>
                      )}
                      {isEquipped && (
                        <span style={{
                          fontSize: '9px', fontWeight: 700,
                          padding: '2px 6px', borderRadius: '4px',
                          color: '#ffd261',
                          background: 'rgba(255,210,97,0.15)',
                        }}>
                          장착 중
                        </span>
                      )}
                    </div>
                    <p style={{
                      fontSize: '11px',
                      color: isUnlocked ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)',
                      margin: '2px 0 0',
                    }}>
                      {isSecret ? '조건 미달성' : title.desc}
                    </p>
                  </div>

                  {/* Equip indicator */}
                  {isUnlocked && !isEquipped && (
                    <div style={{
                      fontSize: '11px', color: 'rgba(255,255,255,0.25)',
                      flexShrink: 0,
                    }}>
                      탭하여 장착
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  )
}
