import { SET_USERNAME } from '../actions'

const initialState = { userName: 'e hoa' }

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USERNAME:
      return { userName: payload }
    default:
      return state
  }
}

export default reducer

//
// SELECTORS
//

export const selectUserName = (state) => state.userName
