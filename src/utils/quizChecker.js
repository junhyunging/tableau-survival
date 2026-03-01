import { getQuizAnswers } from '../data/problems/answerLoader'

export function checkQuizAnswer(problem, selectedIds) {
  const correctIds = getQuizAnswers(problem.id)

  if (problem.selectType === 'single') {
    return selectedIds.length === 1 && correctIds.includes(selectedIds[0])
  }

  if (problem.selectType === 'multiple') {
    const sorted = [...correctIds].sort()
    const selected = [...selectedIds].sort()
    return (
      sorted.length === selected.length &&
      sorted.every((id, i) => id === selected[i])
    )
  }

  return false
}
