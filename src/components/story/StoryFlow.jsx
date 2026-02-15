import { useState, useCallback, useEffect, useRef } from 'react'
import { useGameState, useGameDispatch } from '../../hooks/useGameState'
import { insightlabStory } from '../../data/stories/insightlabStories'
import VNScene from '../novel/VNScene'
import TransitionScene from '../common/TransitionScene'
import QuestionRouter from '../questions/QuestionRouter'

export default function StoryFlow() {
  const state = useGameState()
  const dispatch = useGameDispatch()
  const [showTransition, setShowTransition] = useState(true)
  const prevDayRef = useRef(state.currentDay)

  // Reset transition when day changes
  useEffect(() => {
    if (state.currentDay !== prevDayRef.current) {
      setShowTransition(true)
      prevDayRef.current = state.currentDay
    }
  }, [state.currentDay])

  const dayData = insightlabStory.days[state.currentDay]
  if (!dayData) return null

  const handleStoryComplete = () => {
    dispatch({ type: 'NEXT_PERIOD' })
  }

  const handleChoiceComplete = (choiceIndex, choice) => {
    dispatch({
      type: 'CHOICE_MADE',
      payload: {
        day: state.currentDay,
        eventType: 'lunch',
        choiceIndex,
        gaugeChange: choice.gaugeChange,
      },
    })
    dispatch({ type: 'NEXT_PERIOD' })
  }

  const handleProblemComplete = useCallback((isCorrect) => {
    const problems =
      state.currentPeriod === 'morningProblems'
        ? dayData.morningProblems || []
        : dayData.afternoonProblems || []

    if (state.currentProblemIndex < problems.length - 1) {
      dispatch({ type: 'NEXT_PROBLEM' })
    } else {
      dispatch({ type: 'NEXT_PERIOD' })
    }
  }, [dispatch, state.currentProblemIndex, state.currentPeriod, dayData])

  const handleTransitionComplete = () => {
    setShowTransition(false)
  }

  // Show day transition
  if (showTransition && state.currentPeriod === 'opening') {
    return (
      <TransitionScene
        day={state.currentDay}
        title={dayData.title}
        subtitle={dayData.subtitle}
        onComplete={handleTransitionComplete}
      />
    )
  }

  // Story periods (now using section objects with background/characters/dialogues)
  const storyPeriods = {
    opening: dayData.opening,
    morningIntro: dayData.morningIntro,
    afternoonIntro: dayData.afternoonIntro,
    endOfDay: dayData.endOfDay,
  }

  if (storyPeriods[state.currentPeriod]) {
    const section = storyPeriods[state.currentPeriod]
    return (
      <VNScene
        key={`${state.currentDay}-${state.currentPeriod}`}
        background={section.background}
        characters={section.characters}
        dialogues={section.dialogues}
        playerName={state.playerName}
        onComplete={handleStoryComplete}
      />
    )
  }

  // Lunch event - uses VNScene with built-in choice system
  if (state.currentPeriod === 'lunchEvent') {
    const lunch = dayData.lunchEvent
    return (
      <VNScene
        key={`${state.currentDay}-lunch`}
        background={lunch.background}
        characters={lunch.characters}
        dialogues={lunch.dialogues}
        choices={lunch.choices}
        playerName={state.playerName}
        onComplete={handleStoryComplete}
        onChoice={handleChoiceComplete}
      />
    )
  }

  // Problem periods
  if (state.currentPeriod === 'morningProblems' || state.currentPeriod === 'afternoonProblems') {
    const problems =
      state.currentPeriod === 'morningProblems'
        ? dayData.morningProblems || []
        : dayData.afternoonProblems || []

    const problemId = problems[state.currentProblemIndex]

    if (problemId) {
      return (
        <QuestionRouter
          key={problemId}
          problemId={problemId}
          onComplete={handleProblemComplete}
        />
      )
    }

    // No more problems
    dispatch({ type: 'NEXT_PERIOD' })
    return null
  }

  return null
}
