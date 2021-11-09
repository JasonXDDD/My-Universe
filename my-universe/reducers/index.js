
import { combineReducers } from 'redux'
import card from './card'
import series from './series'

const bottleNekoApp = combineReducers({
  card,
  series
})

export default bottleNekoApp