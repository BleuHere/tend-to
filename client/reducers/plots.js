import { CHOP_WEEDS, FERTILISE_SOIL, SAVE_P_ONE } from '../actions'

const initialState = Array.from({ length: 12 }, (_, id) => ({
  id,
  name: 'weed',
  image: Math.ceil(Math.random() * 3),
}))

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHOP_WEEDS:
      return [
        ...state.map((plot) => {
          if (plot.id !== payload) {
            return plot
          }
          return {
            ...plot,
            name: 'soil',
            image: 4,
          }
        }),
      ]
    case FERTILISE_SOIL:
      return [
        ...state.map((soilState) => {
          if (soilState.id === payload && soilState.name === 'soil') {
            return {
              ...soilState,
              name: 'soil',
              image: 5,
            }
          } else {
            return soilState
          }
        }),
      ]
    case SAVE_P_ONE:
      return [
        ...state.forEach((plot) => {
          return {
            ...plot,
            name: 'soil',
            image: 4,
          }
        }),
      ]
    default:
      return state
  }
}

export default reducer

//
// SELECTORS
//

export const selectPlots = (state) => state.plots
