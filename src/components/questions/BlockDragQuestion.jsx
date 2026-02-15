import { useState } from 'react'
import BlockWorkspace from '../blocks/BlockWorkspace'

export default function BlockDragQuestion({ problem, onComplete }) {
  return (
    <BlockWorkspace problem={problem} onComplete={onComplete} />
  )
}
