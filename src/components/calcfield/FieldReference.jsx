export default function FieldReference({ fields, onInsert }) {
  const typeIcons = {
    number: '🔢',
    string: '📝',
    date: '📅',
  }

  return (
    <div>
      <div className="flex items-center gap-1 mb-2">
        <span className="text-[10px] font-bold text-tab-text-dim uppercase tracking-wider">필드</span>
      </div>
      <div className="flex flex-col gap-0.5">
        {fields.map((field) => (
          <button
            key={field.name}
            onClick={() => onInsert(`[${field.name}]`)}
            className="text-left text-[11px] px-2 py-1.5 hover:bg-tab-accent/10 rounded cursor-pointer flex items-center gap-2 transition-colors"
          >
            <span className="text-sm">{typeIcons[field.type] || '📄'}</span>
            <span className="text-tab-orange font-mono font-medium">[{field.name}]</span>
            <span className="text-tab-text-muted text-[10px]">({field.korName})</span>
          </button>
        ))}
      </div>
    </div>
  )
}
