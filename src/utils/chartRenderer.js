export const TABLEAU_COLORS = [
  '#4E79A7', '#F28E2B', '#E15759', '#76B7B2', '#59A14F',
  '#EDC948', '#B07AA1', '#FF9DA7', '#9C755F', '#BAB0AC',
]

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key]
    if (!acc[k]) acc[k] = []
    acc[k].push(item)
    return acc
  }, {})
}

export function aggregate(rows, field, method) {
  const values = rows.map((r) => r[field]).filter((v) => v != null)
  if (values.length === 0) return 0

  switch (method) {
    case 'SUM':
      return values.reduce((a, b) => a + b, 0)
    case 'AVG':
      return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 100) / 100
    case 'COUNT':
      return values.length
    case 'MIN':
      return Math.min(...values)
    case 'MAX':
      return Math.max(...values)
    default:
      return values.reduce((a, b) => a + b, 0)
  }
}

export function computeChartData(sampleData, blockState) {
  const { chartType, xAxis, yAxis, colorBy, aggregation = 'SUM', filter } = blockState

  // Filter
  let filtered = sampleData
  if (filter) {
    filtered = sampleData.filter((row) => row[filter] != null)
  }

  // Empty state
  if (!xAxis && !yAxis) {
    return { status: 'empty', message: '블록을 슬롯에 끼워보세요!' }
  }

  if (!chartType) {
    return { status: 'partial', message: '차트 종류를 먼저 선택해주세요.' }
  }

  if (!xAxis || !yAxis) {
    return { status: 'partial', message: '가로축과 세로축 모두 채워주세요.' }
  }

  // Determine which field is the dimension (grouping) and which is the measure
  const dimensionFields = ['category', 'region', 'segment', 'month', 'customer']
  let groupField, valueField

  // orientation: 'vertical' = normal (dimension on 열/xAxis, measure on 행/yAxis)
  //              'horizontal' = flipped (measure on 열/xAxis, dimension on 행/yAxis)
  let orientation = 'vertical'

  if (dimensionFields.includes(xAxis)) {
    groupField = xAxis
    valueField = yAxis
    orientation = 'vertical'
  } else if (dimensionFields.includes(yAxis)) {
    groupField = yAxis
    valueField = xAxis
    orientation = 'horizontal'
  } else {
    groupField = xAxis
    valueField = yAxis
  }

  // Without color grouping
  if (!colorBy) {
    const grouped = groupBy(filtered, groupField)
    const chartData = Object.entries(grouped).map(([key, rows]) => ({
      name: key,
      value: aggregate(rows, valueField, aggregation),
    }))
    return { status: 'ready', data: chartData, series: ['value'], chartType: chartType || 'bar', orientation }
  }

  // With color grouping
  const colorValues = [...new Set(filtered.map((r) => r[colorBy]))]
  const grouped = groupBy(filtered, groupField)
  const chartData = Object.entries(grouped).map(([key, rows]) => {
    const point = { name: key }
    colorValues.forEach((cv) => {
      const subRows = rows.filter((r) => r[colorBy] === cv)
      point[cv] = aggregate(subRows, valueField, aggregation)
    })
    return point
  })

  return { status: 'ready', data: chartData, series: colorValues, chartType: chartType || 'bar', orientation }
}

export function formatNumber(num) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
  return num.toString()
}
