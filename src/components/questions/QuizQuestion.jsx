import { useState } from 'react'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { checkQuizAnswer } from '../../utils/quizChecker'
import { EXPRESSION_EMOJI } from '../story/VisualNovel'

export default function QuizQuestion({ problem, onComplete }) {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [selectedIds, setSelectedIds] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const handleSelect = (optionId) => {
    if (submitted) return

    if (problem.selectType === 'single') {
      setSelectedIds([optionId])
    } else {
      setSelectedIds((prev) =>
        prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId]
      )
    }
  }

  const handleSubmit = () => {
    if (selectedIds.length === 0) return

    const correct = checkQuizAnswer(problem, selectedIds)
    setIsCorrect(correct)
    setSubmitted(true)

    if (correct) {
      dispatch({ type: 'ANSWER_CORRECT', payload: { problemId: problem.id } })
    } else {
      dispatch({ type: 'ANSWER_INCORRECT', payload: { problemId: problem.id } })
    }
  }

  const handleContinue = () => {
    onComplete(isCorrect)
  }

  const handleRetry = () => {
    setSelectedIds([])
    setSubmitted(false)
    setIsCorrect(false)
    setShowHint(true)
  }

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-up">
      {/* Main card */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/30">
        {/* Card background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a2e] via-[#111d33] to-[#0d1626]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,141,240,0.06),transparent_50%)]" />

        <div className="relative">
          {/* Top bar - boss + category */}
          <div className="flex items-center justify-between px-7 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-xl border border-accent/20">
                {EXPRESSION_EMOJI.seoyeon[submitted ? (isCorrect ? 'smile' : 'serious') : 'default']}
              </div>
              <div>
                <p className="text-[15px] text-white/90 font-medium leading-snug">
                  {submitted
                    ? isCorrect
                      ? '정답입니다! 잘했어요.'
                      : '틀렸습니다. 다시 생각해보세요.'
                    : problem.context || '문제를 풀어보세요.'}
                </p>
              </div>
            </div>
            <span className="text-[11px] px-3 py-1.5 bg-white/[0.06] text-white/40 rounded-lg font-medium border border-white/[0.04] shrink-0 ml-4">
              {problem.selectType === 'single' ? '단일 선택' : '다중 선택'}
            </span>
          </div>

          {/* Divider */}
          <div className="mx-7 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

          {/* Question */}
          <div className="px-7 pt-6 pb-2">
            <h3 className="text-[19px] font-bold text-white leading-relaxed tracking-[-0.01em]">
              {problem.question}
            </h3>
          </div>

          {/* Options */}
          <div className="px-7 pt-4 pb-6 flex flex-col gap-2.5">
            {problem.options.map((option, idx) => {
              const isSelected = selectedIds.includes(option.id)
              let cardBg = 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]'
              let indicatorStyle = 'border-white/20 text-white/30'
              let labelColor = 'text-white/75'

              if (submitted) {
                if (option.isCorrect) {
                  cardBg = 'bg-emerald-500/[0.08] border-emerald-400/30'
                  indicatorStyle = 'border-emerald-400 bg-emerald-500 text-white'
                  labelColor = 'text-emerald-300'
                } else if (isSelected && !option.isCorrect) {
                  cardBg = 'bg-red-500/[0.08] border-red-400/30'
                  indicatorStyle = 'border-red-400 bg-red-500 text-white'
                  labelColor = 'text-red-300'
                } else {
                  cardBg = 'bg-white/[0.01] border-white/[0.03] opacity-30'
                  indicatorStyle = 'border-white/10 text-white/15'
                  labelColor = 'text-white/30'
                }
              } else if (isSelected) {
                cardBg = 'bg-accent/[0.1] border-accent/40 shadow-[0_0_20px_rgba(91,141,240,0.08)]'
                indicatorStyle = 'border-accent bg-accent text-white'
                labelColor = 'text-white/90'
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  disabled={submitted}
                  className={`quiz-option group w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 cursor-pointer disabled:cursor-default ${cardBg}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center text-[11px] font-bold shrink-0 transition-all duration-200 ${indicatorStyle}`}>
                      {submitted
                        ? (option.isCorrect ? '✓' : isSelected ? '✗' : '')
                        : (isSelected ? '●' : String.fromCharCode(65 + idx))}
                    </span>
                    <span className={`text-[15px] leading-relaxed transition-colors ${labelColor}`}>
                      {option.text}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Hint */}
          {showHint && problem.hint && !submitted && (
            <div className="mx-7 mb-5 p-4 bg-amber-500/[0.06] border border-amber-400/20 rounded-xl">
              <p className="text-[13px] text-amber-300/90 leading-relaxed">
                <span className="font-semibold text-amber-300 mr-1.5">힌트</span>
                {problem.hint}
              </p>
            </div>
          )}

          {/* Explanation after submit */}
          {submitted && (
            <div className={`mx-7 mb-5 p-5 rounded-xl border ${
              isCorrect
                ? 'bg-emerald-500/[0.06] border-emerald-400/20'
                : 'bg-red-500/[0.06] border-red-400/20'
            }`}>
              <p className={`font-bold text-[15px] mb-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                {isCorrect ? '정답!' : '오답'}
              </p>
              <p className="text-[14px] text-white/60 leading-relaxed">{problem.explanation}</p>
            </div>
          )}

          {/* Bottom actions */}
          <div className="px-7 pb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {!submitted && !showHint && problem.hint && (
                <button
                  onClick={() => {
                    dispatch({ type: 'USE_HINT' })
                    setShowHint(true)
                  }}
                  disabled={state.hints <= 0}
                  className="text-[13px] text-white/30 hover:text-white/60 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/30"
                >
                  {state.hints <= 0 ? '힌트 없음' : '힌트 보기'}
                </button>
              )}
              {!submitted && problem.hint && (
                <span className="text-[12px] text-white/25">💡 ×{state.hints}</span>
              )}
            </div>
            <div className="flex gap-2.5">
              {!submitted && (
                <button
                  onClick={handleSubmit}
                  disabled={selectedIds.length === 0}
                  className="px-7 py-2.5 bg-accent hover:bg-accent-glow disabled:bg-white/[0.04] disabled:text-white/20 text-white rounded-xl text-[15px] font-semibold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed hover:shadow-[0_0_24px_rgba(91,141,240,0.25)]"
                >
                  제출
                </button>
              )}

              {submitted && !isCorrect && (
                <button
                  onClick={handleRetry}
                  className="px-6 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white/80 rounded-xl text-[15px] font-medium cursor-pointer transition-all"
                >
                  다시 풀기
                </button>
              )}

              {submitted && (
                <button
                  onClick={handleContinue}
                  className="px-7 py-2.5 bg-accent hover:bg-accent-glow text-white rounded-xl text-[15px] font-semibold cursor-pointer transition-all duration-200 hover:shadow-[0_0_24px_rgba(91,141,240,0.25)]"
                >
                  {isCorrect ? '다음으로' : '넘어가기'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
