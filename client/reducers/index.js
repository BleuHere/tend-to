import { combineReducers } from 'redux'

import emails from './emails'
import plots from './plots'

export default combineReducers({
  emails,
  plots,
})
