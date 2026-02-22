import { useState } from 'react'
import { useGameDispatch } from '../../hooks/useGameState'
import { CHARACTERS, getPartnerCharacter } from '../../data/characters'

export default function CharacterSetup() {
  const dispatch = useGameDispatch()
  const [name, setName] = useState('')
  const [gender, setGender] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && gender) {
      dispatch({ type: 'START_NEW_GAME', payload: { name: name.trim(), gender } })
    }
  }

  const partnerId = gender ? getPartnerCharacter(gender) : null
  const partner = partnerId ? CHARACTERS[partnerId] : null

  const ready = name.trim() && gender

  return (
    <div style={{
      position: 'relative', minHeight: '100vh', width: '100%',
      overflow: 'hidden', background: '#080e1a',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Ambient bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(91,141,240,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(240,91,141,0.08) 0%, transparent 50%)',
      }} />

      {/* Main card */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '900px',
        margin: '20px', borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(160deg, rgba(17,29,48,0.95), rgba(8,14,26,0.98))',
        boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
        overflow: 'hidden',
      }}>
        {/* Top accent line */}
        <div style={{
          height: '3px',
          background: 'linear-gradient(90deg, #5b8df0, #b07aa1, #e8832a)',
        }} />

        <div style={{
          display: 'flex', flexDirection: 'row',
          minHeight: '520px',
        }}>
          {/* Left: Form */}
          <div style={{
            flex: 1, padding: '36px 32px',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Title */}
            <div>
              <div style={{
                display: 'inline-block', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.25em', color: '#5b8df0',
                padding: '4px 12px', borderRadius: '99px',
                background: 'rgba(91,141,240,0.12)',
                textTransform: 'uppercase',
              }}>
                New Game
              </div>
              <h1 style={{
                fontSize: '26px', fontWeight: 900, color: '#fff',
                margin: '12px 0 0', lineHeight: 1.2,
              }}>
                프로필 설정
              </h1>
              <p style={{
                fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                margin: '8px 0 0', lineHeight: 1.5,
              }}>
                이름과 성별을 선택하면 파트너가 매칭됩니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
              {/* Name input */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                  이름
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="플레이어 이름 입력"
                  maxLength={10}
                  autoFocus
                  style={{
                    width: '100%', padding: '12px 16px',
                    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff', fontSize: '15px', outline: 'none',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#5b8df0'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                />
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '6px' }}>최대 10자</p>
              </div>

              {/* Gender selection */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
                  성별 선택
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {[
                    { value: 'male', label: '남성', icon: '♂', partnerId: 'sohee', desc: '정소희와 함께', color: '#5b8df0' },
                    { value: 'female', label: '여성', icon: '♀', partnerId: 'junhyung', desc: '신준형과 함께', color: '#f05b8d' },
                  ].map((opt) => {
                    const sel = gender === opt.value
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setGender(opt.value)}
                        style={{
                          padding: '16px 14px',
                          borderRadius: '14px',
                          border: sel ? `2px solid ${opt.color}` : '2px solid rgba(255,255,255,0.08)',
                          background: sel ? `${opt.color}15` : 'rgba(255,255,255,0.03)',
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.3s',
                          boxShadow: sel ? `0 0 20px ${opt.color}22` : 'none',
                        }}
                      >
                        <div style={{ fontSize: '28px', lineHeight: 1 }}>{opt.icon}</div>
                        <p style={{
                          fontSize: '16px', fontWeight: 700, margin: '8px 0 0',
                          color: sel ? '#fff' : 'rgba(255,255,255,0.7)',
                        }}>{opt.label}</p>
                        <p style={{
                          fontSize: '11px', margin: '4px 0 0',
                          color: sel ? opt.color : 'rgba(255,255,255,0.4)',
                        }}>{opt.desc}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Info box */}
              <div style={{
                padding: '12px 14px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
                  <span style={{ color: '#5b8df0', fontWeight: 600 }}>멘토:</span> 박서연 팀장
                  <br />
                  <span style={{ color: '#59a14f', fontWeight: 600 }}>조직:</span> 그로우랩 (GrowLab) 데이터팀
                  <br />
                  <span style={{ color: '#e8832a', fontWeight: 600 }}>직무:</span> 수습 데이터 분석가 (20챕터 퀘스트)
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!ready}
                style={{
                  marginTop: 'auto',
                  padding: '14px 0',
                  borderRadius: '14px',
                  border: ready ? '1px solid rgba(91,141,240,0.4)' : '1px solid rgba(255,255,255,0.06)',
                  background: ready
                    ? 'linear-gradient(135deg, #5b8df0, #3d6fdf)'
                    : 'rgba(255,255,255,0.04)',
                  color: ready ? '#fff' : 'rgba(255,255,255,0.25)',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: ready ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s',
                  boxShadow: ready ? '0 8px 30px rgba(91,141,240,0.3)' : 'none',
                }}
              >
                {ready ? '게임 시작' : '이름과 성별을 선택하세요'}
              </button>
            </form>
          </div>

          {/* Right: Partner preview */}
          <div style={{
            width: '340px',
            position: 'relative',
            overflow: 'hidden',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {partner ? (
              <>
                <img
                  src={partner.expressions.default}
                  alt={partner.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'top center',
                    display: 'block',
                  }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,14,26,0.95) 0%, rgba(8,14,26,0.3) 30%, transparent 60%)',
                }} />
                {/* Partner info */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '20px',
                }}>
                  <p style={{
                    fontSize: '11px', fontWeight: 600,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>Partner</p>
                  <p style={{
                    fontSize: '22px', fontWeight: 800,
                    color: partner.nameColor,
                    margin: '4px 0 0',
                  }}>{partner.name}</p>
                  <p style={{
                    fontSize: '13px', color: 'rgba(255,255,255,0.6)',
                    margin: '4px 0 0', lineHeight: 1.5,
                  }}>
                    {partnerId === 'sohee'
                      ? '밝고 사근사근한 동기. 학습을 도와주는 따뜻한 파트너.'
                      : '쿨하고 실력 있는 동기. 실전 감각을 끌어올려주는 파트너.'}
                  </p>
                </div>
              </>
            ) : (
              <div style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '40px',
              }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  border: '2px dashed rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <span style={{ fontSize: '30px', opacity: 0.3 }}>?</span>
                </div>
                <p style={{
                  fontSize: '14px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.4)',
                  textAlign: 'center',
                }}>
                  성별을 선택하면
                  <br />
                  파트너가 표시됩니다
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile responsive - stack vertically on small screens */}
      <style>{`
        @media (max-width: 768px) {
          .setup-card-inner { flex-direction: column !important; }
          .setup-partner { width: 100% !important; height: 300px !important; border-left: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
        }
      `}</style>
    </div>
  )
}
