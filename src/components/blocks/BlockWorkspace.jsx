import { useState, useMemo, useCallback, useEffect } from 'react'
import { DndContext, DragOverlay, useSensor, useSensors, PointerSensor } from '@dnd-kit/core'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { computeChartData } from '../../utils/chartRenderer'
import { checkBlockAnswer, getBossReaction, getProgress } from '../../utils/blockDragChecker'
import BlockPalette from './BlockPalette'
import DroppableSlot from './DroppableSlot'
import ChartPreview from './ChartPreview'
import { EXPRESSION_EMOJI } from '../story/VisualNovel'

const PILL_BG = {
  dimension: '#6e95be',
  measure: '#6db368',
  chartType: '#b07aa1',
}

const AUTO_BLOCK = { id: 'auto', name: '자동', type: 'chartType' }

const CHART_TYPES = [
  { id: 'auto', label: '자동' },
  { id: 'bar', label: '막대' },
  { id: 'line', label: '라인' },
  { id: 'pie', label: '파이' },
]

const MARK_PROPERTIES = [
  { slotId: 'colorBy', label: '색상', icon: '●', iconColor: '#4e79a7' },
  { slotId: 'sizeBy', label: '크기', icon: '◐', iconColor: '#666' },
  { slotId: 'labelBy', label: '레이블', icon: 'T', iconColor: '#666' },
  { slotId: 'detailBy', label: '세부 정보', icon: '⊞', iconColor: '#666' },
  { slotId: 'tooltipBy', label: '도구 설명', icon: '≡', iconColor: '#666' },
]

