import { useState, useEffect } from 'react'
import {
  useGameState, useGameDispatch, clearSavedGame,
  getLevelTitle, getAffectionStage, getAffectionLabel,
} from '../../hooks/useGameState'
import { useNavigate } from 'react-router-dom'
import { getPartnerCharacter, getCharacterName, getCharacterImage, BACKGROUNDS } from '../../data/characters'

const GRADE_CONFIG = {
  S: { text: '#ffd261', bg: 'rgba(255,210,97,0.12)', border: 'rgba(255,210,97,0.3)', glow: 'rgba(255,210,97,0.3)' },
  A: { text: '#48A868', bg: 'rgba(72,168,104,0.12)', border: 'rgba(72,168,104,0.3)', glow: 'rgba(72,168,104,0.2)' },
  B: { text: '#f0a05b', bg: 'rgba(240,160,91,0.12)', border: 'rgba(240,160,91,0.3)', glow: 'rgba(240,160,91,0.2)' },
  C: { text: '#8899b0', bg: 'rgba(136,153,176,0.12)', border: 'rgba(136,153,176,0.3)', glow: 'rgba(136,153,176,0.15)' },
}

function getEnding(state, partnerName) {
  if (state.level >= 9 && state.affection >= 80) {
    return {
      title: '태블로 마스터 & 해피엔딩',
      grade: 'S',
      message: `"${state.playerName}... 솔직히 이렇게 빠르게 성장할 줄 몰랐어요. 앞으로도 함께 일하고 싶어요."`,
      speaker: partnerName,
      epilogue: '수습을 마치고 정식 시니어 분석가가 됐다. 그리고, 더 중요한 것도 얻었다.',
    }
  }
  if (state.level >= 7) {
    return {
      title: '시니어 분석가 달성',
      grade: 'A',
      message: `"${state.playerName}님, 수고했어요. 우리 팀에 있어줘서 다행이에요."`,
      speaker: '박서연',
      epilogue: '수습 기간을 통과하고 시니어 분석가로 성장했다. 아직 갈 길이 있지만, 방향이 보인다.',
    }
  }
  if (state.level >= 4) {
    return {
      title: '분석가의 길',
      grade: 'B',
      message: '"아직 갈 길이 멀지만, 충분히 성장했어요. 계속 이 방향으로 가요."',
      speaker: '박서연',
      epilogue: '성장했다. 처음보다 훨씬. 다음엔 더 잘할 수 있을 것 같다.',
    }
  }
  return {
    title: '수습 통과',
    grade: 'C',
    message: '"조금 더 노력하면 좋은 분석가가 될 거예요. 포기하지 마요."',
    speaker: '박서연',
    epilogue: '수습은 통과했다. 아직 배울 것이 많다는 걸 알게 됐다.',
  }
}

