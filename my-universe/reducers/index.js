
import series from './series'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { HYDRATE } from 'next-redux-wrapper'


const combined = combineReducers({ series })

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    if (state.count) nextState.count = state.count
    return nextState
  }
  else {
    return combined(state, action)
  }
}

const makeStore = context => createStore(reducer, applyMiddleware(thunkMiddleware))
const wrapper = createWrapper(makeStore, { debug: true })

export default wrapper