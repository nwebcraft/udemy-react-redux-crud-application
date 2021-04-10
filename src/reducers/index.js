import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import count from './count'
import sex from './sex'
import events from './events'

export default combineReducers({ count, sex, events, form })
