import { useDraggable } from '@dnd-kit/core'

const TYPE_PREFIX = {
  dimension: { icon: 'Abc', color: '#4e79a7' },
  measure: { icon: '#', color: '#59a14f' },
}

export default function DraggableBlock({ block }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `palette-${block.id}`,
    data: { block },
  })

  const prefix = TYPE_PREFIX[block.type] || { icon: '?', color: '#999' }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`flex items-center gap-1.5 px-2 py-[5px] text-[11px] text-[#333] rounded-sm cursor-grab active:cursor-grabbing select-none transition-colors hover:bg-[#daeaf7] ${isDragging ? 'opacity-30' : ''}`}
    >
      <span
        className="text-[10px] font-bold shrink-0 w-[24px] text-center"
        style={{ color: prefix.color }}
      >
        {prefix.icon}
      </span>
      <span className="truncate">{block.name}</span>
    </div>
  )
}
