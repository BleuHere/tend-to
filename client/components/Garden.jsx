import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Plot from './Plot'
import { Tools } from './Tools'

import { selectPlots } from '../reducers/plots'
import { fetchEmail, savePhaseOne } from '../actions'

const Garden = () => {
  const plots = useSelector(selectPlots)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (plots.filter((plot) => plot.image === 4).length === 20) {
    navigate('/note-from-a-friend/2')
    dispatch(fetchEmail(2))
  }

  return (
    <div className="container">
      <div className="garden">
        {plots.map((plot) => (
          <Plot key={plot.id} {...plot} />
        ))}
      </div>
      <Tools />
    </div>
  )
}

export default Garden
