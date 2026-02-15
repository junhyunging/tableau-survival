import DraggableBlock from './DraggableBlock'

export default function BlockPalette({ availableBlocks, dataSourceName }) {
  return (
    <div className="bg-white border-r border-[#c8c8c8] flex flex-col h-full overflow-hidden">
      {/* Tabs: 데이터 | 분석 */}
      <div className="flex border-b border-[#c8c8c8]">
        <div className="flex-1 py-2 text-center text-[11px] font-semibold text-[#333] bg-white border-b-2 border-[#2c6fbb] cursor-default">
          데이터
        </div>
        <div className="flex-1 py-2 text-center text-[11px] text-[#999] bg-[#f0f0f0] cursor-default">
          분석
        </div>
      </div>

      {/* Data source */}
      <div className="px-3 py-2 border-b border-[#d4d4d4]">
        <div className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="1" width="4" height="4" rx="0.5" fill="#4e79a7" opacity="0.7" />
            <rect x="7" y="1" width="4" height="4" rx="0.5" fill="#59a14f" opacity="0.7" />
            <rect x="1" y="7" width="4" height="4" rx="0.5" fill="#e8832a" opacity="0.7" />
            <rect x="7" y="7" width="4" height="4" rx="0.5" fill="#b07aa1" opacity="0.7" />
          </svg>
          <span className="text-[10px] text-[#666] truncate">{dataSourceName || '슈퍼스토어 (샘플)'}</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-3 py-1.5 border-b border-[#d4d4d4]">
        <div className="flex items-center bg-white border border-[#bbb] rounded-sm px-2 py-1">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="shrink-0 mr-1.5">
            <circle cx="5" cy="5" r="3.5" stroke="#999" strokeWidth="1.2" fill="none" />
            <line x1="7.5" y1="7.5" x2="10" y2="10" stroke="#999" strokeWidth="1.2" />
          </svg>
          <span className="text-[10px] text-[#aaa]">검색</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* 차원 header */}
        <div className="px-3 pt-3 pb-1.5 flex items-center gap-1.5">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <rect width="8" height="8" rx="1" fill="#4e79a7" opacity="0.3" />
          </svg>
          <span className="text-[10px] font-bold text-[#4e79a7] tracking-wide uppercase">차원</span>
        </div>

        {/* Dimensions */}
        <div className="px-1.5">
          {availableBlocks.dimensions.map((block) => (
            <DraggableBlock key={block.id} block={block} />
          ))}
        </div>

        {/* Separator */}
        <div className="mx-3 my-2 border-t border-[#d4d4d4]" />

        {/* 측정값 header */}
        <div className="px-3 pb-1.5 flex items-center gap-1.5">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <rect width="8" height="8" rx="1" fill="#59a14f" opacity="0.3" />
          </svg>
          <span className="text-[10px] font-bold text-[#59a14f] tracking-wide uppercase">측정값</span>
        </div>

        {/* Measures */}
        <div className="px-1.5 pb-3">
          {availableBlocks.measures.map((block) => (
            <DraggableBlock key={block.id} block={block} />
          ))}
        </div>
      </div>
    </div>
  )
}
