import React from 'react'
import { useSelector } from 'react-redux'
import { selectScore } from '../reducers/score'

// score board in top right corner
// get points from different phases
// redux state, why?
// you score in different components, so needs to be global

function Score() {
  const score = useSelector(selectScore)

  return <div>Your Score: {score}</div>
}

export default Score
