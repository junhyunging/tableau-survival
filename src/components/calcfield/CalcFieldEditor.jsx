import { useState, useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { createTheme } from '@uiw/codemirror-themes'
import { tags as t } from '@lezer/highlight'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { validateSyntax, checkCalcAnswer, getPartialFeedback } from '../../utils/calcFieldValidator'
import FieldReference from './FieldReference'
import FunctionReference from './FunctionReference'
import { EXPRESSION_EMOJI } from '../story/VisualNovel'

const tableauEditorTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#1a2332',
    foreground: '#e0e8f0',
    caret: '#5b8df0',
    selection: '#5b8df033',
    selectionMatch: '#5b8df022',
    lineHighlight: '#ffffff08',
    gutterBackground: '#141c28',
    gutterForeground: '#4a5568',
  },
  styles: [
    { tag: t.keyword, color: '#c792ea' },
    { tag: t.string, color: '#c3e88d' },
    { tag: t.number, color: '#82aaff' },
    { tag: t.function(t.variableName), color: '#82aaff' },
    { tag: t.comment, color: '#546e7a' },
    { tag: t.bracket, color: '#89ddff' },
  ],
})

export default function CalcFieldEditor({ problem, onComplete }) {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [formula, setFormula] = useState('')
  const [syntaxIssues, setSyntaxIssues] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [showSample, setShowSample] = useState(false)

  const handleChange = useCallback((value) => {
    setFormula(value)
    setSyntaxIssues(validateSyntax(value))
  }, [])

  const handleInsert = useCallback((text) => {
    setFormula((prev) => prev + text)
  }, [])

  const handleSubmit = () => {
    if (!formula.trim()) return
    const result = checkCalcAnswer(formula, problem.correctPatterns)
    setIsCorrect(result.isCorrect)
    setSubmitted(true)
    if (result.isCorrect) {
      dispatch({ type: 'ANSWER_CORRECT', payload: { problemId: problem.id } })
      setFeedback('정답입니다!')
    } else {
      dispatch({ type: 'ANSWER_INCORRECT', payload: { problemId: problem.id } })
      setFeedback(getPartialFeedback(formula, problem.partialFeedback) || '다시 확인해보세요.')
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      {/* Boss instruction */}
      <div className="flex items-center gap-3 mb-3 px-1">
        <div className="w-9 h-9 rounded-full bg-bg-card flex items-center justify-center text-lg shrink-0 border-2 border-accent/30">
          {EXPRESSION_EMOJI.seoyeon[submitted ? (isCorrect ? 'smile' : 'serious') : 'default']}
        </div>
        <div className="flex-1 bg-bg-secondary/80 rounded-lg px-4 py-2.5 border border-white/5">
          <span className="text-[13px] text-text-primary whitespace-pre-line">{problem.instruction}</span>
        </div>
      </div>

      {/* Tableau-style editor workspace */}
      <div className="tableau-workspace rounded overflow-hidden border border-tab-toolbar-border shadow-lg bg-tab-bg">
        {/* Toolbar */}
        <div className="h-7 bg-tab-toolbar border-b border-tab-toolbar-border flex items-center px-3">
          <span className="text-[12px] font-bold text-tab-text">계산된 필드</span>
          <span className="mx-2 text-tab-divider">|</span>
          <span className="text-[12px] text-tab-text-dim">필드 이름:</span>
          <span className="text-[12px] font-bold text-tab-accent ml-1">{problem.fieldName}</span>
        </div>

        <div className="flex" style={{ height: 'calc(100vh - 280px)', minHeight: '280px' }}>
          {/* Editor area */}
          <div className="flex-1 flex flex-col border-r border-tab-divider">
            <div className="flex-1 min-h-0">
              <CodeMirror
                value={formula}
                height="100%"
                onChange={handleChange}
                theme={tableauEditorTheme}
                basicSetup={{
                  lineNumbers: true,
                  foldGutter: false,
                  highlightActiveLine: true,
                  bracketMatching: true,
                }}
                readOnly={submitted}
                className="h-full [&_.cm-editor]:h-full"
              />
            </div>

            {/* Status bar */}
            <div className="h-7 px-3 border-t border-tab-divider bg-tab-toolbar flex items-center justify-between">
              {syntaxIssues.length === 0 && formula.trim() ? (
                <span className="text-[10px] text-green-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  계산이 유효합니다
                </span>
              ) : syntaxIssues.length > 0 ? (
                <span className="text-[10px] text-tab-red font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                  {syntaxIssues[0].message}
                </span>
              ) : (
                <span className="text-[10px] text-tab-text-muted">수식을 입력하세요</span>
              )}
              <span className="text-[10px] text-tab-text-muted">{formula.length}자</span>
            </div>
          </div>

          {/* Reference panel */}
          <div className="w-[260px] shrink-0 bg-tab-surface overflow-y-auto p-3">
            <FieldReference fields={problem.availableFields} onInsert={handleInsert} />
            <div className="border-t border-tab-divider my-3" />
            <FunctionReference onInsert={handleInsert} />
          </div>
        </div>
      </div>

      {/* Hint */}
      {showHint && problem.hint && !submitted && (
        <div className="mt-3 p-3 bg-tab-orange/10 border border-tab-orange/30 rounded-lg text-sm text-tab-orange">
          💡 {problem.hint}
        </div>
      )}
      {showHint && !submitted && (
        <div className="mt-2 px-1">
          <button onClick={() => setShowSample(!showSample)} className="text-[11px] text-text-dim hover:text-accent cursor-pointer">
            {showSample ? '▼ 정답 예시 숨기기' : '▶ 정답 예시 보기'}
          </button>
          {showSample && (
            <pre className="mt-1 p-3 bg-bg-card rounded-lg text-[12px] text-gauge-high font-mono whitespace-pre-wrap border border-white/5">
              {problem.sampleAnswer}
            </pre>
          )}
        </div>
      )}

      {/* Feedback */}
      {submitted && (
        <div className={`mt-3 p-4 rounded-lg text-sm ${isCorrect ? 'bg-gauge-high/10 border border-gauge-high/30' : 'bg-gauge-low/10 border border-gauge-low/30'}`}>
          <p className="font-semibold mb-1">{isCorrect ? '✅ 정답!' : '❌ 오답'}</p>
          <p className="text-text-secondary mb-1">{feedback}</p>
          <p className="text-text-secondary text-[12px]">{problem.explanation}</p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3 justify-end items-center mt-3">
        {!submitted && problem.hint && (
          <span className="text-[12px] text-white/25 mr-1">💡 ×{state.hints}</span>
        )}
        {!submitted && !showHint && problem.hint && (
          <button
            onClick={() => {
              dispatch({ type: 'USE_HINT' })
              setShowHint(true)
            }}
            disabled={state.hints <= 0}
            className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-text-secondary"
          >
            {state.hints <= 0 ? '💡 힌트 없음' : '💡 힌트'}
          </button>
        )}
        {!submitted && (
          <button onClick={handleSubmit} disabled={!formula.trim()}
            className="px-6 py-2 bg-accent hover:bg-accent-glow disabled:bg-bg-card disabled:text-text-dim text-white rounded-lg font-semibold cursor-pointer disabled:cursor-not-allowed transition-colors">
            제출하기
          </button>
        )}
        {submitted && !isCorrect && (
          <button onClick={() => { setSubmitted(false); setIsCorrect(false); setFeedback(''); setShowHint(true) }}
            className="px-6 py-2 bg-tab-orange hover:bg-tab-orange/80 text-white rounded-lg font-semibold cursor-pointer">
            다시 풀기
          </button>
        )}
        {submitted && (
          <button onClick={() => onComplete(isCorrect)}
            className="px-6 py-2 bg-accent hover:bg-accent-glow text-white rounded-lg font-semibold cursor-pointer transition-colors">
            {isCorrect ? '다음으로' : '넘어가기'}
          </button>
        )}
      </div>
    </div>
  )
}
