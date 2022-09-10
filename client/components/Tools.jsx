import React from 'react'
// import { useDrag } from 'react-dnd'

export function Tools() {
  // const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
  //   type: 'TOOL',
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // }))

  return (
    <div className="toolbox">
      <h2>toolbox</h2>
      <div className="tool">
        <img
          className="tool-image"
          src="../images/wheel-barrow.png"
          alt="a green wheelbarrow"
        />
        <img
          className="tool-image"
          src="../images/seed1.png"
          alt="a brown seed"
        />
        <img
          className="tool-image"
          src="../images/seed2.png"
          alt="a brown seed"
        />
      </div>
    </div>
  )
}

// https://github.com/react-dnd/react-dnd/blob/main/packages/examples/src/01-dustbin/copy-or-move/Box.tsx
// examples of how the repo should be set up.
// currently getting error: Expected drag drop context
