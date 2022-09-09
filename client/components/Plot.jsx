import React from 'react'

const Plot = (props) => {
  return (
    <div className="plot">
      <img
        src={`../images/${props.state.name}${
          props.state.image <= 3
            ? Math.ceil(Math.random() * 3)
            : props.state.image
        }.png`}
        onDoubleClick={() => props.chopWeeds(props.id)}
        onDragEnter={() => {
          props.fertilise(props.id)
        }}
        alt={`Illustration of ${props.state.image}`}
      />
    </div>
  )
}

export default Plot
