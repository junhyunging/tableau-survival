import { useState } from 'react'
import { tableauFunctions } from '../../data/tableauFunctions'

export default function FunctionReference({ onInsert }) {
  const [expandedCategory, setExpandedCategory] = useState(null)

  return (
    <div>
      <div className="flex items-center gap-1 mb-2">
        <span className="text-[10px] font-bold text-tab-text-dim uppercase tracking-wider">함수</span>
      </div>
      {Object.entries(tableauFunctions).map(([key, category]) => (
        <div key={key} className="mb-0.5">
          <button
            onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
            className="w-full text-left text-[11px] px-2 py-1.5 hover:bg-tab-shelf rounded flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <span className="text-sm">{category.icon}</span>
            <span className="font-medium text-tab-text">{category.label}</span>
            <span className="ml-auto text-[9px] text-tab-text-muted">
              {expandedCategory === key ? '▾' : '▸'}
            </span>
          </button>

          {expandedCategory === key && (
            <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l-2 border-tab-divider pl-2">
              {category.functions.map((fn) => (
                <button
                  key={fn.name}
                  onClick={() => onInsert(fn.syntax)}
                  className="text-left text-[11px] px-2 py-1 hover:bg-tab-accent/10 rounded cursor-pointer group transition-colors"
                >
                  <span className="text-tab-accent font-mono font-medium">{fn.name}</span>
                  <span className="text-tab-text-muted text-[10px] ml-1 hidden group-hover:inline">
                    — {fn.description}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
