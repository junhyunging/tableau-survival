import { quizProblems } from '../../data/problems/quizProblems'
import { blockDragProblems } from '../../data/problems/blockDragProblems'
import { calcFieldProblems } from '../../data/problems/calcFieldProblems'
import QuizQuestion from './QuizQuestion'
import BlockDragQuestion from './BlockDragQuestion'
import CalcFieldQuestion from './CalcFieldQuestion'

function getProblemById(id) {
  return (
    quizProblems.find((p) => p.id === id) ||
    blockDragProblems.find((p) => p.id === id) ||
    calcFieldProblems.find((p) => p.id === id) ||
    null
  )
}

export default function QuestionRouter({ problemId, onComplete }) {
  const problem = getProblemById(problemId)

  if (!problem) {
    return (
      <div className="bg-bg-secondary rounded-xl p-8 text-center">
        <p className="text-text-secondary">문제를 찾을 수 없습니다: {problemId}</p>
        <button
          onClick={() => onComplete(true)}
          className="mt-4 px-6 py-2 bg-accent rounded-lg text-white cursor-pointer"
        >
          건너뛰기
        </button>
      </div>
    )
  }

  switch (problem.type) {
    case 'quiz':
      return <QuizQuestion problem={problem} onComplete={onComplete} />
    case 'block_drag':
      return <BlockDragQuestion problem={problem} onComplete={onComplete} />
    case 'calc_field':
      return <CalcFieldQuestion problem={problem} onComplete={onComplete} />
    default:
      return null
  }
}

export { getProblemById }