export default function GameComplete() {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const navigate = useNavigate()
  const [phase, setPhase] = useState(0) // 0 = loading, 1 = showing

  const partnerId = getPartnerCharacter(state.playerGender)
  const partnerName = getCharacterName(partnerId)
  const partnerImg = getCharacterImage(partnerId, 'default')
  const affectionStage = getAffectionStage(state.affection)
  const affectionLabel = getAffectionLabel(affectionStage)
  const ending = getEnding(state, partnerName)
  const cfg = GRADE_CONFIG[ending.grade]

  const accuracy = (state.correctCount + state.incorrectCount) > 0
    ? Math.round((state.correctCount / (state.correctCount + state.incorrectCount)) * 100)
    : 0

  // Total stars
  const totalStars = Object.values(state.chapterStars || {}).reduce((a, b) => a + b, 0)
  const maxStars = 60

  useEffect(() => {
    const t = setTimeout(() => setPhase(1), 100)
    return () => clearTimeout(t)
  }, [])

  const handleRestart = () => {
    clearSavedGame()
    dispatch({ type: 'RESET' })
    navigate('/')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#060d1a',
      display: 'flex',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ending credits background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${BACKGROUNDS.ending_credits})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: phase === 1 ? 0.18 : 0,
        transition: 'opacity 2s ease 0.3s',
      }} />

      {/* Partner background image */}
      {affectionStage >= 4 && partnerImg && (
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '45%',
          backgroundImage: `url(${partnerImg})`,
          backgroundSize: 'cover', backgroundPosition: 'top center',
          opacity: phase === 1 ? 0.25 : 0,
          transition: 'opacity 1.5s ease 0.5s',
          maskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%)',
        }} />
      )}

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '40%', left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px', borderRadius: '50%',
          background: `radial-gradient(ellipse, ${cfg.glow} 0%, transparent 70%)`,
          opacity: phase === 1 ? 1 : 0,
          transition: 'opacity 1s ease',
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        flex: 1, display: 'flex', alignItems: 'center',
        padding: '40px 24px',
        maxWidth: '640px', margin: '0 auto',
      }}>
        <div style={{
          width: '100%',
          opacity: phase === 1 ? 1 : 0,
          transform: phase === 1 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {/* Grade + Title */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: cfg.bg, border: `2px solid ${cfg.border}`,
                boxShadow: `0 0 24px ${cfg.glow}`,
              }}>
                <span style={{
                  fontSize: '24px', fontWeight: 900,
                  color: cfg.text,
                }}>
                  {ending.grade}
                </span>
              </div>
              <div>
                <p style={{
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)', margin: 0,
                }}>
                  Game Complete
                </p>
                <h1 style={{
                  fontSize: '22px', fontWeight: 900,
                  color: '#e8edf5', margin: '4px 0 0',
                  lineHeight: 1.2,
                }}>
                  {ending.title}
                </h1>
              </div>
            </div>
            <p style={{
              fontSize: '14px', color: 'rgba(255,255,255,0.5)',
              fontStyle: 'italic', margin: 0,
            }}>
              {ending.epilogue}
            </p>
          </div>

          {/* Level & Affection badges */}
          <div style={{
            display: 'flex', gap: '8px', flexWrap: 'wrap',
            marginBottom: '20px',
          }}>
            <span style={{
              padding: '5px 14px', borderRadius: '99px',
              background: 'rgba(91,141,240,0.12)',
              border: '1px solid rgba(91,141,240,0.2)',
              fontSize: '13px', fontWeight: 700, color: '#5b8df0',
            }}>
              Lv.{state.level} {state.currentTitle}
            </span>
            <span style={{
              padding: '5px 14px', borderRadius: '99px',
              background: 'rgba(240,91,141,0.12)',
              border: '1px solid rgba(240,91,141,0.2)',
              fontSize: '13px', fontWeight: 600, color: '#f05b8d',
            }}>
              {partnerName} {affectionLabel}
            </span>
          </div>

          {/* Quote card */}
          <div style={{
            background: 'linear-gradient(160deg, rgba(17,29,48,0.85), rgba(8,14,26,0.9))',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '18px 20px',
            marginBottom: '16px',
          }}>
            <p style={{
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.1em', color: cfg.text,
              margin: '0 0 8px', textTransform: 'uppercase',
            }}>
              {ending.speaker}
            </p>
            <p style={{
              fontSize: '15px', color: '#e8edf5',
              lineHeight: 1.7, margin: 0,
              fontStyle: 'italic',
            }}>
              {ending.message}
            </p>
          </div>

          {/* Stats grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px',
            marginBottom: '24px',
          }}>
            {[
              { label: '총 정답', value: state.correctCount, color: '#48A868' },
              { label: '정확도', value: `${accuracy}%`, color: '#e8edf5' },
              { label: '총 XP', value: state.xp, color: '#5b8df0' },
              { label: '별 수집', value: `${totalStars}/${maxStars}`, color: '#ffd261' },
            ].map((s) => (
              <div key={s.label} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '12px 8px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button
            onClick={handleRestart}
            style={{
              width: '100%', padding: '16px',
              borderRadius: '16px', border: 'none',
              background: 'linear-gradient(135deg, #5b8df0, #3d6fdf)',
              color: '#fff', fontSize: '16px', fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(91,141,240,0.3)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.02)'
              e.target.style.boxShadow = '0 12px 40px rgba(91,141,240,0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = '0 8px 32px rgba(91,141,240,0.3)'
            }}
          >
            처음부터 다시 하기
          </button>
        </div>
      </div>
    </div>
  )
}
