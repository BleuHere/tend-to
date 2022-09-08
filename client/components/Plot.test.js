import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Plot from './Plot'

describe('<Plot />', () => {
  const i = 1
  const soilStates = [
    { id: 1, name: 'weed', image: Math.ceil(Math.random() * 3) },
    {
      id: 1,
      name: 'soil',
      image: 4,
    },
    { id: 1, name: 'soil', image: 5 },
  ]

  const chopWeeds = soilStates[1]
  const fertilise = soilStates[2]

  it('displays an image', () => {
    render(
      <Plot
        id={i}
        key={i}
        state={soilStates[i]}
        chopWeeds={chopWeeds}
        fertilise={fertilise}
      />
    )
    const image = screen.getByRole('img')
    expect(image).toBeTruthy()
  })
  it('displays image number 1 or 2 or 3 as default state', () => {
    render(
      <Plot
        id={i}
        key={i}
        state={soilStates[i]}
        chopWeeds={chopWeeds}
        fertilise={fertilise}
      />
    )
    const defaultState = soilStates[0]
    expect(defaultState.image).toBeGreaterThanOrEqual(1)
    expect(defaultState.image).toBeLessThanOrEqual(3)
  })
  it.todo('changes state on double-click')
  it.todo('changes state on drag-over')
})
