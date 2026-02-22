import { useState, useEffect } from 'react'

export default function CGViewer({ cgKey, partnerId, onDismiss }) {
  const [phase, setPhase] = useState('in')

  const imgPath = `/images/CG/cg_${cgKey}_${partnerId}.jpeg`

  useEffect(() => {
    const t = setTimeout(() => setPhase('show'), 50)
    return () => clearTimeout(t)
  }, [])

  const handleDismiss = () => {
    if (phase !== 'show') return
    setPhase('out')
    setTimeout(onDismiss, 700)
  }

  return (
    <div
      onClick={handleDismiss}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: '#000',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: phase === 'show' ? 1 : 0,
        transition: phase === 'out' ? 'opacity 0.7s ease' : 'opacity 0.8s ease',
      }}
    >
      {/* CG image */}
      <img
        src={imgPath}
        alt=""
        style={{
          width: '100%', height: '100%',
          objectFit: 'contain',
          display: 'block',
          transform: phase === 'show' ? 'scale(1)' : 'scale(1.03)',
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        draggable={false}
      />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)',
      }} />

      {/* Tap hint */}
      <div style={{
        position: 'absolute', bottom: '28px', right: '28px',
        display: 'flex', alignItems: 'center', gap: '8px',
        pointerEvents: 'none',
        opacity: phase === 'show' ? 1 : 0,
        transition: 'opacity 0.4s ease 1s',
      }}>
        <span style={{
          fontSize: '11px', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          animation: 'cgHintPulse 2.5s ease-in-out infinite',
        }}>
          Tap to continue
        </span>
        <div style={{
          width: '5px', height: '5px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.4)',
          animation: 'cgHintPulse 2.5s ease-in-out infinite 0.3s',
        }} />
      </div>

      <style>{`
        @keyframes cgHintPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  )
}