export default function BlockWorkspace({ problem, onComplete }) {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [filledSlots, setFilledSlots] = useState({})
  const [activeDragBlock, setActiveDragBlock] = useState(null)
  const [invalidSlotId, setInvalidSlotId] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [markSize, setMarkSize] = useState(50)
  const [showSizeSlider, setShowSizeSlider] = useState(false)

  // Default to "자동" chart type on mount
  useEffect(() => {
    setFilledSlots((prev) => ({ ...prev, chartType: AUTO_BLOCK }))
  }, [])

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))

  const blockState = useMemo(() => {
    const state = {}
    for (const slot of problem.slots) {
      state[slot.id] = filledSlots[slot.id]?.id || null
    }
    return state
  }, [filledSlots, problem.slots])

  const chartResult = useMemo(() => computeChartData(problem.sampleData, blockState), [problem.sampleData, blockState])
  const bossReaction = useMemo(() => getBossReaction(problem, blockState), [problem, blockState])
  const progress = useMemo(() => getProgress(problem, blockState), [problem, blockState])

  const handleDragStart = useCallback((event) => {
    setActiveDragBlock(event.active.data.current?.block || null)
    setInvalidSlotId(null)
  }, [])

  const handleDragEnd = useCallback((event) => {
    const { over, active } = event
    setActiveDragBlock(null)
    if (!over) return
    const block = active.data.current?.block
    const slot = over.data.current?.slot
    if (!block || !slot) return
    if (!slot.accepts.includes(block.type)) {
      setInvalidSlotId(slot.id)
      setTimeout(() => setInvalidSlotId(null), 800)
      return
    }
    setFilledSlots((prev) => ({ ...prev, [slot.id]: block }))
  }, [])

  const handleRemove = useCallback((slotId) => {
    setFilledSlots((prev) => { const next = { ...prev }; delete next[slotId]; return next })
  }, [])

  const handleChartTypeSelect = (chartId) => {
    if (chartId === 'auto') {
      setFilledSlots((prev) => ({ ...prev, chartType: AUTO_BLOCK }))
      return
    }
    const block = problem.availableBlocks.chartTypes.find((b) => b.id === chartId)
    if (block) setFilledSlots((prev) => ({ ...prev, chartType: block }))
  }

  const handleReset = () => {
    setFilledSlots({ chartType: AUTO_BLOCK })
    setSubmitted(false)
    setIsCorrect(false)
  }

  const handleSubmit = () => {
    const result = checkBlockAnswer(problem, blockState)
    setIsCorrect(result.isCorrect)
    setSubmitted(true)
    if (result.isCorrect) dispatch({ type: 'ANSWER_CORRECT', payload: { problemId: problem.id } })
    else dispatch({ type: 'ANSWER_INCORRECT', payload: { problemId: problem.id } })
  }

  const getSlot = (id) => problem.slots.find((s) => s.id === id)

  return (
    <div className="w-full animate-slide-up">
      {/* Boss instruction bar */}
      <div className="flex items-center gap-3 mb-2 px-1">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-xl border border-accent/20 shrink-0">
          {EXPRESSION_EMOJI.seoyeon[submitted ? (isCorrect ? 'smile' : 'serious') : bossReaction.expression]}
        </div>
        <div className="flex-1 bg-[#0f1a2e] rounded-lg px-4 py-2.5 border border-white/[0.06]">
          <span className="text-[14px] text-white/90">{problem.instruction}</span>
          {!submitted && bossReaction.comment && (
            <span className="text-[12px] text-white/40 ml-2">— {bossReaction.comment}</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-20 h-2 bg-white/[0.06] rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${progress.percentage}%` }} />
          </div>
          <span className="text-[11px] text-white/40 font-medium">{progress.matched}/{progress.total}</span>
        </div>
      </div>

      {/* ===== TABLEAU DESKTOP WORKSPACE ===== */}
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="tableau-workspace rounded-lg overflow-hidden border border-[#b0b0b0] shadow-xl" style={{ height: 'calc(100vh - 180px)', minHeight: '520px' }}>

          {/* ── Top toolbar ── */}
          <div className="h-8 bg-[#f0f0f0] border-b border-[#c0c0c0] flex items-center px-2 gap-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <rect x="1" y="1" width="5" height="5" rx="0.5" fill="#4e79a7" />
              <rect x="8" y="1" width="5" height="5" rx="0.5" fill="#59a14f" />
              <rect x="1" y="8" width="5" height="5" rx="0.5" fill="#e8832a" />
              <rect x="8" y="8" width="5" height="5" rx="0.5" fill="#b07aa1" />
            </svg>
            <div className="w-px h-4 bg-[#ccc] mx-2" />
            <div className="flex items-center gap-0.5 px-2 py-0.5 bg-white border border-[#bbb] rounded-sm">
              <span className="text-[10px] text-[#444]">전체 보기</span>
              <span className="text-[9px] text-[#999]">▾</span>
            </div>
            <div className="flex-1" />
            <button
              onClick={handleReset}
              className="px-3 py-1 text-[10px] text-[#666] hover:text-[#333] hover:bg-[#ddd] rounded cursor-pointer border border-transparent hover:border-[#bbb]"
            >
              초기화
            </button>
          </div>

          <div className="flex" style={{ height: 'calc(100% - 32px - 26px)' }}>
            {/* ── Left: Data Pane ── */}
            <div className="w-[190px] shrink-0">
              <BlockPalette availableBlocks={problem.availableBlocks} />
            </div>

            {/* ── Right: Shelves + Viz area ── */}
            <div className="flex-1 flex flex-col bg-[#e8e8e8] min-w-0">

              {/* 열 (Columns) shelf */}
              <div className="bg-[#f0f0f0] border-b border-[#c8c8c8] py-0.5 px-0">
                <DroppableSlot
                  slot={{ ...getSlot('xAxis'), shortLabel: '열' }}
                  filledBlock={filledSlots.xAxis || null}
                  onRemove={handleRemove}
                  isInvalidDrop={invalidSlotId === 'xAxis'}
                  layout="shelf"
                />
              </div>

              {/* 행 (Rows) shelf */}
              <div className="bg-[#f0f0f0] border-b border-[#c8c8c8] py-0.5 px-0">
                <DroppableSlot
                  slot={{ ...getSlot('yAxis'), shortLabel: '행' }}
                  filledBlock={filledSlots.yAxis || null}
                  onRemove={handleRemove}
                  isInvalidDrop={invalidSlotId === 'yAxis'}
                  layout="shelf"
                />
              </div>

              {/* 필터 shelf */}
              <div className="bg-[#f0f0f0] border-b border-[#c8c8c8] py-0.5 px-0">
                <DroppableSlot
                  slot={{ ...getSlot('filter'), shortLabel: '필터' }}
                  filledBlock={filledSlots.filter || null}
                  onRemove={handleRemove}
                  isInvalidDrop={invalidSlotId === 'filter'}
                  layout="shelf"
                />
              </div>

              {/* ── Main area: Marks card | Viz canvas ── */}
              <div className="flex-1 flex min-h-0">

                {/* Marks card sidebar */}
                <div className="w-[180px] shrink-0 bg-[#f0f0f0] border-r border-[#c8c8c8] overflow-y-auto flex flex-col">
                  {/* 마크 header */}
                  <div className="px-2.5 py-1.5 border-b border-[#d4d4d4]">
                    <span className="text-[11px] font-semibold text-[#333]">마크</span>
                  </div>

                  {/* "전체" tab */}
                  <div className="px-2.5 py-1 border-b border-[#d4d4d4]">
                    <span className="text-[10px] text-[#666] bg-white px-2 py-0.5 border border-[#c0c0c0] rounded-sm inline-block">전체</span>
                  </div>

                  {/* Chart type selector — 자동 / 막대 / 라인 / 파이 */}
                  <div className="px-2.5 py-1.5 border-b border-[#d4d4d4]">
                    <div className="flex items-center gap-1.5 bg-white border border-[#b0b0b0] px-2 py-1 rounded-sm">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="#555">
                        <rect x="0" y="2" width="3" height="8" /><rect x="4" y="0" width="3" height="10" /><rect x="8" y="4" width="2" height="6" />
                      </svg>
                      <select
                        value={filledSlots.chartType?.id || 'auto'}
                        onChange={(e) => handleChartTypeSelect(e.target.value)}
                        className="text-[11px] text-[#333] bg-transparent border-none outline-none flex-1 cursor-pointer appearance-none font-medium"
                      >
                        {CHART_TYPES.map((ct) => (
                          <option key={ct.id} value={ct.id}>{ct.label}</option>
                        ))}
                      </select>
                      <span className="text-[9px] text-[#999]">▾</span>
                    </div>
                  </div>

                  {/* Mark property cards — 3+2 grid like real Tableau */}
                  <div className="px-2 py-2 flex flex-col gap-1.5 flex-1">
                    {/* Top row: 색상, 크기, 레이블 */}
                    <div className="grid grid-cols-3 gap-1">
                      {MARK_PROPERTIES.slice(0, 3).map(({ slotId, label, icon, iconColor }) => {
                        const slot = getSlot(slotId)
                        if (!slot) return null
                        return (
                          <DroppableSlot
                            key={slotId}
                            slot={{ ...slot, label, icon, iconColor }}
                            filledBlock={filledSlots[slotId] || null}
                            onRemove={handleRemove}
                            isInvalidDrop={invalidSlotId === slotId}
                            layout="card"
                            onClick={slotId === 'sizeBy' ? () => setShowSizeSlider((v) => !v) : undefined}
                          />
                        )
                      })}
                    </div>
                    {/* Size slider popup */}
                    {showSizeSlider && (
                      <div className="bg-white border border-[#c0c0c0] rounded-sm p-2 shadow-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-[#666]">크기</span>
                          <span className="text-[9px] text-[#999]">{markSize}%</span>
                        </div>
                        <input
                          type="range"
                          min={10}
                          max={100}
                          value={markSize}
                          onChange={(e) => setMarkSize(Number(e.target.value))}
                          className="w-full h-1 accent-[#4e79a7] cursor-pointer"
                        />
                        <div className="flex justify-between text-[8px] text-[#aaa] mt-0.5">
                          <span>작게</span>
                          <span>크게</span>
                        </div>
                      </div>
                    )}
                    {/* Bottom row: 세부 정보, 도구 설명 */}
                    <div className="grid grid-cols-2 gap-1">
                      {MARK_PROPERTIES.slice(3).map(({ slotId, label, icon, iconColor }) => {
                        const slot = getSlot(slotId)
                        if (!slot) return null
                        return (
                          <DroppableSlot
                            key={slotId}
                            slot={{ ...slot, label, icon, iconColor }}
                            filledBlock={filledSlots[slotId] || null}
                            onRemove={handleRemove}
                            isInvalidDrop={invalidSlotId === slotId}
                            layout="card"
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* ── Visualization canvas ── */}
                <div className="flex-1 min-w-0">
                  <ChartPreview chartResult={chartResult} markSize={markSize} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Sheet tabs (bottom) ── */}
          <div className="h-[26px] bg-[#e8e8e8] border-t border-[#c0c0c0] flex items-end px-1">
            <div className="tab-sheet-tab tab-sheet-tab-active">시트 1</div>
          </div>
        </div>

        {/* Drag overlay */}
        <DragOverlay>
          {activeDragBlock && (
            <div
              className="tab-drag-pill"
              style={{ background: PILL_BG[activeDragBlock.type] || '#666' }}
            >
              {activeDragBlock.type === 'measure' ? `합계(${activeDragBlock.name})` : activeDragBlock.name}
            </div>
          )}
        </DragOverlay>
      </DndContext>

      {/* Hint + Feedback */}
      {showHint && problem.hint && !submitted && (
        <div className="mt-3 p-4 bg-amber-500/[0.06] border border-amber-400/20 rounded-xl">
          <p className="text-[13px] text-amber-300/90 leading-relaxed">
            <span className="font-semibold text-amber-300 mr-1.5">힌트</span>
            {problem.hint}
          </p>
        </div>
      )}

      {submitted && (
        <div className={`mt-3 p-5 rounded-xl border ${isCorrect ? 'bg-emerald-500/[0.06] border-emerald-400/20' : 'bg-red-500/[0.06] border-red-400/20'}`}>
          <p className={`font-bold text-[15px] mb-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
            {isCorrect ? '정답!' : '오답'}
          </p>
          <p className="text-[14px] text-white/60 leading-relaxed">{problem.explanation}</p>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-2.5 justify-end items-center mt-3">
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
            className="text-[13px] text-white/30 hover:text-white/60 cursor-pointer transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/30"
          >
            {state.hints <= 0 ? '힌트 없음' : '힌트 보기'}
          </button>
        )}
        {!submitted && (
          <button onClick={handleSubmit}
            className="px-7 py-2.5 bg-accent hover:bg-accent-glow text-white rounded-xl text-[15px] font-semibold cursor-pointer transition-all hover:shadow-[0_0_24px_rgba(91,141,240,0.25)]">
            제출
          </button>
        )}
        {submitted && !isCorrect && (
          <button onClick={() => { setSubmitted(false); setIsCorrect(false); setShowHint(true) }}
            className="px-6 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white/80 rounded-xl text-[15px] font-medium cursor-pointer transition-all">
            다시 풀기
          </button>
        )}
        {submitted && (
          <button onClick={() => onComplete(isCorrect)}
            className="px-7 py-2.5 bg-accent hover:bg-accent-glow text-white rounded-xl text-[15px] font-semibold cursor-pointer transition-all hover:shadow-[0_0_24px_rgba(91,141,240,0.25)]">
            {isCorrect ? '다음으로' : '넘어가기'}
          </button>
        )}
      </div>
    </div>
  )
}
