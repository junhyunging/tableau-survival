import { useState, useEffect } from 'react'

export default function TransitionScene({ day, title, subtitle, onComplete }) {
  const [phase, setPhase] = useState('enter') // enter → hold → exit

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('hold'), 200)
    const exitTimer = setTimeout(() => setPhase('exit'), 2600)
    const doneTimer = setTimeout(() => onComplete(), 3200)

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  const isVisible = phase === 'hold'
  const isExit = phase === 'exit'

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: '#060d1a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        opacity: isExit ? 0 : 1,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* Ambient lines */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(91,141,240,0.2) 20%, rgba(91,141,240,0.4) 50%, rgba(91,141,240,0.2) 80%, transparent 100%)',
          transform: `translateY(-50%) scaleX(${isVisible ? 1 : 0})`,
          transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
          transformOrigin: 'center',
        }} />
        <div style={{
          position: 'absolute', top: 'calc(50% - 80px)', left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(91,141,240,0.08) 50%, transparent 100%)',
          transform: `translateY(-50%) scaleX(${isVisible ? 1 : 0})`,
          transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
          transformOrigin: 'center',
        }} />
        <div style={{
          position: 'absolute', top: 'calc(50% + 80px)', left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(91,141,240,0.08) 50%, transparent 100%)',
          transform: `translateY(-50%) scaleX(${isVisible ? 1 : 0})`,
          transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
          transformOrigin: 'center',
        }} />
      </div>

      {/* Center glow */}
      <div style={{
        position: 'absolute',
        width: '500px', height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(91,141,240,0.07) 0%, transparent 70%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.96)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Chapter badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px',
          borderRadius: '99px',
          background: 'rgba(91,141,240,0.12)',
          border: '1px solid rgba(91,141,240,0.2)',
          marginBottom: '20px',
        }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#5b8df0',
            boxShadow: '0 0 8px rgba(91,141,240,0.6)',
          }} />
          <span style={{
            fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#5b8df0',
            textTransform: 'uppercase',
          }}>
            Chapter {day}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 44px)',
          fontWeight: 900,
          color: '#e8edf5',
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          {title}
        </h1>

        {/* Divider + Subtitle */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '12px', marginTop: '16px',
        }}>
          <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2))' }} />
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.45)',
            margin: 0,
            fontStyle: 'italic',
          }}>
            {subtitle}
          </p>
          <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.2))' }} />
        </div>
      </div>
    </div>
  )
}
