import React from 'react'
import Plot from './Plot'
import { useSelector } from 'react-redux'
import { selectPlots } from '../reducers/plots'

const Garden = () => {
  const plots = useSelector(selectPlots)

  return (
    <div className="container">
      {plots.map((plot) => (
        <Plot key={plot.id} {...plot} />
      ))}
    </div>
  )
}

export default Garden
