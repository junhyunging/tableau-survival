export function normalizeFormula(formula) {
  return formula
    .replace(/\s+/g, ' ')
    .replace(/\[\s+/g, '[')
    .replace(/\s+\]/g, ']')
    .trim()
}

export function validateSyntax(formula) {
  const issues = []

  const openParens = (formula.match(/\(/g) || []).length
  const closeParens = (formula.match(/\)/g) || []).length
  if (openParens !== closeParens) {
    issues.push({ type: 'bracket_match', message: '괄호가 일치하지 않습니다.' })
  }

  const openBrackets = (formula.match(/\[/g) || []).length
  const closeBrackets = (formula.match(/\]/g) || []).length
  if (openBrackets !== closeBrackets) {
    issues.push({ type: 'field_bracket', message: '필드 참조 괄호([])가 일치하지 않습니다.' })
  }

  const ifCount = (formula.match(/\bIF\b/gi) || []).length
  const caseCount = (formula.match(/\bCASE\b/gi) || []).length
  const endCount = (formula.match(/\bEND\b/gi) || []).length
  if (ifCount + caseCount !== endCount) {
    issues.push({ type: 'if_end_match', message: 'IF/CASE와 END가 짝이 맞지 않습니다.' })
  }

  return issues
}

export function checkCalcAnswer(formula, correctPatterns) {
  const normalized = normalizeFormula(formula)

  for (const pattern of correctPatterns) {
    if (pattern.pattern.test(normalized)) {
      return { isCorrect: true, matchedPattern: pattern.description }
    }
  }
  return { isCorrect: false }
}

export function getPartialFeedback(formula, partialFeedback) {
  if (!partialFeedback) return null
  const normalized = normalizeFormula(formula)

  for (const fb of partialFeedback) {
    if (fb.pattern.test(normalized) && fb.missing && !fb.missing.test(normalized)) {
      return fb.message
    }
  }
  return null
}
