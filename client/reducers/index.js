import { combineReducers } from 'redux'

import emails from './emails'
import plots from './plots'
import userName from './userName'

export default combineReducers({
  emails,
  plots,
  userName,
})
