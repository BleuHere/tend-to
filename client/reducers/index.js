import { combineReducers } from 'redux'

import emails from './emails'
import plots from './plots'
import userName from './userName'
import score from './score'

export default combineReducers({
  emails,
  plots,
  userName,
  score,
})
