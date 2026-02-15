import { useState, useEffect, useCallback } from 'react'
import VisualNovel, { CHARACTER_NAMES } from './VisualNovel'

export default function StoryScene({ dialogues, playerName, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const currentDialogue = dialogues[currentIndex]
  const fullText = currentDialogue?.text.replace('{playerName}', playerName) || ''

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
    }, 30)

    return () => clearInterval(interval)
  }, [currentIndex, fullText])

  const handleClick = useCallback(() => {
    if (isTyping) {
      setDisplayedText(fullText)
      setIsTyping(false)
      return
    }

    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      onComplete()
    }
  }, [isTyping, currentIndex, dialogues.length, fullText, onComplete])

  if (!currentDialogue) return null

  const speakerName =
    currentDialogue.speaker === 'narrator'
      ? ''
      : CHARACTER_NAMES[currentDialogue.speaker] || currentDialogue.speaker

  const isNarrator = currentDialogue.speaker === 'narrator'

  return (
    <div className="w-full cursor-pointer select-none" onClick={handleClick}>
      <VisualNovel
        speaker={currentDialogue.speaker}
        expression={currentDialogue.expression}
      />

      <div className="dialogue-box p-6">
        {speakerName && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-accent">{speakerName}</span>
            <div className="h-px flex-1 bg-accent/10" />
          </div>
        )}

        <div className={`text-[15px] leading-relaxed min-h-[3.5rem] ${isNarrator ? 'text-text-secondary italic' : 'text-text-primary'}`}>
          {displayedText}
          {isTyping && <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 align-middle" style={{ animation: 'typing-cursor 0.8s steps(1) infinite' }} />}
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
          <span className="text-[11px] text-text-dim">
            {currentIndex + 1} / {dialogues.length}
          </span>
          <span className="text-[11px] text-text-dim">
            {isTyping ? '클릭하여 스킵' : currentIndex < dialogues.length - 1 ? '클릭하여 계속 ▸' : '클릭하여 진행 ▸'}
          </span>
        </div>
      </div>
    </div>
  )
}
