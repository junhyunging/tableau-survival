import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { TABLEAU_COLORS, formatNumber } from '../../utils/chartRenderer'

export default function ChartPreview({ chartResult }) {
  if (!chartResult || chartResult.status === 'empty') {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="text-4xl mb-3 opacity-15">📊</div>
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
          <div className="text-3xl mb-2 opacity-20">⚠️</div>
          <p className="text-[11px] text-tab-text-dim">{chartResult.message}</p>
        </div>
      </div>
    )
  }

  const { data, series, chartType, orientation = 'vertical' } = chartResult

  return (
    <div className="h-full bg-white p-2 flex flex-col">
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart(chartType, data, series, orientation)}
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function renderChart(type, data, series, orientation = 'vertical') {
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

  switch (type) {
    case 'bar':
      if (orientation === 'horizontal') {
        return (
          <BarChart data={data} layout="vertical" margin={{ top: 15, right: 20, left: 50, bottom: 5 }}>
            <CartesianGrid strokeDasharray="none" stroke="#e8e8e8" horizontal={false} />
            <YAxis dataKey="name" type="category" {...axisStyle} width={45} />
            <XAxis type="number" {...axisStyle} tickFormatter={formatNumber} />
            <Tooltip {...tooltipStyle} />
            {series.length > 1 && <Legend wrapperStyle={{ fontSize: 10 }} />}
            {series.map((key, i) => (
              <Bar key={key} dataKey={key} fill={TABLEAU_COLORS[i % TABLEAU_COLORS.length]} />
            ))}
          </BarChart>
        )
      }
      return (
        <BarChart data={data} margin={{ top: 15, right: 20, left: 15, bottom: 5 }}>
          <CartesianGrid strokeDasharray="none" stroke="#e8e8e8" vertical={false} />
          <XAxis dataKey="name" {...axisStyle} />
          <YAxis {...axisStyle} tickFormatter={formatNumber} />
          <Tooltip {...tooltipStyle} />
          {series.length > 1 && <Legend wrapperStyle={{ fontSize: 10 }} />}
          {series.map((key, i) => (
            <Bar key={key} dataKey={key} fill={TABLEAU_COLORS[i % TABLEAU_COLORS.length]} />
          ))}
        </BarChart>
      )
    case 'line':
      return (
        <LineChart data={data} margin={{ top: 15, right: 20, left: 15, bottom: 5 }}>
          <CartesianGrid strokeDasharray="none" stroke="#e8e8e8" />
          <XAxis dataKey="name" {...axisStyle} />
          <YAxis {...axisStyle} tickFormatter={formatNumber} />
          <Tooltip {...tooltipStyle} />
          {series.length > 1 && <Legend wrapperStyle={{ fontSize: 10 }} />}
          {series.map((key, i) => (
            <Line key={key} dataKey={key} stroke={TABLEAU_COLORS[i % TABLEAU_COLORS.length]} strokeWidth={2} dot={{ r: 3, fill: TABLEAU_COLORS[i % TABLEAU_COLORS.length] }} />
          ))}
        </LineChart>
      )
    case 'pie':
      return (
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            labelLine={{ stroke: '#999', strokeWidth: 1 }}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={TABLEAU_COLORS[i % TABLEAU_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip {...tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
        </PieChart>
      )
    default:
      return (
        <BarChart data={data}>
          <Bar dataKey="value" fill={TABLEAU_COLORS[0]} />
        </BarChart>
      )
  }
}
