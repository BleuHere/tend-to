import React from 'react'
import { useDispatch } from 'react-redux'

import { chopWeeds, addPoints, fertiliseSoil } from '../actions'
// import { selectPlots } from '../reducers/plots'

const Plot = (props) => {
  // const plots = useSelector(selectPlots)

  const dispatch = useDispatch()

  const handleDoubleClick = (id) => {
    // let plot = plots.find((plot) => plot.id === id)
    // console.log(e.target)
    // e.target.removeEventListener('doubleClick', handleDoubleClick)
    dispatch(chopWeeds(id))
    dispatch(addPoints(1))
  }

  // above trying to only permit one doubleClick event per plot.

  const handleDragEnter = (id) => {
    dispatch(fertiliseSoil(id))
    dispatch(addPoints(0.5))
  }

  return (
    <div className="plot">
      <img
        src={`../images/${props.name}${props.image}.png`}
        onDoubleClick={() => handleDoubleClick(props.id)}
        onDragEnter={() => {
          handleDragEnter(props.id)
        }}
        alt={`Illustration of ${props.id}`}
      />
    </div>
  )
}

export default Plot
