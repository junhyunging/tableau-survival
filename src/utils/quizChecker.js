export function checkQuizAnswer(problem, selectedIds) {
  if (problem.selectType === 'single') {
    const correct = problem.options.find((o) => o.isCorrect)
    return selectedIds.length === 1 && selectedIds[0] === correct.id
  }

  if (problem.selectType === 'multiple') {
    const correctIds = problem.options
      .filter((o) => o.isCorrect)
      .map((o) => o.id)
      .sort()
    const selected = [...selectedIds].sort()
    return (
      correctIds.length === selected.length &&
      correctIds.every((id, i) => id === selected[i])
    )
  }

  return false
}
