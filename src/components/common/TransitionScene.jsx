import { useState, useEffect } from 'react'

export default function TransitionScene({ day, title, subtitle, onComplete }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 100)
    const hideTimer = setTimeout(() => {
      setVisible(false)
      setTimeout(onComplete, 500)
    }, 2500)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [onComplete])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div
        className={`text-center transition-all duration-700 relative z-10 ${
          visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/15 rounded-full mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-accent text-sm font-bold tracking-wider">DAY {day}</span>
        </div>
        <h1 className="text-4xl font-extrabold mb-3 text-text-primary">{title}</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-text-dim" />
          <p className="text-text-secondary text-lg">{subtitle}</p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-text-dim" />
        </div>
      </div>
    </div>
  )
}
