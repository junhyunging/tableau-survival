import { useDroppable } from '@dnd-kit/core'

const PILL_CLASS = {
  dimension: 'tab-pill tab-pill-dim',
  measure: 'tab-pill tab-pill-meas',
}

export default function DroppableSlot({ slot, filledBlock, onRemove, isInvalidDrop, layout = 'shelf' }) {
  const { setNodeRef, isOver } = useDroppable({
    id: `slot-${slot.id}`,
    data: { slot },
  })

  // ===== Shelf layout (열/행 - Columns/Rows) =====
  if (layout === 'shelf') {
    const shelfBg = isInvalidDrop
      ? 'bg-[#ffe0e0] border-[#e15759]'
      : isOver
        ? 'bg-[#d4e8ff] border-[#2c6fbb]'
        : 'bg-[#f5f5f5] border-[#c0c0c0]'

    return (
      <div className="flex items-center">
        <div className="w-12 shrink-0 flex items-center justify-end pr-2 gap-1">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="#999">
            <rect x="0" y="0" width="2" height="2" /><rect x="3.5" y="0" width="2" height="2" /><rect x="7" y="0" width="2" height="2" />
            <rect x="0" y="3.5" width="2" height="2" /><rect x="3.5" y="3.5" width="2" height="2" /><rect x="7" y="3.5" width="2" height="2" />
            <rect x="0" y="7" width="2" height="2" /><rect x="3.5" y="7" width="2" height="2" /><rect x="7" y="7" width="2" height="2" />
          </svg>
          <span className="text-[11px] font-medium text-[#666] select-none">{slot.shortLabel}</span>
        </div>
        <div
          ref={setNodeRef}
          className={`flex-1 min-h-[28px] px-2 flex items-center gap-1 flex-wrap border transition-all ${shelfBg}`}
        >
          {filledBlock ? (
            <span className={PILL_CLASS[filledBlock.type] || 'tab-pill tab-pill-dim'}>
              {filledBlock.type === 'measure' ? `합계(${filledBlock.name})` : filledBlock.name}
              <span className="pill-remove" onClick={(e) => { e.stopPropagation(); onRemove(slot.id) }}>▾</span>
            </span>
          ) : (
            <span className="text-[10px] text-[#aaa] italic select-none">
              {isOver ? (isInvalidDrop ? '놓을 수 없음' : '여기에 놓기') : ''}
            </span>
          )}
        </div>
      </div>
    )
  }

  // ===== Marks property layout (색상, 필터 etc.) =====
  const marksBg = isInvalidDrop
    ? 'bg-[#ffe0e0] border-[#e15759]'
    : isOver
      ? 'bg-[#d4e8ff] border-[#2c6fbb]'
      : 'bg-[#f5f5f5] border-[#c0c0c0]'

  const iconColor = slot.label === '색상' ? '#4e79a7' : '#666'

  return (
    <div className="flex items-center gap-1.5">
      {slot.icon && (
        <span className="text-[12px] w-5 text-center shrink-0" style={{ color: iconColor }}>{slot.icon}</span>
      )}
      <span className="text-[10px] text-[#666] shrink-0 w-8 select-none">{slot.label}</span>
      <div
        ref={setNodeRef}
        className={`flex-1 min-w-0 min-h-[26px] px-1.5 flex items-center gap-1 border rounded-sm transition-all ${marksBg}`}
      >
        {filledBlock ? (
          <span className={PILL_CLASS[filledBlock.type] || 'tab-pill tab-pill-dim'}>
            {filledBlock.name}
            <span className="pill-remove" onClick={(e) => { e.stopPropagation(); onRemove(slot.id) }}>×</span>
          </span>
        ) : (
          <span className="text-[9px] text-[#bbb] italic select-none">
            {isOver ? '여기에 놓기' : ''}
          </span>
        )}
      </div>
    </div>
  )
}
