import DraggableBlock from './DraggableBlock'

export default function BlockPalette({ availableBlocks, dataSourceName }) {
  return (
    <div className="bg-white border-r border-[#c8c8c8] flex flex-col h-full overflow-hidden">
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
