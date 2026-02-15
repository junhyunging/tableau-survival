export function checkBlockAnswer(problem, blockState) {
  const answers = [problem.correctAnswer, ...(problem.alternativeAnswers || [])]

  for (const answer of answers) {
    const match = Object.keys(answer).every((slotId) => {
      if (answer[slotId] === null || answer[slotId] === undefined) return true
      // Aggregation is now automatic (SUM default), skip checking it
      if (slotId === 'aggregation') return true
      return blockState[slotId] === answer[slotId]
    })
    if (match) return { isCorrect: true }
  }
  return { isCorrect: false }
}

export function getProgress(problem, blockState) {
  const answer = problem.correctAnswer
  // Filter out aggregation since it's automatic now
  const keys = Object.keys(answer).filter((k) => answer[k] != null && k !== 'aggregation')
  const total = keys.length
  const matched = keys.filter((k) => blockState[k] === answer[k]).length
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
