import React from 'react'
import { useSelector } from 'react-redux'

import Plot from './Plot'
import { Tools } from './Tools'

import { selectPlots } from '../reducers/plots'

const Garden = () => {
  const plots = useSelector(selectPlots)

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
