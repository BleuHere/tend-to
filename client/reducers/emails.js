import { SET_EMAIL } from '../actions'

const initialState = {}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_EMAIL:
      return payload
    default:
      return state
  }
}

export default reducer
