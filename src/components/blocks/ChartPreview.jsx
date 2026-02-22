import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, LabelList,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { TABLEAU_COLORS, formatNumber, getSequentialColor } from '../../utils/chartRenderer'

export default function ChartPreview({ chartResult, markSize = 50 }) {
  if (!chartResult || chartResult.status === 'empty') {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-[11px] text-tab-text-muted leading-relaxed">
            왼쪽 데이터 패인에서 필드를 끌어<br />
            열/행 선반에 놓으세요
          </p>
        </div>
      </div>
    )
  }

  if (chartResult.status === 'partial') {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-[11px] text-tab-text-dim">{chartResult.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full bg-white p-2 flex flex-col">
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart(chartResult, markSize)}
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function renderChart(chartResult, markSize = 50) {
  const {
    data, series, chartType: type,
    orientation = 'vertical', colorByApplied = false,
    colorMeasure, showLabel,
  } = chartResult

  // Scale factor from markSize (10-100) → 0.2-1.0
  const sizeFactor = 0.2 + (markSize - 10) * 0.8 / 90
  const barSize = Math.round(20 * sizeFactor + 8)  // 12-28px
  const dotRadius = Math.round(2 + 5 * sizeFactor) // 3-7px
  const pieRadius = Math.round(40 + 50 * sizeFactor) // 50-90px

  const tooltipStyle = {
    contentStyle: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: 2,
      fontSize: 11,
      fontFamily: 'Segoe UI, Malgun Gothic, system-ui, sans-serif',
      padding: '6px 10px',
    },
  }

  const axisStyle = {
    tick: { fill: '#666', fontSize: 10, fontFamily: 'Segoe UI, Malgun Gothic, system-ui' },
    axisLine: { stroke: '#ccc' },
    tickLine: { stroke: '#ccc' },
  }

  // Compute gradient colors when a measure is on the Color mark
  let gradientFills = null
  if (colorMeasure && data.length > 0) {
    const colorValues = data.map((d) => d.colorValue).filter((v) => v != null)
    const minVal = Math.min(...colorValues)
    const maxVal = Math.max(...colorValues)
    const range = maxVal - minVal || 1
    gradientFills = data.map((d) => {
      const t = (d.colorValue - minVal) / range
      return getSequentialColor(t)
    })
  }

  const labelProps = showLabel ? {
    position: 'top', fontSize: 9, fill: '#666',
    formatter: (v) => formatNumber(v),
  } : null

  switch (type) {
    case 'bar':
      if (orientation === 'horizontal') {
        return (
          <BarChart data={data} layout="vertical" margin={{ top: 15, right: 30, left: 50, bottom: 5 }}>
            <CartesianGrid strokeDasharray="none" stroke="#e8e8e8" horizontal={false} />
            <YAxis dataKey="name" type="category" {...axisStyle} width={45} />
            <XAxis type="number" {...axisStyle} tickFormatter={formatNumber} />
            <Tooltip {...tooltipStyle} />
            {series.length > 1 && <Legend wrapperStyle={{ fontSize: 10 }} />}
            {gradientFills ? (
              <Bar dataKey="value" barSize={barSize}>
                {data.map((_, i) => (
                  <Cell key={i} fill={gradientFills[i]} />
                ))}
                {showLabel && <LabelList dataKey="value" position="right" fontSize={9} fill="#666" formatter={formatNumber} />}
              </Bar>
            ) : (
              series.map((key, i) => (
                <Bar key={key} dataKey={key} fill={TABLEAU_COLORS[i % TABLEAU_COLORS.length]} barSize={barSize}>
                  {showLabel && <LabelList dataKey={key} position="right" fontSize={9} fill="#666" formatter={formatNumber} />}
                </Bar>
              ))
            )}
          </BarChart>
        )
      }
      return (
        <BarChart data={data} margin={{ top: 20, right: 20, left: 15, bottom: 5 }}>
          <CartesianGrid strokeDasharray="none" stroke="#e8e8e8" vertical={false} />
          <XAxis dataKey="name" {...axisStyle} />
          <YAxis {...axisStyle} tickFormatter={formatNumber} />
          <Tooltip {...tooltipStyle} />
          {series.length > 1 && <Legend wrapperStyle={{ fontSize: 10 }} />}
          {gradientFills ? (
            <Bar dataKey="value" barSize={barSize}>
              {data.map((_, i) => (
                <Cell key={i} fill={gradientFills[i]} />
              ))}
              {showLabel && <LabelList dataKey="value" {...labelProps} />}
            </Bar>
          ) : (
            series.map((key, i) => (
              <Bar key={key} dataKey={key} fill={TABLEAU_COLORS[i % TABLEAU_COLORS.length]} barSize={barSize}>
                {showLabel && <LabelList dataKey={key} {...labelProps} />}
              </Bar>
            ))
          )}
        </BarChart>
      )
    case 'line':
      return (
        <LineChart data={data} margin={{ top: 20, right: 20, left: 15, bottom: 5 }}>
          <CartesianGrid strokeDasharray="none" stroke="#e8e8e8" />
          <XAxis dataKey="name" {...axisStyle} />
          <YAxis {...axisStyle} tickFormatter={formatNumber} />
          <Tooltip {...tooltipStyle} />
          {series.length > 1 && <Legend wrapperStyle={{ fontSize: 10 }} />}
          {series.map((key, i) => (
            <Line key={key} dataKey={key} stroke={TABLEAU_COLORS[i % TABLEAU_COLORS.length]} strokeWidth={Math.max(1, Math.round(2 * sizeFactor))}
              dot={{ r: dotRadius, fill: TABLEAU_COLORS[i % TABLEAU_COLORS.length] }}
            >
              {showLabel && <LabelList dataKey={key} {...labelProps} />}
            </Line>
          ))}
        </LineChart>
      )
    case 'pie':
      return (
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={pieRadius}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            labelLine={{ stroke: '#999', strokeWidth: 1 }}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={colorByApplied ? TABLEAU_COLORS[i % TABLEAU_COLORS.length] : TABLEAU_COLORS[0]} />
            ))}
          </Pie>
          <Tooltip {...tooltipStyle} />
          {colorByApplied && <Legend wrapperStyle={{ fontSize: 10 }} />}
        </PieChart>
      )
    default:
      return (
        <BarChart data={data}>
          <Bar dataKey="value" fill={TABLEAU_COLORS[0]} barSize={barSize} />
        </BarChart>
      )
  }
}
