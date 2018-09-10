import { createStore, combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import eventReducer from './reducers/eventReducer'

const rootReducer = combineReducers ({
  authReducer,
  eventReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
