import { getBlockAnswers } from '../data/problems/answerLoader'

// Normalize chartType: "auto" is treated as "bar" for matching
function normalizeSlot(slotId, value) {
  if (slotId === 'chartType' && value === 'auto') return 'bar'
  return value
}

export function checkBlockAnswer(problem, blockState) {
  const { correctAnswer, alternativeAnswers } = getBlockAnswers(problem.id)
  const answers = [correctAnswer, ...(alternativeAnswers || [])]

  for (const answer of answers) {
    const match = Object.keys(answer).every((slotId) => {
      if (answer[slotId] === null || answer[slotId] === undefined) return true
      if (slotId === 'aggregation') return true
      return normalizeSlot(slotId, blockState[slotId]) === answer[slotId]
    })
    if (match) return { isCorrect: true }
  }
  return { isCorrect: false }
}

export function getProgress(problem, blockState) {
  const { correctAnswer: answer } = getBlockAnswers(problem.id)
  const keys = Object.keys(answer).filter((k) => answer[k] != null && k !== 'aggregation')
  const total = keys.length
  const matched = keys.filter((k) => normalizeSlot(k, blockState[k]) === answer[k]).length
  return {
    matched,
    total,
    percentage: total > 0 ? Math.round((matched / total) * 100) : 0,
  }
}

export function getBossReaction(problem, blockState) {
  const progress = getProgress(problem, blockState)
  const hasXAxis = !!blockState.xAxis
  const hasYAxis = !!blockState.yAxis
  const hasChartType = !!blockState.chartType

  if (progress.percentage === 100) {
    return { expression: 'smile', comment: '바로 그거야! 완벽합니다.' }
  }
  if (hasXAxis && hasYAxis && hasChartType) {
    return { expression: 'default', comment: '오, 뭔가 만들어지고 있는데?' }
  }
  if (hasXAxis && !hasYAxis) {
    return { expression: 'default', comment: '좋아, 이제 세로축도 채워보세요.' }
  }
  if (!hasXAxis && hasYAxis) {
    return { expression: 'serious', comment: '가로축도 필요합니다.' }
  }
  if (!hasXAxis && !hasYAxis && hasChartType) {
    return { expression: 'default', comment: '차트 종류를 골랐군요. 이제 축을 채워보세요.' }
  }
  return { expression: 'default', comment: '' }
}
