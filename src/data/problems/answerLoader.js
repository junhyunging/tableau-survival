import { _k } from './_key.js'

let _cache = null

function decode() {
  if (_cache) return _cache
  _cache = JSON.parse(atob(_k))
  return _cache
}

function toRegex(obj) {
  return new RegExp(obj._s, obj._f)
}

export function getQuizAnswers(problemId) {
  return decode().q[problemId] || []
}

export function getBlockAnswers(problemId) {
  const entry = decode().b[problemId]
  if (!entry) return { correctAnswer: {}, alternativeAnswers: [] }
  return { correctAnswer: entry.c, alternativeAnswers: entry.a }
}

export function getCalcAnswers(problemId) {
  const entry = decode().c[problemId]
  if (!entry) return { correctPatterns: [], sampleAnswer: '', partialFeedback: [] }
  return {
    correctPatterns: entry.cp.map(cp => ({
      pattern: toRegex(cp.p),
      description: cp.d,
    })),
    sampleAnswer: entry.sa,
    partialFeedback: entry.pf.map(pf => ({
      pattern: toRegex(pf.p),
      missing: pf.m ? toRegex(pf.m) : null,
      message: pf.msg,
    })),
  }
}
