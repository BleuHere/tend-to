import { CHOP_WEEDS } from '../actions'

const initialState = Array.from({ length: 20 }, (_, id) => ({
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
    default:
      return state
  }
}

export default reducer

//
// SELECTORS
//

export const selectPlots = (state) => state.plots
