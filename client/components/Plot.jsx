import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { chopWeeds } from '../actions'

// so, dispatch thunk on handleEvent functions instead of in the app
// thunk will set the state of the plot
// set up a database?
// api call
// route

const Plot = (props) => {
  const dispatch = useDispatch()

  const handleDoubleClick = (id) => {
    console.log('called')
    dispatch(chopWeeds(id))
  }

  return (
    <div className="plot">
      <img
        src={`../images/${props.name}${props.image}.png`}
        onDoubleClick={() => handleDoubleClick(props.id)}
        onDragEnter={() => {
          props.fertilise(props.id)
        }}
        alt={`Illustration of ${props.id}`}
      />
    </div>
  )
}

export default Plot

// Math.ceil(Math.random() * 3)
