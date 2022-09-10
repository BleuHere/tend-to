import React from 'react'
import { useDispatch } from 'react-redux'
import { chopWeeds, fertiliseSoil } from '../actions'

const Plot = (props) => {
  const dispatch = useDispatch()

  const handleDoubleClick = (id) => {
    console.log('called')
    dispatch(chopWeeds(id))
  }

  const handleDragEnter = (id) => {
    dispatch(fertiliseSoil(id))
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
