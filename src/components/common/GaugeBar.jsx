import { useGameState } from '../../hooks/useGameState'

export default function GaugeBar() {
  const { gauge } = useGameState()

  const getColor = () => {
    if (gauge >= 70) return '#48A868'
    if (gauge >= 50) return '#F28E2B'
    return '#e15759'
  }

  const getLabel = () => {
    if (gauge >= 70) return '양호'
    if (gauge >= 50) return '불안'
    if (gauge > 30) return '위험'
    return '해고 위기'
  }

  const getLabelColor = () => {
    if (gauge >= 70) return 'text-gauge-high'
    if (gauge >= 50) return 'text-gauge-mid'
    return 'text-gauge-low'
  }

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[11px] text-text-dim whitespace-nowrap">호감도</span>
      <div className="gauge-track w-28">
        <div
          className="gauge-fill"
          style={{ width: `${gauge}%`, background: getColor() }}
        />
      </div>
      <span className={`text-xs font-bold min-w-[1.5rem] text-right ${getLabelColor()}`}>{gauge}</span>
      <span className={`text-[10px] font-medium ${getLabelColor()}`}>{getLabel()}</span>
    </div>
  )
}
