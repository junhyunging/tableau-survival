import { useState } from 'react'
import StoryScene from './StoryScene'

export default function ChoicePanel({ choices, playerName, onComplete }) {
  const [selected, setSelected] = useState(null)
  const [showResponse, setShowResponse] = useState(false)

  const handleChoice = (index) => {
    setSelected(index)
    setShowResponse(true)
  }

  const handleResponseComplete = () => {
    const choice = choices[selected]
    onComplete({
      choiceIndex: selected,
      gaugeChange: choice.gaugeChange,
    })
  }

  if (showResponse && selected !== null) {
    return (
      <StoryScene
        dialogues={choices[selected].response}
        playerName={playerName}
        onComplete={handleResponseComplete}
      />
    )
  }

  return (
    <div className="w-full animate-slide-up">
      <div className="dialogue-box p-5 mb-4">
        <p className="text-sm text-text-secondary text-center">선택지를 골라주세요</p>
      </div>
      <div className="flex flex-col gap-3">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(index)}
            className="choice-btn w-full py-4 px-6 bg-bg-secondary hover:bg-bg-card text-left text-text-primary rounded-xl border border-white/10 hover:border-accent/40 transition-all hover:translate-x-1 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-xs font-bold text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
                {index + 1}
              </span>
              <span className="text-[15px] flex-1">{choice.text}</span>
              {choice.gaugeChange !== 0 && (
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${choice.gaugeChange > 0 ? 'text-gauge-high bg-gauge-high/10' : 'text-gauge-low bg-gauge-low/10'}`}>
                  {choice.gaugeChange > 0 ? '+' : ''}{choice.gaugeChange}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
