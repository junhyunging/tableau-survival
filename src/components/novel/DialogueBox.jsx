import { useState, useEffect, useCallback } from 'react'
import { CHARACTERS } from '../../data/characters'

export default function DialogueBox({ speaker, text, onAdvance, playerName }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const fullText = text.replace(/{playerName}/g, playerName || '')

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(true)
    let i = 0
    const interval = setInterval(() => {
      i++
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i))
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 25)
    return () => clearInterval(interval)
  }, [fullText])

  const handleClick = useCallback(() => {
    if (isTyping) {
      setDisplayedText(fullText)
      setIsTyping(false)
      return
    }
    onAdvance()
  }, [isTyping, fullText, onAdvance])

  const isNarrator = speaker === 'narrator'
  const isPlayer = speaker === 'player'
  const character = CHARACTERS[speaker]
  const speakerName = isNarrator
    ? ''
    : isPlayer
      ? playerName
      : character?.name || speaker
  const nameColor = isPlayer ? '#a78bfa' : character?.nameColor || '#5b8df0'

  return (
    <div className="vn-dialogue-container" onClick={handleClick}>
      <div className="vn-dialogue-box">
        {speakerName && (
          <div className="vn-speaker-name" style={{ color: nameColor }}>
            {speakerName}
          </div>
        )}
        <div className={`vn-dialogue-text ${isNarrator ? 'narrator' : ''}`}>
          {displayedText}
          {isTyping && <span className="vn-cursor" />}
        </div>
        <div className="vn-dialogue-hint">
          {isTyping ? '' : '▸'}
        </div>
      </div>
    </div>
  )
}
