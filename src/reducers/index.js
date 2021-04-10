import { combineReducers } from 'redux'
import count from './count'
import sex from './sex'
import events from './events'

export default combineReducers({ count, sex, events })

