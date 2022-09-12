import { SET_SCORE } from '../actions'

const initialState = 0

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SCORE:
      return state + payload
    default:
      return state
  }
}

export default reducer

//
// SELECTORS
//

export const selectScore = (state) => state.score
