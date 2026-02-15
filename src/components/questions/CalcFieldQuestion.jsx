import CalcFieldEditor from '../calcfield/CalcFieldEditor'

export default function CalcFieldQuestion({ problem, onComplete }) {
  return (
    <CalcFieldEditor problem={problem} onComplete={onComplete} />
  )
}
